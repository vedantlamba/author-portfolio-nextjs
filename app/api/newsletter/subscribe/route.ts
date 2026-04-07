import { NextResponse } from "next/server";

const mailerLiteApiBaseUrl = "https://connect.mailerlite.com/api";

function getMailerLiteApiToken() {
  return (
    process.env.MAILERLITE_API_TOKEN ?? process.env.MAILERLITE_API_KEY ?? ""
  );
}

function getNewsletterGroupName() {
  return process.env.MAILERLITE_GROUP_NAME?.trim() || "test";
}

async function mailerLiteFetch(path: string, init?: RequestInit) {
  const apiToken = getMailerLiteApiToken();

  if (!apiToken) {
    throw new Error("MailerLite API token is missing.");
  }

  const response = await fetch(`${mailerLiteApiBaseUrl}${path}`, {
    ...init,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${apiToken}`,
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "MailerLite request failed.");
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

async function getOrCreateNewsletterGroupId() {
  const newsletterGroupName = getNewsletterGroupName();
  const encodedGroupName = encodeURIComponent(newsletterGroupName);
  const groupsResponse = (await mailerLiteFetch(
    `/groups?limit=100&filter[name]=${encodedGroupName}`
  )) as {
    data?: Array<{ id: string; name: string }>;
  };

  const existingGroup = groupsResponse.data?.find(
    (group) => group.name.toLowerCase() === newsletterGroupName.toLowerCase()
  );

  if (existingGroup) {
    return existingGroup.id;
  }

  const createdGroup = (await mailerLiteFetch("/groups", {
    method: "POST",
    body: JSON.stringify({ name: newsletterGroupName }),
  })) as {
    data: { id: string };
  };

  return createdGroup.data.id;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string };
    const email = body.email?.trim();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required." },
        { status: 400 }
      );
    }

    const newsletterGroupId = await getOrCreateNewsletterGroupId();

    await mailerLiteFetch("/subscribers", {
      method: "POST",
      body: JSON.stringify({
        email,
        groups: [newsletterGroupId],
        status: "active",
      }),
    });

    return NextResponse.json({
      message: "Thanks for subscribing.",
    });
  } catch (error) {
    console.error("MailerLite subscribe error", error);

    return NextResponse.json(
      {
        message: "Unable to subscribe right now. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}

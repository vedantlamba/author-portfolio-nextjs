"use client";

import { useState } from "react";
import toast from "react-hot-toast";

interface NewsletterSignupBoxProps {
  text: string;
  variant?: "light" | "dark";
  className?: string;
}

export function NewsletterSignupBox({
  text,
  variant = "light",
  className,
}: NewsletterSignupBoxProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Something went wrong.");
      }

      toast.success(result.message ?? "Thanks for subscribing.");
      setEmail("");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClassName =
    variant === "dark"
      ? "flex-1 w-72 border px-4 py-4 outline-none border-neutral-800"
      : "flex-1 w-72 border px-4 py-4 outline-none border-neutral-800 placeholder:text-center";

  const buttonClassName =
    variant === "dark"
      ? "flex-1 w-72 border px-4 py-4 cursor-pointer bg-linear-to-b from-neutral-800 to-neutral-900 text-neutral-200 hover:text-white font-semibold text-lg border-neutral-800 disabled:cursor-not-allowed disabled:opacity-70"
      : "flex-1 w-72 cursor-pointer bg-linear-to-b from-neutral-100 to-neutral-300 px-4 py-4 text-lg font-semibold text-neutral-700 hover:text-black disabled:cursor-not-allowed disabled:opacity-70";

  return (
    <form
      onSubmit={handleSubmit}
      className={className ?? "min-[760px]:max-[1262px]:flex min-[760px]:max-[1262px]:flex-col min-[760px]:max-[1262px]:items-center"}
    >
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email Address"
        className={inputClassName}
        disabled={isSubmitting}
      />
      <button
        type="submit"
        className={buttonClassName}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : text}
      </button>
    </form>
  );
}

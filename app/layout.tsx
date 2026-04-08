import type { Metadata } from "next";
import {
  Jost,
  Figtree,
  Crimson_Text,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/ui/navbar";
import { AppToaster } from "@/components/shared/app-toaster";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

export const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Book Author Template",
  description:
    "A free Next.js template for authors and book writers to build a personal brand website with books, articles, and newsletter pages. Created by Vedant Lamba.",
  keywords: [
    "book author template",
    "author website template",
    "writer website template",
    "book writer website",
    "Next.js author template",
    "Next.js writer template",
    "free author website template",
    "free writer website template",
    "personal branding for authors",
    "author portfolio website",
    "writer portfolio website",
    "newsletter website template",
    "book marketing website",
    "book branding website",
    "MDX blog template",
    "Next.js MDX template",
    "Tailwind author template",
    "author landing page",
    "writer landing page",
    "Vedant Lamba",
  ],
  authors: [{ name: "Vedant Lamba", url: "https://x.com/Vedantlamba" }],
  creator: "Vedant Lamba",
  publisher: "Vedant Lamba",
  metadataBase: new URL("https://author-template.vercel.app/"),
  openGraph: {
    title: "Book Author Template",
    description:
      "A free Next.js template for authors and book writers to build their brand with books, articles, and newsletter pages.",
    url: "https://author-template.vercel.app/",
    siteName: "Book Author Template",
    images: [
      {
        url: "/icon.jpeg",
        width: 1200,
        height: 630,
        alt: "Book Author Template preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Author Template",
    description:
      "A free Next.js template for authors and book writers, created by Vedant Lamba.",
    images: ["/icon.jpeg"],
    creator: "@Vedantlamba",
    site: "@Vedantlamba",
  },
  icons: {
    icon: "/icon.jpeg",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        jost.className,
        "font-sans",
        figtree.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <AppToaster />
      </body>
    </html>
  );
}

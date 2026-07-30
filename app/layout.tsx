import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { createMetadata, organizationStructuredData } from "@/lib/seo";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
      style={{ fontFamily: "var(--font-montserrat)" }}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/frank-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/frank-logo.png" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}

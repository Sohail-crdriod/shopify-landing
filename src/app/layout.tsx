import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify – Start Your Online Store",
  description:
    "Shopify is the all-in-one platform to build, run, and grow your online store. Start free today.",
  openGraph: {
    title: "Shopify – Start Your Online Store",
    description:
      "Build, run, and grow your online business with Shopify. Start free, then get 3 months for ₹20/month.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

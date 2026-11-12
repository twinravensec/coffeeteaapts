import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coffee, Tea & APTs — Threat Intelligence & Detection Engineering",
  description: "Brewing detections, spilling threat intel tea, and tracking APTs. Your morning review.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="colorblind">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}

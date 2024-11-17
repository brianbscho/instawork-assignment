import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Instawork assignment",
  description: "Full-stack take-home assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

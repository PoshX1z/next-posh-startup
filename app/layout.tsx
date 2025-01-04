import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const workSans = localFont({
  src: [
    {
      path: "./fonts/Worksans-Black.ttf",
      weight: "900",
      style: "nomral",
    },
    {
      path: "./fonts/Worksans-ExtraBold.ttf",
      weight: "800",
      style: "nomral",
    },
    {
      path: "./fonts/Worksans-Bold.ttf",
      weight: "700",
      style: "nomral",
    },
    {
      path: "./fonts/Worksans-SemiBold.ttf",
      weight: "600",
      style: "nomral",
    },
    {
      path: "./fonts/Worksans-Medium.ttf",
      weight: "500",
      style: "nomral",
    },
    {
      path: "./fonts/Worksans-Regular.ttf",
      weight: "400",
      style: "nomral",
    },
    {
      path: "./fonts/Worksans-Thin.ttf",
      weight: "200",
      style: "nomral",
    },
    {
      path: "./fonts/Worksans-ExtraLight.ttf",
      weight: "100",
      style: "nomral",
    },
  ],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Posh Startup",
  description: "Pitch, vote and grow busniess and startup idea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>{children}</body>
    </html>
  );
}

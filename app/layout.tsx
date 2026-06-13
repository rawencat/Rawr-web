import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RAWR - Valorant Tracker",
  description: "A valorant tracker app, with a focus on performance and user experience. with community features.",
  openGraph: {
    title: "RAWR - Valorant Tracker",
    description: "A valorant tracker ingame, with a focus on performance and user experience. with community features.",
    url: "https://rawr.gg",
    siteName: "RAWR",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "RAWR - Valorant Tracker",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

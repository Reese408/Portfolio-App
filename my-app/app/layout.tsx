import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reese Redman | Full Stack Developer",
  description: "Full Stack Developer specializing in React, Next.js, TypeScript, and cloud technologies. Building modern web applications with a focus on performance and user experience.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Cloud Engineering", "CyberSecurity", "DevSecOps"],
  authors: [{ name: "Reese Redman" }],
  creator: "Reese Redman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.reeseredman.com",
    title: "Reese Redman | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, TypeScript, and cloud technologies. Building modern web applications with a focus on performance and user experience.",
    siteName: "Reese Redman Portfolio",
    images: [
      {
        url: "https://reeses-portfolio-media.s3.us-east-2.amazonaws.com/misc/ProfilePic.jpg",
        width: 1200,
        height: 630,
        alt: "Reese Redman - Full Stack Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}

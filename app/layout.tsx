import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivani's Tutoring - Personal Learning Journey for Grades K-8",
  description:
    "Personalized tutoring in Math, Science, and English for grades K-8. 15+ years of experience with heart-centered learning approach. In-home and virtual sessions available.",
  keywords:
    "tutoring, math tutoring, science tutoring, english tutoring, K-8 education, personalized learning, British Council certified",
  authors: [{ name: "Shivani Khanna" }],
  openGraph: {
    title: "Shivani's Tutoring - Helping Your Child's Potential Bloom",
    description:
      "Personalized tutoring that feels makes learning a warm and exciting process. Math, Science, and English for grades K-8.",
    type: "website",
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}

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

export const metadata = {
  title: "Muhammad Akif Janjua | Mechanical Engineer",
  description:
    "Portfolio website of MuhammadAkif Janjua, Mechanical Engineering graduate from NUST with interests in CAD design, manufacturing, robotics, automation, and AI-driven engineering applications.",
};

export default function RootLayout({ children }) {
  return (
    <html
  lang="en"
  className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { keywords } from "@/meta";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WWW IT ACADEMY",
  description: "This website is offical of WWW IT ACADEMY",
  authors: [
    {
      name: "Xasanov Javohir",
      url: "https://www.portfoliowebapp.vercel.app/",
    },
    {
      name: "Asomiddin",
      url: "https://www.portfoliowebapp.vercel.app/",
    },
  ],
  keywords: keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

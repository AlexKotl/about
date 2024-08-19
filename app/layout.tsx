import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About Olek",
  description: "Developer's homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center items-center min-h-screen bg-base-200">
        {children}
      </body>
      <Script
        async
        defer
        src="https://analytics256.netlify.app/script.js" 
        data-website-id="1158853b-c6a7-43d5-8929-23365bfcfd09"
      ></Script>
    </html>
  );
}

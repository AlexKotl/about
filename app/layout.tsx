import type { Metadata } from "next";
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
      <body className="container mx-auto">
        <div className="navbar bg-base-100">
          <a className="btn btn-ghost text-lg">Olek</a>
        </div>
        {children}
      </body>
    </html>
  );
}

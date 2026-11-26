import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@/app/components/layout/Navbar";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shaoor Enterprises | Energy & Business Solutions",
  description:
    "Solar installation, panaflex printing and business solutions for residential and commercial needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
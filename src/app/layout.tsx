import "./globals.css";
import type { Metadata } from "next";
import { Header } from "./components/Header";
import { FooterSection } from "./components/FooterSection";

export const metadata: Metadata = {
  title: "Service Page",
  description: "Professional website development and services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}

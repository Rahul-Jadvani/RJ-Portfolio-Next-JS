import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/manual-ui/Header";
import PageTransition from "@/components/manual-ui/PageTransition";

// Font configuration using next/font
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
  display: "swap",  // Ensures a smooth fallback display until the font loads
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Rahul Jadvani's Portfolio",
  description: "Portfolio website using Next.js",
  keywords: ["Rahul Jadvani", "Portfolio", "Full Stack Developer", "Web Developer"],
  authors: {'name': 'Rahul Jadvani'}
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jetbrains.className}>
        {/* Header for navigation */}
        <Header />
        {/* PageTransition for smooth page navigation */}
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}

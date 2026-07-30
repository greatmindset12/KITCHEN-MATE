import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UtensilRail from "@/components/UtensilRail";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kitchen Glory — Nigerian Recipes, Snacks & Small Chops",
    template: "%s — Kitchen Glory",
  },
  description:
    "Kitchen Glory is a personal food blog covering Nigerian mains, soups, confectionery, snacks, small chops and fast food — recipes cooked and tested at home.",
  metadataBase: new URL("https://kitchenglory.com"),
  openGraph: {
    title: "Kitchen Glory",
    description:
      "Nigerian recipes, confectionery, snacks and fast food — cooked, tested and written down.",
    siteName: "Kitchen Glory",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="relative min-h-screen bg-cream font-body text-ink antialiased">
        <UtensilRail side="left" />
        <UtensilRail side="right" />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

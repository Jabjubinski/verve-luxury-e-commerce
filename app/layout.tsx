import type { Metadata, Viewport } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";
import SmoothScroll from "@/components/smooth-scroll";

// 1. Primary Heading Font: Elegant, High-Fashion Serif
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

// 2. Body/UI Font: Clean, geometric Sans-Serif for readability
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: {
    template: "VERVE | Luxury Clothes",
    default: "VERVE | Luxury Clothes",
  },
  description: "Luxury gothic atelier and artisanal cafe experience.",
  keywords: ["Black Sugar", "Gothic Fashion", "Luxury Streetwear", "Atelier"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${cormorant.variable} 
          ${montserrat.variable} 
          bg-black 
          text-[#F2F2F2] 
          antialiased 
          selection:bg-white 
          selection:text-black
          overflow-x-hidden
        `}
      >
        <SmoothScroll>
          <Header />

          <main className="min-h-screen relative z-10 font-sans">
            {children}
          </main>

          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import NavBar from "@/app/ui/navBar";
import Footer from "@/app/ui/footer";
import "./globals.css";
import footTopImage from "@/public/images/footerTop.png";
import {Provider} from "./ui/context"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Master Chef - Simcodes",
    default: "Master Chef - Simcodes",
  },
  description: "Foods and Drinks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} font-sans`} suppressHydrationWarning>
      <body>
        <Provider>
          <NavBar />
          {children}

          <div className="max-w-screen bg-black h-auto">
            <Image src={footTopImage} alt="Footer Top image" className="object-conver" />
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

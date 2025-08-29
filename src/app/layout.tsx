import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ScrollToTop from "./components/common/scroll-to-top";
import CursorWrapper from "./components/common/custom-cursor";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Genio Accountants",
  description: "Genio Accountants Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased md:cursor-none`}>
        <Header />

        <CursorWrapper />

        {children}

        <Footer />

        <ScrollToTop />
      </body>
    </html>
  );
}

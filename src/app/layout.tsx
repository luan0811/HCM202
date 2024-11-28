"use client";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['vietnamese', 'latin'],
  variable: '--font-roboto',
});

const metadata: Metadata = {
  title: "Thách thức xây dựng Đảng và Nhà nước",
  description: "Website về thách thức xây dựng Đảng và Nhà nước",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const element = document.getElementById('gioi-thieu');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <html lang="vi">
      <body className={`${roboto.variable} font-sans relative`}>
        <Header />
        <div className="pt-32">
          {children}
        </div>
        
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 group"
            aria-label="Lên đầu trang"
          >
            <IoIosArrowUp className="text-2xl group-hover:animate-bounce" />
          </button>
        )}
      </body>
    </html>
  );
}

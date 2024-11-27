import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['vietnamese', 'latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Thách thức xây dựng Đảng và Nhà nước",
  description: "Website về thách thức xây dựng Đảng và Nhà nước",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${roboto.variable} font-sans`}>
        <Header />
        <div className="pt-32">
          {children}
        </div>
      </body>
    </html>
  );
}

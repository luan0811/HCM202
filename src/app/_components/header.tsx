import React from "react";
import logo from "../../../public/Quoc-Huy-Viet-Nam.webp";
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1a237e] shadow-lg z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo.src} alt="Logo" className="h-16" />
            <h1 className="text-white text-2xl ml-4 font-serif">Thách thức xây dựng Đảng và Nhà nước</h1>
          </div>
        </div>
        <nav className="mt-4">
          <ul className="flex flex-wrap justify-start space-x-6">
            <li><Link href="/#gioi-thieu" className="text-white hover:text-blue-200 transition-colors font-medium">Giới thiệu về vấn đề</Link></li>
            <li><Link href="/#boi-canh" className="text-white hover:text-blue-200 transition-colors font-medium">Bối cảnh vấn đề</Link></li>
            <li><Link href="/#thach-thuc" className="text-white hover:text-blue-200 transition-colors font-medium">Phân tích thách thức</Link></li>
            <li><Link href="/#giai-phap" className="text-white hover:text-blue-200 transition-colors font-medium">Giải pháp</Link></li>
            <li><Link href="/#lien-he" className="text-white hover:text-blue-200 transition-colors font-medium">Liên hệ</Link></li>
            <li><Link href="/thao-luan" className="text-white hover:text-blue-200 transition-colors font-medium">Thảo luận</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
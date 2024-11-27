import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer id='lien-he' className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Thông tin liên hệ</h3>
            <p>Tác giả: Nhóm 7 lớp HCM202_3W_01</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Tài liệu tham khảo</h3>
            <ul>
              <li>
                <Link href="https://vi.wikipedia.org/wiki/D%C6%B0%C6%A1ng_Trung_Qu%E1%BB%91c" className="hover:text-gray-300">
                  Wikipedia - Dương Trung Quốc
                </Link>
              </li>
              <li>
                <Link href="https://quochoi.vn/hoatdongcuaquochoi/cackyhopquochoi/quochoikhoaXIV/Pages/kyhopthutu/bien-ban-ghi-am.aspx?ItemID=34148" className="hover:text-gray-300">
                  Quốc hội Việt Nam
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/watch?v=siziJ9sWT7o" className="hover:text-gray-300">
                  Video YouTube
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Bản quyền</h3>
            <p>© 2024 Nhóm 7 lớp HCM202_3W_01. Đã đăng ký bản quyền.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

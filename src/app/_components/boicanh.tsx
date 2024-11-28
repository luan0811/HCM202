"use client";
import React from "react";
import { motion } from "framer-motion";

const BoiCanh: React.FC = () => {
    return (
        <section id="boi-canh" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Phần giới thiệu nhân vật */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-roboto mb-6 text-gray-800">Về Đại biểu Dương Trung Quốc</h2>
                    <div className="prose prose-lg max-w-none font-roboto">
                        <p className="text-gray-600 leading-relaxed">
                            Dương Trung Quốc (sinh ngày 2 tháng 6 năm 1947) là nhà nghiên cứu lịch sử và
                            chính trị gia người Việt Nam. Ông từng là đại biểu Quốc hội Việt Nam khóa XIV
                            thuộc đoàn đại biểu tỉnh Đồng Nai (một trong 21 người ngoài Đảng Cộng sản
                            Việt Nam trúng cử).
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Năm 2016, ông là ứng cử viên đại biểu Quốc hội do Mặt trận Tổ quốc Việt Nam
                            giới thiệu ứng cử. Ông Dương Trung Quốc nổi tiếng vì những phát biểu thẳng thắn
                            của mình trong các kỳ họp quốc hội.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Ông có bằng cử nhân chuyên ngành lịch sử, là Tổng thư ký Hội Khoa học Lịch sử
                            Việt Nam, Tổng Biên tập tạp chí Xưa & Nay và chủ tịch Hiệp hội Câu lạc bộ UNESCO
                            Hà Nội. Ông là đại biểu Quốc hội thâm niên của Việt Nam qua bốn khóa XI, XII,
                            XIII, XIV thuộc đoàn đại biểu tỉnh Đồng Nai.
                        </p>
                    </div>
                </motion.div>

                {/* Phần mới: Về tham nhũng */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-roboto mb-6 text-gray-800">Về tham nhũng</h2>
                    <div className="prose prose-lg max-w-none font-roboto">
                        <p className="text-gray-600 leading-relaxed">
                            Tham nhũng là hành vi lợi dụng quyền hành để gây phiền hà, khó khăn và lấy của dân.
                            Cùng với tham nhũng là tham ô là hành vi lợi dụng quyền hành để lấy cắp của công.
                            Tham nhũng và tham ô là một hệ quả tất yếu của nền kinh tế kém phát triển, quản lý
                            kinh tế - xã hội lỏng lẻo tạo ra nhiều sơ hở cho các hành vi tiêu cực, hiện tượng
                            tham nhũng và các tệ nạn có điều kiện phát triển và tại đó một phần quyền lực
                            chính trị được biến thành quyền lực kinh tế.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Tham nhũng và tham ô làm chậm sự phát triển kinh tế - xã hội, làm giảm lòng tin
                            của công dân vào nhà nước và đến chừng mực nào đó nó gây mất ổn định chính trị,
                            kinh tế - xã hội.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-roboto mb-6 text-gray-800">Về tư tưởng của Chủ tịch Hồ Chí Minh</h2>
                    <div className="prose prose-lg max-w-none font-roboto">
                        <p className="text-gray-600 leading-relaxed">
                            Theo tư tưởng của Chủ tịch Hồ Chí Minh, để Đảng luôn trong sạch,
                            vững mạnh, xây phải đi liền với chống, phải đấu tranh, ngăn chặn,
                            đẩy lùi những nguy cơ dẫn đến sự suy yếu của Đảng,
                            trong đó có nạn tham ô, tham nhũng thứ giặc nội xâm,
                            giặc ở trong lòng “ngấm ngầm ngăn trở,
                            ngấm ngầm phá hoại sự nghiệp xây dựng của cách mạng”.
                        </p>

                    </div>
                </motion.div>

                {/* Phần video phát biểu */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-roboto mb-6 text-gray-800">Bối cảnh vấn đề</h2>
                    <p className="text-gray-600 font-roboto">
                        Dưới đây là phát biểu quan trọng của Đại biểu Dương Trung Quốc về vấn đề
                        tham nhũng trong Đảng: <a className="text-blue-600" href="https://quochoi.vn/hoatdongcuaquochoi/cackyhopquochoi/quochoikhoaXIV/Pages/kyhopthutu/bien-ban-ghi-am.aspx?ItemID=34148">Trích dẫn chính thống từ quochoi.vn</a>
                    </p>
                    <p className="text-gray-600 font-roboto mb-6">
                        Video về phát biểu trên tại quốc hội
                    </p>
                    <div className="aspect-w-16 aspect-h-9 mb-12">
                        <iframe
                            className="w-full h-[500px] rounded-lg shadow-lg"
                            src="https://www.youtube.com/embed/siziJ9sWT7o?si=EaFRoiS5Dksrw4E1"
                            title="Phát biểu của Đại biểu Dương Trung Quốc"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </motion.div>

                {/* Phần mới: Ý nghĩa tổng quát */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-12"
                >
                    <h2 className="text-3xl font-roboto mb-6 text-gray-800">Ý nghĩa tổng quát</h2>
                    <div className="prose prose-lg max-w-none font-roboto">
                        <p className="text-gray-600 leading-relaxed">
                            Phát biểu của Đại biểu Dương Trung Quốc không chỉ là lời cảnh báo về nguy cơ
                            tham nhũng mà còn là một lời kêu gọi Đảng cần thực sự gương mẫu, trong sạch
                            và quyết liệt trong cuộc chiến chống tham nhũng để bảo vệ niềm tin của nhân dân,
                            giữ vững vai trò lãnh đạo và bảo vệ chế độ.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Nó mang ý nghĩa lịch sử, khẳng định rằng chống tham nhũng không chỉ là nhiệm vụ
                            chính trị mà còn là bài kiểm tra về sự tồn vong của Đảng và Nhà nước.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BoiCanh;

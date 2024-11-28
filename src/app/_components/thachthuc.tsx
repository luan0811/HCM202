"use client";
import React from "react";
import { motion } from "framer-motion";

const ThachThuc: React.FC = () => {
    return (
        <section id="thach-thuc" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl font-roboto mb-12 text-gray-800 text-center"
                >
                    Phân tích thách thức
                </motion.h2>

                <div className="relative flex flex-col items-center">
                    {/* Đường kết nối dọc */}
                    <div className="absolute h-full w-1 bg-blue-200 left-1/2 transform -translate-x-1/2" />

                    {/* Xây dựng niềm tin */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative w-full md:w-[80%] mb-12"
                    >
                        <div className="flex items-center">
                            <div className="w-1/2 pr-8 text-left">
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <h3 className="text-xl font-roboto mb-4 text-blue-800">Thách thức trong xây dựng niềm tin của nhân dân</h3>
                                    <ul className="space-y-3 text-gray-600">
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            Tham nhũng làm suy giảm niềm tin của nhân dân vào Đảng và Nhà nước, đặc biệt khi những người lãnh đạo trực tiếp vi phạm các nguyên tắc đạo đức và pháp luật.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            Khi quyền lực không được kiểm soát minh bạch, người dân có thể cảm thấy bất công và xa cách với bộ máy lãnh đạo.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-8 h-8 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center text-white font-bold">1</div>

                            <div className="w-1/2" />
                        </div>
                    </motion.div>

                    {/* Giám sát quyền lực */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative w-full md:w-[80%] mb-12"
                    >
                        <div className="flex items-center">
                            <div className="w-1/2" />
                            <div className="w-8 h-8 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center text-white font-bold">2</div>
                            <div className="w-1/2 pl-8">
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <h3 className="text-xl font-roboto mb-4 text-blue-800">Khó khăn trong việc giám sát quyền lực</h3>
                                    <ul className="space-y-3 text-gray-600">
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            Ở Việt Nam, quyền lực tập trung vào tay một số ít người trong Đảng, tạo ra nguy cơ lạm dụng quyền lực vì lợi ích cá nhân.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            Hệ thống giám sát nội bộ chưa đủ mạnh hoặc thiếu tính độc lập có thể dẫn đến việc xử lý tham nhũng không triệt để, mang tính hình thức.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Xử lý tham nhũng */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative w-full md:w-[80%] mb-12"
                    >
                        <div className="flex items-center">
                            <div className="w-1/2 pr-8 text-left">
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <h3 className="text-xl font-roboto mb-4 text-blue-800">Sự phức tạp trong cơ chế xử lý tham nhũng</h3>
                                    <ul className="space-y-3 text-gray-600">
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            Việc xác định và xử lý các vụ việc tham nhũng đòi hỏi phải vượt qua các rào cản như che giấu thông tin, bảo vệ lẫn nhau trong nội bộ, hoặc ảnh hưởng chính trị.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            Một số vụ tham nhũng lớn kéo dài, gây ra sự hoài nghi về tính hiệu quả của các biện pháp phòng chống.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-8 h-8 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center text-white font-bold">3</div>
                            <div className="w-1/2" />
                        </div>
                    </motion.div>

                    {/* Trách nhiệm lãnh đạo */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative w-full md:w-[80%]"
                    >
                        <div className="flex items-center">
                            <div className="w-1/2" />
                            <div className="w-8 h-8 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center text-white font-bold">4</div>
                            <div className="w-1/2 pl-8">
                                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <h3 className="text-xl font-roboto mb-4 text-blue-800">Thách thức về trách nhiệm lãnh đạo</h3>
                                    <ul className="space-y-3 text-gray-600">
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            Nếu lãnh đạo các cấp không nêu gương và quyết tâm chống tham nhũng, sẽ khó tạo động lực và sức mạnh tập thể để giải quyết vấn đề này.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            Sự thiếu gương mẫu sẽ làm mất đi vai trò lãnh đạo tiên phong của Đảng trong mắt nhân dân.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ThachThuc;

"use client";
import React from "react";
import { motion } from "framer-motion";

const GiaiPhap: React.FC = () => {
    return (
        <section id="giai-phap" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl font-roboto mb-12 text-gray-800 text-center"
                >
                    Giải pháp đề xuất
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Giáo dục tư tưởng */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-roboto mb-4 text-blue-800">Tăng cường giáo dục tư tưởng chính trị và đạo đức</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Đào tạo và tuyên truyền sâu rộng về đạo đức công vụ và trách nhiệm xã hội trong Đảng viên.
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Nhấn mạnh tư tưởng Hồ Chí Minh về liêm chính, công bằng và "cần, kiệm, liêm, chính."
                            </li>
                        </ul>
                    </motion.div>

                    {/* Minh bạch hóa */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-roboto mb-4 text-blue-800">Minh bạch hóa các quy trình ra quyết định</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Xây dựng hệ thống công khai minh bạch trong việc bổ nhiệm, quản lý tài sản công, và ra quyết định chính sách.
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Áp dụng công nghệ số và hệ thống quản lý trực tuyến để giám sát quyền lực, giảm cơ hội tham nhũng.
                            </li>
                        </ul>
                    </motion.div>

                    {/* Vai trò pháp luật */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-roboto mb-4 text-blue-800">Tăng cường vai trò của pháp luật</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Hoàn thiện các quy định pháp luật, đặc biệt là các biện pháp xử lý nghiêm minh các vụ tham nhũng.
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Đảm bảo hệ thống tư pháp độc lập và không bị can thiệp chính trị trong quá trình xử lý tham nhũng.
                            </li>
                        </ul>
                    </motion.div>

                    {/* Giám sát từ người dân */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-roboto mb-4 text-blue-800">Đẩy mạnh giám sát từ người dân và truyền thông</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Tạo điều kiện để người dân tham gia giám sát hoạt động của các cơ quan công quyền.
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Bảo vệ quyền tự do báo chí để phát hiện và đưa tin về các vụ việc tham nhũng.
                            </li>
                        </ul>
                    </motion.div>

                    {/* Vai trò gương mẫu */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-roboto mb-4 text-blue-800">Củng cố vai trò gương mẫu của Đảng</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Xây dựng cơ chế kỷ luật nghiêm khắc trong nội bộ Đảng, xử lý dứt khoát các Đảng viên vi phạm.
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Đề cao trách nhiệm nêu gương của các cán bộ lãnh đạo.
                            </li>
                        </ul>
                    </motion.div>

                    {/* Văn hóa liêm chính */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-roboto mb-4 text-blue-800">Thúc đẩy văn hóa liêm chính trong toàn xã hội</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Khuyến khích các tổ chức, cá nhân và doanh nghiệp áp dụng các tiêu chuẩn liêm chính.
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Xây dựng môi trường văn hóa đề cao trách nhiệm xã hội và sự trong sạch trong công vụ.
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GiaiPhap;

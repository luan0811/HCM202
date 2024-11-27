"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import pic from "../../../public/db-duong-trung-quoc-doan-dbqh-tinh-dong-nai-161674568482815821946.webp";

const GioiThieu: React.FC = () => {
  return (
    <section id="gioi-thieu" className="relative min-h-[700px] flex items-center scroll-mt-20">
      {/* Background Image với overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={pic}
          alt="Đại biểu Dương Trung Quốc"
          fill
          className="object-fill brightness-50"
          priority
        />
      </div>

      {/* Content overlay */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          {/* Trích dẫn chính */}
          <motion.blockquote
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <motion.p
              className="text-4xl font-serif italic mb-4 leading-relaxed"
            >
              "Tham nhũng là từ trong Đảng mà ra"
            </motion.p>
            <motion.footer
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl"
            >
              - Đại biểu <span className="font-semibold">Dương Trung Quốc</span>
            </motion.footer>
          </motion.blockquote>

          {/* Tóm tắt */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed mt-8 bg-black/30 p-6 rounded-lg"
          >
            Câu nói này đã được rút ra từ sau phát biểu của đại biểu Dương Trung Quốc ở quốc hội diễn ra vào sáng ngày 07/11/2017. Trang web này sẽ cùng bạn phân tích
            vấn đề và tìm kiếm giải pháp.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default GioiThieu;
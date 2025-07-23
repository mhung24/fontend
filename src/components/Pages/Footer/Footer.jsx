import React from "react";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex justify-between items-start px-16 py-10 ">
          {/* BẢN ĐỒ CHỈ DẪN */}
          <div className="flex flex-col items-start w-[300px]">
            <h2 className="font-bold text-sm mb-2">BẢN ĐỒ CHỈ DẪN</h2>
            <p className="mb-2 font-semibold">Đại học Bách Khoa Hà Nội</p>
            <iframe
              title="HUST Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.527759740072!2d105.84117131540265!3d21.00733199388559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac6b1e7e7e7b%3A0x7e7e7e7e7e7e7e7e!2sHanoi%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
              width="200"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded shadow"
            ></iframe>
          </div>
          {/* BỘ GIÁO DỤC VÀ ĐÀO TẠO */}
          <div className="flex flex-col items-center w-[300px] border-l border-gray-400 px-8">
            <h2 className="font-bold text-sm mb-2">BỘ GIÁO DỤC VÀ ĐÀO TẠO</h2>
          </div>
          {/* ĐƠN VỊ TRỰC THUỘC */}
          <div className="flex flex-col items-center w-[300px] border-l border-gray-400 px-8">
            <h2 className="font-bold text-sm mb-2">ĐƠN VỊ TRỰC THUỘC</h2>
            <ul className="space-y-1 font-semibold text-sm">
              <li>VIỆN - KHOA ĐÀO TẠO</li>
              <li>VIỆN - TRUNG TÂM NGHIÊN CỨU</li>
              <li>PHÒNG - BAN - TRUNG TÂM</li>
            </ul>
          </div>
          {/* SƠ ĐỒ WEBSITE */}
          <div className="flex flex-col items-center w-[300px] border-l border-gray-400 px-8">
            <h2 className="font-bold text-sm mb-2">SƠ ĐỒ WEBSITE</h2>
            <p className="font-semibold">XEM SƠ ĐỒ TRANG ...</p>
          </div>
        </div>
      </footer>

      <div className=" bg-red-700">
        <footer className=" text-white py-8 px-16 flex flex-row items-center justify-between text-sm ">
          <div className="flex items-center">
            <span className="text-4xl font-bold mr-4">HUST</span>
            <div>
              <div className="font-bold text-base">
                ĐẠI HỌC BÁCH KHOA HÀ NỘI
              </div>
              <div className="text-xs">
                HANOI UNIVERSITY OF SCIENCE AND TECHNOLOGY
              </div>
            </div>
          </div>
          <div className="text-right text-xs">
            Bản quyền thuộc về Đại học Bách khoa Hà Nội
            <br />
            Địa chỉ: Số 1 Đại Cồ Việt, phường Bách Mai, Thành phố Hà Nội
            <br />
            Điện thoại: 024 3869 4242
          </div>
          <div className="flex items-center">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-teal-500 rounded-full">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

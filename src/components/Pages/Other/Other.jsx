import React from "react";

export const Other = () => {
  return (
    <div className="py-10">
      <div className="flex justify-around max-w-[1200px] mx-auto flex-wrap gap-6">
        {/* ĐÀO TẠO */}
        <div className="w-[350px] text-center">
          <h2 className="font-bold text-[20px] mb-0 tracking-wider">ĐÀO TẠO</h2>
          <div className="w-[120px] h-[5px] bg-[#333] my-2.5 mb-7 mx-auto rounded"></div>
          <div className="w-full h-[220px] overflow-hidden rounded-lg mb-5 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              alt="Đào tạo"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="font-medium text-[12px] text-left">
            Thông tin về mô hình, chương trình đào tạo của các hệ đào tạo Đại
            học và Sau đại học của Đại học Bách khoa Hà Nội
          </div>
        </div>
        {/* SINH VIÊN */}
        <div className="w-[350px] text-center">
          <h2 className="font-bold text-[20px] mb-0 tracking-wider">
            SINH VIÊN
          </h2>
          <div className="w-[120px] h-[5px] bg-[#333] my-2.5 mb-7 mx-auto rounded"></div>
          <div className="w-full h-[220px] overflow-hidden rounded-lg mb-5 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
              alt="Sinh viên"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="font-medium text-[12px] text-left">
            Thông tin dành cho tất cả sinh viên đang học tập các hệ tại Đại học
            Bách khoa Hà Nội
          </div>
        </div>
        {/* CỰU SINH VIÊN */}
        <div className="w-[350px] text-center">
          <h2 className="font-bold text-[20px] mb-0 tracking-wider">
            CỰU SINH VIÊN
          </h2>
          <div className="w-[120px] h-[5px] bg-[#333] my-2.5 mb-7 mx-auto rounded"></div>
          <div className="w-full h-[220px] overflow-hidden rounded-lg mb-5 mx-auto">
            <img
              src="https://i.imgur.com/7QFQFQF.png"
              alt="Bach Khoa Alumni"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 bg-white"
            />
          </div>
          <div className="font-medium text-[12px] text-left">
            Kết nối các thế hệ cựu sinh viên Bách Khoa Hà Nội. Mang đến cơ hội
            hợp tác, chia sẻ thông tin về gương mặt, cựu sinh viên tiêu biểu
          </div>
        </div>
      </div>
    </div>
  );
};

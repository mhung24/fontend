import React from "react";

export const ForeignCooperation = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row justify-center gap-10 max-w-[1400px] mx-auto">
        {/* Nghiên cứu */}
        <div className="flex-1 flex flex-col items-center">
          <div className="text-center mb-6">
            <h2 className="text-[#444] font-extrabold tracking-wider text-2xl mb-2">
              NGHIÊN CỨU
            </h2>
            <div className="w-32 h-1 bg-[#444] mx-auto" />
          </div>
          <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative group">
              <img
                src="https://img.freepik.com/free-photo/artificial-intelligence-robot-head-background-futuristic-technology-3d-illustration_90220-1026.jpg"
                alt="Nghiên cứu"
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ul className="list-disc pl-5 mb-6 text-white">
                  <li>
                    Thông tin ứng viên đăng ký xét công nhận đạt tiêu chuẩn
                    GS/PGS
                  </li>
                  <li>Hoạt động nghiên cứu khoa học và sáng tạo</li>
                  <li>
                    Thông tin về các Viện, Trung tâm nghiên cứu, Phòng thí
                    nghiệm
                  </li>
                  <li>Tạp chí khoa học công nghệ</li>
                </ul>
                <button className="bg-[#181c23] border border-[#181c23] text-white px-6 py-2 rounded hover:bg-white hover:text-[#181c23] transition">
                  Xem thêm
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Hợp tác đối ngoại */}
        <div className="flex-1 flex flex-col items-center">
          <div className="text-center mb-6">
            <h2 className="text-[#444] font-extrabold tracking-wider text-2xl mb-2">
              HỢP TÁC ĐỐI NGOẠI
            </h2>
            <div className="w-32 h-1 bg-[#444] mx-auto" />
          </div>
          <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative group">
              <img
                src="https://img.freepik.com/free-photo/global-communication-network-planet-earth_53876-104936.jpg"
                alt="Hợp tác đối ngoại"
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ul className="list-disc pl-5 mb-6 text-white ">
                  <li>Chương trình hợp tác quốc tế</li>
                  <li>Thông tin đối tác nước ngoài</li>
                  <li>Hội thảo, hội nghị quốc tế</li>
                  <li>Trao đổi học thuật và sinh viên</li>
                </ul>
                <button className="bg-[#181c23] border border-[#181c23] text-white px-6 py-2 rounded hover:bg-white hover:text-[#181c23] transition">
                  Xem thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

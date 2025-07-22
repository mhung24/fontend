import React from "react";

export const FeaturedEvents = () => {
  return (
    <div className="bg-gray-800 h-[560px] flex flex-col items-center py-8">
      <h2 className="text-4xl font-bold text-white mb-8 border-b-4 border-white pb-2">
        SỰ KIỆN NỔI BẬT
      </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Left Card */}
        <div className="bg-white rounded-lg shadow-lg flex-1 flex flex-col">
          <img
            src="https://via.placeholder.com/500x250?text=Giang+Vien+Tao+Nguon"
            alt="Giảng viên tạo nguồn"
            className="rounded-t-lg object-cover h-56 w-full"
          />
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center mb-4">
              <div className="bg-red-700 text-white px-4 py-2 rounded-lg text-center mr-4">
                <div className="text-xs">THÁNG 07</div>
                <div className="text-2xl font-bold">16</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-700">
                  THÔNG BÁO CHUNG
                </h3>
                <p className="text-gray-700 mt-1 text-sm">
                  Thông báo tuyển dụng theo đề án “Tạo nguồn giảng viên Đại học
                  Bách khoa Hà Nội giai đoạn 2023-2030”...
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Middle Card */}
        <div className="bg-white rounded-lg shadow-lg flex-1 flex flex-col">
          <img
            src="https://via.placeholder.com/500x250?text=I+Love+BK"
            alt="I Love BK"
            className="rounded-t-lg object-cover h-56 w-full"
          />
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center mb-4">
              <div className="bg-red-700 text-white px-4 py-2 rounded-lg text-center mr-4">
                <div className="text-xs">THÁNG 07</div>
                <div className="text-2xl font-bold">15</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-700">
                  HỢP TÁC ĐỐI NGOẠI - TRUYỀN THÔNG
                </h3>
                <p className="text-gray-700 mt-1 text-sm">
                  Thông báo chương trình học bổng chương trình trao đổi sinh
                  viên sau đại học tại Đại học Osaka...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-lg shadow-lg flex-1 flex flex-col">
          <div className="p-6 flex-1 flex flex-col gap-6">
            {/* Top Events */}
            <div>
              <div className="flex items-start mb-4">
                <div className="bg-red-700 text-white px-4 py-2 rounded-lg text-center mr-4">
                  <div className="text-xs">THÁNG 07</div>
                  <div className="text-2xl font-bold">15</div>
                </div>
                <div>
                  <p className="text-gray-700 text-sm">
                    Kết quả xét đạt tiêu chuẩn GS, PGS năm 2025 tại Hội đồng
                    Giáo sư cơ sở Đại học Bách khoa Hà Nội
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <div className="bg-red-700 text-white px-4 py-2 rounded-lg text-center mr-4">
                  <div className="text-xs">THÁNG 06</div>
                  <div className="text-2xl font-bold">27</div>
                </div>
                <div>
                  <p className="text-gray-700 text-sm">
                    Cơ hội nhận học bổng DAAD để học tập, nghiên cứu tại CHLB
                    Đức
                  </p>
                </div>
              </div>
            </div>
            {/* Upcoming Events */}
            <div className="border-t pt-4">
              <h4 className="text-lg font-bold text-red-700 mb-2">
                SỰ KIỆN SẮP DIỄN RA
              </h4>
              <div className="flex items-start">
                <div className="bg-red-700 text-white px-4 py-2 rounded-lg text-center mr-4">
                  <div className="text-xs">THÁNG 07</div>
                  <div className="text-2xl font-bold">22</div>
                </div>
                <div>
                  <p className="text-gray-700 text-sm">
                    Không có sự kiện nào sắp diễn ra
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

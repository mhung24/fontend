import React from "react";

export const News = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 relative">
        TIN TỨC
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 bg-red-500 rounded"></span>
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main News */}
        <div className="md:w-2/3 w-full bg-white rounded-lg shadow p-6">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Main news"
              className="w-full h-72 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-gray-900">
            Thủ tướng Chính phủ phê duyệt Đề án Phát triển Đại học Bách khoa
            Hà...
          </h2>
          <p className="mt-2 text-gray-600">
            Đại học Bách khoa Hà Nội vừa được phê duyệt đề án phát triển mới,
            hướng tới mục tiêu trở thành trường đại học hàng đầu khu vực...
          </p>
        </div>
        {/* Side News */}
        <div className="md:w-1/3 w-full flex flex-col gap-4">
          <div className="flex gap-4 bg-white rounded-lg shadow p-3">
            <div className="overflow-hidden rounded">
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b"
                alt="Side news 1"
                className="w-24 h-16 object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-800">
                Sinh viên ED3 khoa đầu tiên "mạch nước" hậu bối trải nghiệm
                tuyệt vời...
              </h3>
            </div>
          </div>
          <div className="flex gap-4 bg-white rounded-lg shadow p-3">
            <div className="overflow-hidden rounded">
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
                alt="Side news 2"
                className="w-24 h-16 object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-800">
                Giáo sư hàng đầu thế giới về trí tuệ nhân tạo lượng tử trong
                mạng...
              </h3>
            </div>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="border-b pb-2 text-gray-700">
              Khám phá 6 ngành học “cực hot” ở Trường Cơ khí
            </li>
            <li className="border-b pb-2 text-gray-700">
              Bách khoa Hà Nội nỗ lực nâng cao năng lực ngoại ngữ cho sinh viên,
              đẩy...
            </li>
            <li className="border-b pb-2 text-gray-700">
              Nâng cấp mối quan hệ hợp tác giữa Bách khoa Hà Nội và Tập đoàn
              Hoà...
            </li>
            <li className="border-b pb-2 text-gray-700">
              Đại học Northeastern giao lưu và trao đổi về mô hình ươm tạo
              khởi...
            </li>
            <li className="text-gray-700">
              Không gian sáng tạo trẻ cho những kỹ sư tương lai ngành công nghệ
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="px-8 py-2 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition">
          Xem tất cả
        </button>
      </div>
    </div>
  );
};

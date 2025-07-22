import React from "react";

export const Admission = () => {
  return (
    <div className="py-10 flex flex-col items-center">
      {/* Tiêu đề ra ngoài khối trắng */}
      <h1 className="text-2xl font-extrabold  mb-2 tracking-wide text-center">
        TUYỂN SINH
      </h1>
      <div className="w-28 h-1 bg-[#000000] mb-6 rounded mx-auto" />

      <div
        className="rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-start bg-white border-1 "
        style={{ width: "100%", height: "314px" }}
      >
        <div
          className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0 overflow-hidden rounded-xl"
          style={{ width: "412px" }}
        >
          <img
            src="https://i.imgur.com/6pXr7hD.jpg"
            alt="Student"
            className="rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            style={{ width: "330px", height: "250px" }}
          />
        </div>
        <div className="w-full md:pl-12 flex flex-col justify-center">
          <p className="text-base md:text-lg text-gray-700 mb-2 text-center md:text-left">
            Thông tin tuyển sinh các bậc học tại Đại học Bách khoa Hà Nội: ngành
            tuyển sinh, đề án tuyển sinh, hướng dẫn đăng ký và các thông tin
            quan trọng khác.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <ul className="list-disc list-inside text-[#c8102e] font-medium space-y-2">
              <li>Đại học</li>
              <li>Vừa làm vừa học</li>
              <li>Văn bằng 2</li>
            </ul>
            <ul className="list-disc list-inside text-[#c8102e] font-medium space-y-2">
              <li>Cao học</li>
              <li>Nghiên cứu sinh</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

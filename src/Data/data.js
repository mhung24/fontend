export const menuItems = [
  {
    label: "GIỚI THIỆU",
    link: "/gioi-thieu",
    submenu: [
      { label: "Lịch sử phát triển", link: "/gioi-thieu/lich-su-phat-trien" },
      { label: "Sứ mạng - Tầm nhìn", link: "/gioi-thieu/su-mang-tam-nhin" },
      { label: "Cơ cấu tổ chức", link: "/gioi-thieu/co-cau-to-chuc" },
      { label: "Ban giám hiệu", link: "/gioi-thieu/ban-giam-hieu" },
    ],
  },
  {
    label: "TUYỂN SINH",
    link: "/tuyen-sinh",
    submenu: [
      { label: "Đại học", link: "/tuyen-sinh/dai-hoc" },
      { label: "Liên thông đại học", link: "/tuyen-sinh/lien-thong-dai-hoc" },
      {
        label: "Liên thông đại học VLVH",
        link: "/tuyen-sinh/lien-thong-vlvh",
      },
      { label: "Thạc sĩ", link: "/tuyen-sinh/thac-si" },
    ],
  },
  {
    label: "ĐÀO TẠO",
    link: "/dao-tao",
    submenu: [
      { label: "Thông báo", link: "/dao-tao/thong-bao" },
      { label: "Thời khóa biểu", link: "/dao-tao/thoi-khoa-bieu" },
      { label: "Lịch giảng đường", link: "/dao-tao/lich-giang-duong" },
      { label: "Lịch thi", link: "/dao-tao/lich-thi" },
      { label: "Biểu đồ kế hoạch", link: "/dao-tao/bieu-do-ke-hoach" },
      { label: "Báo giờ", link: "/dao-tao/bao-gio" },
      { label: "Danh sách sinh viên", link: "/dao-tao/danh-sach-sinh-vien" },
      { label: "Luận văn thạc sĩ", link: "/dao-tao/luan-van-thac-si" },
      {
        label: "Danh sách lớp sinh viên",
        link: "/dao-tao/danh-sach-lop-sinh-vien",
      },
      {
        label: "Quyết định tốt nghiệp",
        link: "/dao-tao/quyet-dinh-tot-nghiep",
      },
      {
        label: "Đào tạo ngắn hạn và dịch vụ",
        link: "/dao-tao/dao-tao-ngan-han",
      },
    ],
  },
  {
    label: "NCKH",
    link: "/nckh",
    submenu: [
      { label: "Giới thiệu", link: "/nckh/gioi-thieu" },
      { label: "Đề tài khoa học", link: "/nckh/de-tai-khoa-hoc" },
      { label: "Hoạt động khoa học", link: "/nckh/hoat-dong-khoa-hoc" },
    ],
  },
  {
    label: "HỢP TÁC",
    link: "/hop-tac",
    submenu: [
      { label: "Giới thiệu", link: "/hop-tac/gioi-thieu" },
      { label: "Hợp tác trong nước", link: "/hop-tac/trong-nuoc" },
      { label: "Hợp tác quốc tế", link: "/hop-tac/quoc-te" },
    ],
  },
  {
    label: "SINH VIÊN",
    link: "/sinh-vien",
    submenu: [
      { label: "Thông báo", link: "/sinh-vien/thong-bao" },
      {
        label: "Kết quả học tập - rèn luyện",
        link: "/sinh-vien/ket-qua-hoc-tap",
      },
      { label: "Học bổng - Học phí", link: "/sinh-vien/hoc-bong-hoc-phi" },
      {
        label: "Khen thưởng - Kỷ luật",
        link: "/sinh-vien/khen-thuong-ky-luat",
      },
      { label: "Cựu sinh viên", link: "/sinh-vien/cuu-sinh-vien" },
    ],
  },
  {
    label: "THƯ VIỆN",
    link: "/thu-vien",
    submenu: [
      { label: "Tin tức", link: "/thu-vien/tin-tuc" },
      { label: "Giới thiệu sách", link: "/thu-vien/gioi-thieu-sach" },
      { label: "Tài liệu nội bộ", link: "/thu-vien/tai-lieu-noi-bo" },
      { label: "Thư viện Nute", link: "/thu-vien/thu-vien-nute" },
    ],
  },
  {
    label: "PHÒNG - TRUNG TÂM",
    link: "/phong-trung-tam",
    submenu: [
      { label: "Phòng Đào tạo", link: "/phong-trung-tam/phong-dao-tao" },
      {
        label: "Phòng Tổ chức - Hành chính",
        link: "/phong-trung-tam/phong-to-chuc",
      },
      {
        label: "Phòng Quản trị - Thiết bị",
        link: "/phong-trung-tam/phong-quan-tri",
      },
      {
        label: "Phòng Kế toán - Tài chính",
        link: "/phong-trung-tam/phong-ke-toan",
      },
      {
        label: "Phòng Công tác sinh viên",
        link: "/phong-trung-tam/phong-cong-tac-sinh-vien",
      },
      {
        label: "Phòng Khoa học - Hợp tác quốc tế & Đảm bảo chất lượng",
        link: "/phong-trung-tam/phong-khoa-hoc-hop-tac",
      },
      {
        label: "Trung tâm Thực hành",
        link: "/phong-trung-tam/trung-tam-thuc-hanh",
      },
    ],
  },
  {
    label: "KHOA",
    link: "/khoa",
    submenu: [
      {
        label: "Khoa Công nghệ thông tin",
        link: "/khoa/cong-nghe-thong-tin",
      },
      { label: "Khoa Cơ khí", link: "/khoa/co-khi" },
      { label: "Khoa Điện - Điện tử", link: "/khoa/dien-dien-tu" },
      { label: "Khoa Kinh tế", link: "/khoa/kinh-te" },
      { label: "Khoa Sư phạm kỹ thuật", link: "/khoa/su-pham-ky-thuat" },
      { label: "Khoa Giáo dục đại cương", link: "/khoa/giao-duc-dai-cuong" },
    ],
  },
];

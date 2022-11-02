import React from "react";

import "./categoryList.scss";
import Carousel from "../../components/carousel/Carousel";

const CategoryList = () => {
  const listCategory = [
    {
      id: "2",
      label: "Hà Nội",
      imageURL: require("../../assets/category/hoguom.jpg"),
    },
    {
      id: "3",
      label: "Đà Nẵng",
      imageURL: require("../../assets/category/bantayvang_danang.jpg"),
    },
    {
      id: "42",
      label: "Đà Lạt",
      imageURL: require("../../assets/category/qtrglamvien.jpg"),
    },
    {
      id: "32",
      label: "Phú Quốc",
      imageURL: require("../../assets/category/phuquoc.jpg"),
    },
    {
      id: "31",
      label: "Vũng Tàu",
      imageURL: require("../../assets/category/vungtau.jpeg"),
    },
    {
      id: "314",
      label: "TP Hồ Chí Minh",
      imageURL: require("../../assets/category/tphcm.jpg"),
    },
    {
      id: "312",
      label: "Cần Thơ",
      imageURL: require("../../assets/category/benninhkieu.jpg"),
    },
    {
      id: "342",
      label: "Nha Trang",
      imageURL: require("../../assets/category/nhatrang.jpg"),
    },
    {
      id: "142",
      label: "Hà Giang",
      imageURL: require("../../assets/category/hagiang.jpg"),
    },
  ];

  return (
    <div className="categoryList padding-section">
      <div className="category">
        <div className="category--heading">
           {/* <h1>Du lịch trong nước</h1>
          <p>Sẽ rất nhanh nếu bạn tìm theo đặc trung văn hóa</p> */}
        </div>
        <Carousel listCategory={listCategory} />

        {/* <div className="category--heading">
        <h1>Du lịch ngoài nước</h1></div> */}
        {/* <Carousel listCategory={listCategory} /> */}

     </div>
     </div>
  );
};

export default CategoryList;

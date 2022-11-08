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
      label: "Đà Lạt",
      imageURL: require("../../assets/category/dalat.jpg"),
    },
    {
      id: "4",
      label: "TP Hồ Chí Minh",
      imageURL: require("../../assets/category/tphcm.jpg"),
    },
    {
      id: "5",
      label: "Cần Thơ",
      imageURL: require("../../assets/category/benninhkieu.jpg"),
    },
    {
      id: "6",
      label: "Vũng Tàu",
      imageURL: require("../../assets/category/vungtau.jpeg"),
    },
    {
      id: "7",
      label: "Nha Trang",
      imageURL: require("../../assets/category/nhatrang1.jpg"),
    },
    {
      id: "8",
      label: "Sapa",
      imageURL: require("../../assets/category/sapa.png"),
    },
    {
      id: "9",
      label: "Lào Cai",
      imageURL: require("../../assets/category/laocai.jpg"),
    },
    {
      id: "10",
      label: "Ninh Bình",
      imageURL: require("../../assets/category/ninhbinh.jpg"),
    },
    {
      id: "11",
      label: "Hạ Long",
      imageURL: require("../../assets/category/halong.jpg"),
    },
    {
      id: "12",
      label: "Quảng Ninh",
      imageURL: require("../../assets/category/quangninh.jpg"),
    },
    {
      id: "13",
      label: "Hà Giang",
      imageURL: require("../../assets/category/hagiang.jpg"),
    },
    {
      id: "14",
      label: "Vịnh Hạ Long",
      imageURL: require("../../assets/category/VinhHaLong.jpg"),
    },
    {
      id: "15",
      label: "Cao Bằng",
      imageURL: require("../../assets/category/caobang.jpg"),
    },
    {
      id: "16",
      label: "Đà Nẵng",
      imageURL: require("../../assets/category/danang1.jpg"),
    },
    {
      id: "17",
      label: "Sơn La",
      imageURL: require("../../assets/category/sonla.jpg"),
    },
    {
      id: "18",
      label: "Hải Phòng",
      imageURL: require("../../assets/category/haiphong.jpg"),
    },
    {
      id: "19",
      label: "Bắc Kạn",
      imageURL: require("../../assets/category/backan.png"),
    },
    {
      id: "20",
      label: "Quảng Ngãi ",
      imageURL: require("../../assets/category/quangngai.jpg"),
    },
    {
      id: "21",
      label: "Quảng Nam",
      imageURL: require("../../assets/category/quangnam.jpg"),
    },
    {
      id: "22",
      label: "Quy Nhơn",
      imageURL: require("../../assets/category/quynhon.jpg"),
    },
    {
      id: "23",
      label: "Đắk Lắk",
      imageURL: require("../../assets/category/daklak.jpg"),
    },
    {
      id: "24",
      label: "Huế",
      imageURL: require("../../assets/category/hue.jpeg"),
    },
    {
      id: "25",
      label: "Quảng Bình",
      imageURL: require("../../assets/category/quangbinh.jpg"),
    },
    {
      id: "26",
      label: "Quảng Trị",
      imageURL: require("../../assets/category/quangtri.jpg"),
    },
    {
      id: "30",
      label: "Kon Tum",
      imageURL: require("../../assets/category/kontum.jpg"),
    },
    {
      id: "31",
      label: "Bình Thuận",
      imageURL: require("../../assets/category/binhthuan.jpg"),
    },
    {
      id: "32",
      label: "An Giang",
      imageURL: require("../../assets/category/angiang.jpg"),
    },
    {
      id: "33",
      label: "Sóc Trăng",
      imageURL: require("../../assets/category/soctrang.jpg"),
    },
    {
      id: "34",
      label: "Bạc Liêu",
      imageURL: require("../../assets/category/baclieu.jpg"),
    },
    {
      id: "35",
      label: "Cà Mau",
      imageURL: require("../../assets/category/camau.jpg"),
    },
    {
      id: "36",
      label: "Tiền Giang",
      imageURL: require("../../assets/category/tiengiang.jpg"),
    },
    {
      id: "37",
      label: "Bến Tre",
      imageURL: require("../../assets/category/bentre.png"),
    },
    {
      id: "38",
      label: "Kiên Giang",
      imageURL: require("../../assets/category/kiengiang.jpg"),
    },
    {
      id: "39",
      label: "Đồng Nai",
      imageURL: require("../../assets/category/dongnai.jpg"),
    },


  ];

  return (
    <div className="categoryList padding-section">
      <div className="category">
        <div className="category--heading">
          <p>CÁC ĐIỂM ĐẾN </p>
          <label>Dưới đây là các điểm đến du lịch nổi tiếng được yêu thích và được nhiều khách du lịch quan tâm. Sẽ rất nhanh nếu bạn tìm theo thành phố mà mình muốn đến !</label>
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

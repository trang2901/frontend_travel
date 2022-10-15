import React from "react";

import "./categoryList.scss";
import Carousel from "../../components/carousel/Carousel";

const CategoryList = () => {
  const listCategory = [
    {
      id: "2",
      label: "Sakura",
      imageURL: require("../../assets/category/sakura.jpg"),
    },
    {
      id: "3",
      label: "Mountain",
      imageURL: require("../../assets/category/mountain.jpg"),
    },
    {
      id: "42",
      label: "Temple",
      imageURL: require("../../assets/category/temple.jpg"),
    },
    {
      id: "32",
      label: "City",
      imageURL: require("../../assets/category/city.jpg"),
    },
    {
      id: "31",
      label: "Contryside",
      imageURL: require("../../assets/category/contryside.jpg"),
    },
    {
      id: "314",
      label: "Castle",
      imageURL: require("../../assets/category/castle.jpg"),
    },
    {
      id: "312",
      label: "Snow",
      imageURL: require("../../assets/category/snow.jpg"),
    },
    {
      id: "342",
      label: "Onsen",
      imageURL: require("../../assets/category/onsen.jpg"),
    },
    {
      id: "142",
      label: "Beach",
      imageURL: require("../../assets/category/sakura.jpg"),
    },
  ];

  return (
    <div className="categoryList padding-section">
      {/* <div className="category">
        <div className="category--heading">
          <h1>Du lịch trong nước</h1> */}
          {/* <p>Sẽ rất nhanh nếu bạn tìm theo đặc trung văn hóa</p> */}
        {/* </div>
        <Carousel listCategory={listCategory} />
        <div className="category--heading">
        <h1>Du lịch ngoài nước</h1></div>
        <Carousel listCategory={listCategory} />
      </div> */}
    </div>
  );
};

export default CategoryList;

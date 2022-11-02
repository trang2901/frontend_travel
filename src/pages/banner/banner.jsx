import React, { useState, useEffect } from "react";

import anhbia from "../../image/anh-bia.jpg";
import { TourCard } from "../../components";
import axios from "axios";
import { CategoryList, CardList } from "../../container";
import "./banner1.scss";
import { Divider, Row, Col } from "antd";
import { Container, Paper } from "@mui/material";
import Carousel from "../../components/carousel/Carousel"
import { Context } from "../../pages/home/Context"
const Banner = () => {
  const [tag, setTag] = useState("");
  const [DataTours, setDataTours] = useState([]);
  const [fetching, setFetching] = useState(true);
  
  useEffect(() => {
    setFetching(true);
    fetchToursData();
    tag ? (document.title = tag) : (document.title = ".travelwoVi");
  }, [tag]);
  const fetchToursData = () => {
    axios("https://tourapi-dev-n.herokuapp.com/tour")
      .then(({ data }) => {
        if (tag) {
          const filteredTours = data.filter((tour) => tour.tags.includes(tag));
          setDataTours(filteredTours);
          setFetching(false);
        } else {
          setDataTours(data);
          setFetching(false);
        }
      })
      .catch((err) => {
        console.error("Fetching error: " + err);
      });
  };
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
    <>
     <Context.Provider value={[tag, setTag]}>
      <div
        style={{
          backgroundImage: `url("https://dep.anh9.com/imgs/13116cover-facebook-song-bien-vo-nhe-vao-bo.jpg")`,
        }}
        className="jumbotron bg-cover text-white"
      >
        <div className="container py-5 text-center">
          <p
            className=" display-4 font-weight-bold"
            style={{
              color: "#08183c",
              fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
              fontSize: "43px",
            }}
          >
            DU LỊCH LÀ ĐỂ TẠO RA NHỮNG KỶ NIỆM ĐẸP
          </p>
          <p
            className="font-italic mb-0"
            style={{ color: "white", fontWeight: "bold" }}
          >
            “Hãy ngắm nhìn thế giới. Điều đó tuyệt vời hơn bất cứ giấc mơ nào.
            “- Ray Bradbury
          </p>
          {/* <p className="font-italic">
            Snippe by
            <a href="https://bootstrapious.com" className="text-white">
              <u>Bootstrapious</u>
            </a>
          </p> */}
          <p></p>
          <a
            href="/home"
            role="button"
            className="btn btn-primary px-5"
            style={{
              backgroundColor: "#08183c",
              border: "none",
              color: "#f97150",
              height: "40px",
              borderRadius: "20px",
            }}
          >
            Trải nghiệm ngay
          </a>
        </div>
      </div>

   
        <div className="tourmoi">
          <Divider
            dashed
            orientation="left"
            plain
            style={{ borderColor: "#f97150" }}
          >
            {" "}
            <p className="tourmoi">TOUR MỚI</p>
          </Divider>{" "}
        </div>

        {/* <div className="row">
          <div className="col-lg-10 mb-4">
            <p className="font-italic text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </p>
            <p className="font-italic text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </p>
          </div>
          <div className="col-lg-8">
            <p className="font-italic text-muted">
              Lorem ipsum dolor sit amet, consectetur{" "}
              <strong className="font-weight-bold text-dark">
                adipisicing elit, sed{" "}
              </strong>
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in{" "}
              <strong className="font-weight-bold text-dark">
                reprehenderit in voluptate{" "}
              </strong>
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div> */}
   
      <CardList DataTours={DataTours} tag={tag} />
{/* điểm đến===================================================================================================================================== */}
<Divider
          dashed
          orientation="left"
          plain
          style={{ borderColor: "#f97150" }}
        >
          {" "}
          
          <p className="why">ĐIỂM ĐẾN YÊU THÍCH</p>
        </Divider>
     <div className="slider-diemden">
     
        <CategoryList setTag={setTag} />
        </div>

{/* why chọn===================================================================================== */}
      <div>
        <Divider
          dashed
          orientation="left"
          plain
          style={{ borderColor: "#f97150" }}
        >
          {" "}
          
          <p className="why">VÌ SAO CHỌN DORISTOUR ?</p>
        </Divider>
        <Container>
        <div className="why--content">
          <Row>
            <Col className="gutter-row" span={8}>
              <div className ="col--item">
              <i class="fa-solid fa-laptop"></i>
              <p>Mạng bán tour</p>
              <label>Ứng dụng công nghệ mới nhất</label>
                </div>
            </Col>

            <Col className="gutter-row" span={8}>
              <div className="col--item">
              <i class="fa-solid fa-box"></i>
              <p>Sản phẩm & Dịch vụ</p>
              <label>Đa dạng - An toàn - Chất lượng</label>
              </div>
            </Col>

            <Col className="gutter-row" span={8}>
              <div className="col--item">
              <i class="fa-solid fa-dollar-sign"></i>
                <p>Giá cả</p>
                <label>Luôn có mức giá tốt nhất</label>
              </div>
            </Col>

          </Row>
<p></p>
{/* row2------------------------------------------------------- */}
          <Row className="row--2">
            <Col className="gutter-row" span={8}>
              <div className ="col--item">
              <i class="fa-solid fa-plane-departure"></i>
              <p>Đặt tour</p>
              <label>Đơn giản - Nhanh chóng - Dễ dàng</label>
                </div>
            </Col>

            <Col className="gutter-row" span={8}>
              <div className="col--item">
              <i class="fa-regular fa-credit-card"></i>
              <p>Thanh toán</p>
              <label>An toàn - Linh hoạt</label>
              </div>
            </Col>

            <Col className="gutter-row" span={8}>
              <div className="col--item">
              <i class="fa-solid fa-headset"></i>
                <p>Hỗ trợ</p>
                <label>Hotline & trực tuyến: (8:00 - 22:00)</label>
              </div>
            </Col>

          </Row>
          <p></p><p></p>
        </div></Container>
      </div>
      </Context.Provider>
    </>
  );
};

export default Banner;

import React, { useState, useEffect } from "react";

import anhbia from "../../image/anh-bia.jpg";
import { TourCard } from "../../components";
import axios from "axios";
import { CategoryList, CardList } from "../../container";
import "./banner1.scss";
import {Row, Col } from "antd";
import Divider from '@mui/material/Divider';
import { Container, Paper } from "@mui/material";
import Carousel from "../../components/carousel/Carousel";
import { Context } from "../../pages/home/Context";
import ReactPlayer from "react-player";
import imgDL from "../../image/dulichDaLat.jpg"
import imgHG from "../../image/amthuchagiang.jpg"
import imgVHL from "../../image/vinhhalong.jpg"
import imgCNMT from "../../image/chonoimientay.png"
import imgDN from "../../image/danang.jpg"
import imgVN from "../../image/xinchaoVN.jpg"
import img1 from "../../image/banhtroininhbinh.jpg"
import img2 from "../../image/img2.jpg"
import img3 from "../../image/img3.jpg"
import img4 from "../../image/img4.jpg"
import img5 from "../../image/img5.jpg"
import img6 from "../../image/img6.jpg"
import img7 from "../../image/img7.jpg"
import img8 from "../../image/img8.jpg"
import img9 from "../../image/img9.jpg"
import img10 from "../../image/img10.jpg"
import img11 from "../../image/img11.jpg"
import img12 from "../../image/img12.jpg"
import img13 from "../../image/img13.jpg"
import img14 from "../../image/img14.jpg"
import img15 from "../../image/img15.jpg"
import img16 from "../../image/img16.jpg"
import img17 from "../../image/img17.jpg"
import img18 from "../../image/img18.jpg"
import img19 from "../../image/img19.jpg"
import hinh1 from "../../image/hinh1.jpg"
import hinh2 from "../../image/hinh2.jpg"
import hinh3 from "../../image/hinh3.jpg"
import hinh4 from "../../image/hinh4.jpg"
import hinh5 from "../../image/hinh5.jpg"
import hinh6 from "../../image/hinh6.jpg"
import hinh7 from "../../image/hinh7.jpg"
import hinh8 from "../../image/hinh8.jpg"
import hinh9 from "../../image/hinh9.jpg"
import hinh10 from "../../image/hinh10.jpg"
import hinh11 from "../../image/hinh11.jpg"
import hinh12 from "../../image/hinh12.jpg"
import hinh13 from "../../image/hinh13.jpg"
import hinh14 from "../../image/hinh14.jpg"
import hinh15 from "../../image/hinh15.jpg"
import hinh16 from "../../image/hinh16.jpg"
import hinh17 from "../../image/hinh17.jpg"
import hinh18 from "../../image/hinh18.jpg"
import Chip from '@mui/material/Chip';
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
  const [playTime, setPlayTime] = useState(0);
  const handleProgress = (state) => {
    setPlayTime(formatTime(state.playedSeconds));
  };
  const formatTime = (time) => {
    const date = new Date(time * 1000);
    const hour = date.getUTCHours();
    const minute = date.getUTCMinutes();
    const second = ("0" + date.getUTCSeconds()).slice(-2);
    if (hour) {
      return `${hour}:${("0" + minute).slice(-2)}:${second}`;
    }
    return `${minute}:${second}`;
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
         
            {" "}
            <p className="tourmoi" style={{textAlign: 'center'}}>TOUR MỚI</p>
          
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
        {/* <Divider
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
        </div> */}
        {/* thư viện========================================== */}
        {/* <Divider
          dashed
          orientation="left"
          plain
          style={{ borderColor: "#f97150" }}
        > */}
          {" "}
          <p className="why" style={{textAlign: 'center'}}>THƯ VIỆN</p>
        {/* </Divider> */}
        <div className="thuvien">
        {/* <Divider type="vertical" style={{ borderColor: "#f97150", width: '20px'}}/> */}
        {/* <label style={{marginBottom: '3rem'}}>--- <strong>VIDEO</strong> ---</label> */}
        {/* <Chip label="Video" style={{marginBottom: '3rem',backGround: '#f97150', color: '#08183c'}} /> */}
        <div style={{marginBottom: '3rem'}}>
        <Divider dashed textAlign="left"><Chip color="info" label="VIDEO" style={{ color: '#08183c', fontWeight: 'bold'}}/></Divider></div>
        
        <div className="video">
        <Row>
          <Col span={4}>
          <div className="videobox">
            <img src={imgDL}/>
           <a href="/library1"><button style={{color: 'red'}}><i className="fa-regular fa-circle-play" style={{color: 'green'}}></i></button></a> 
          </div>
          </Col>

          <Col span={4}>
          <div className="videobox">
            <img src={imgHG}/>
            <a href="/library2"><button><i className="fa-regular fa-circle-play"></i></button></a> 
          </div>
          </Col>
          
          <Col span={4}>
          <div className="videobox">
            <img src={imgVHL}/>
            <a href="/library3"><button><i className="fa-regular fa-circle-play"></i></button></a>
          </div>
          </Col>
          <Col span={4}>
          <div className="videobox">
            <img src={imgCNMT}/>
            <a href="/library4"> <button><i className="fa-regular fa-circle-play"></i></button></a>
          </div>
          </Col>
          <Col span={4}>
          <div className="videobox">
            <img src={imgDN}/>
            <a href="/library5"><button><i className="fa-regular fa-circle-play"></i></button></a>
          </div>
          </Col>
          <Col span={4}>
          <div className="videobox">
            <img src={imgVN}/>
            <button><i className="fa-regular fa-circle-play"></i></button>
          </div>
          </Col>
          
          {/* <ReactPlayer
            width={200}
            height={200}
            url="https://www.youtube.com/watch?v=QYPsq3kijOo&t=6s"
            onProgress={handleProgress}
            controls={false}
          /> */}

          {/* <ReactPlayer
            width={200}
            height={200}
            url="https://www.youtube.com/watch?v=a-2iTFdtnvk&t=3s"
            onProgress={handleProgress}
            controls={false}
          /> */}
        </Row>
        
        <Row>
          <Col span={4}>
          <p>Du lịch Đà Lạt</p>
          </Col>
          <Col span={4}>
          <p>Du lịch ẩm thực Hà Giang</p>
          </Col>
          <Col span={4}>
          <p>Du lịch Vịnh Hạ Long</p>
          </Col>
          <Col span={4}>
          <p>Chợ nổi miền Tây</p>
          </Col>
          <Col span={4}>
         <p>Du lịch đẹp Đà Nẵng</p>
          </Col>
          <Col span={4}>
        <p> Xin Chào Việt Nam</p>
          </Col>
        </Row>
        </div>

        {/* <label style={{marginBottom: '3rem'}}>--- <strong >ẨM THỰC </strong>---</label> */}
        <div style={{marginBottom: '1rem', marginTop: '1rem'}}>
        <Divider dashed textAlign="left"><Chip color="info" label="ẨM THỰC" style={{ color: '#08183c', fontWeight: 'bold'}}/></Divider></div>
        {/* <Chip color="info" label="ẨM THỰC" style={{marginTop: '2rem',marginBottom: '1rem', marginLeft: '2rem', color: '#08183c', fontWeight: 'bold'}}/> */}
        <div className="image">
        <div className="imagebox">
        <Row gutter={[8, 8]}>

        <Col span={4}>
       <a target="_blank" href={img1}>
       <img src={img1} />
      </a>
        </Col>
        <Col span={4}>
        <img src={img2} />
        </Col>
        <Col span={4}>
        <img src={img3} />
        
        </Col>
        <Col span={4}>
        <img src={img4} />
        </Col>
        <Col span={4}>
        <img src={img5} />
        </Col>
        <Col span={4}>
        <img src={img6} />
        </Col>

        <Col span={4}>
        <img src={img7} />
        </Col>
        <Col span={4}>
        <img src={img8} />
        </Col>
        <Col span={4}>
        <img src={img9} />
        </Col>
        <Col span={4}>
        <img src={img10} />
        </Col>
        <Col span={4}>
        <img src={img11} />
        </Col>
        <Col span={4}>
        <img src={img12} />
        </Col>

        <Col span={4}>
        <img src={img13} />
        </Col>
        <Col span={4}>
        <img src={img14} />
        </Col>
        <Col span={4}>
        <img src={img15} />
        </Col>
        <Col span={4}>
        <img src={img16} />
        </Col>
        <Col span={4}>
        <img src={img17} />
        </Col>
        <Col span={4}>
        <img src={img18} />
        </Col>
        </Row>
        
       </div>

       </div>

       {/* <label style={{marginBottom: '3rem'}}>--- <strong> VIỆT NAM VẺ ĐẸP BẤT TẬN</strong> ---</label> */}
       <div style={{marginBottom: '1rem', marginTop: '1rem'}}>
        <Divider dashed textAlign="left"><Chip color="info" label="VIỆT NAM VẺ ĐẸP BẤT TẬN" style={{ color: '#08183c', fontWeight: 'bold'}}/></Divider></div>
       {/* <Chip color="info" label="VIỆT NAM VẺ ĐẸP BẤT TẬN" style={{marginTop: '2rem',marginBottom: '1rem', marginLeft: '2rem', color: '#08183c', fontWeight: 'bold'}}/> */}
       <div className="image">
        <div className="imagebox">
        <Row gutter={[8, 8]}>
        <Col span={4}>
        <img src={hinh1} />
        </Col>
        <Col span={4}>
        <img src={hinh2} />
        </Col>
        <Col span={4}>
        <img src={hinh3} />
        </Col>
        <Col span={4}>
        <img src={hinh4} />
        </Col>
        <Col span={4}>
        <img src={hinh5} />
        </Col>
        <Col span={4}>
        <img src={hinh6} />
        </Col>

        <Col span={4}>
        <img src={hinh7} />
        </Col>
        <Col span={4}>
        <img src={hinh8} />
        </Col>
        <Col span={4}>
        <img src={hinh9} />
        </Col>
        <Col span={4}>
        <img src={hinh10} />
        </Col>
        <Col span={4}>
        <img src={hinh11} />
        </Col>
        <Col span={4}>
        <img src={hinh12} />
        </Col>

        <Col span={4}>
        <img src={hinh13} />
        </Col>
        <Col span={4}>
        <img src={hinh14} />
        </Col>
        <Col span={4}>
        <img src={hinh15} />
        </Col>
        <Col span={4}>
        <img src={hinh16} />
        </Col>
        <Col span={4}>
        <img src={hinh17} />
        </Col>
        <Col span={4}>
        <img src={hinh18} />
        </Col>
        </Row>
        
       </div>
       </div>
       </div>
        {/* why chọn===================================================================================== */}
        <div>
         
            {" "}
            <p className="why" style={{textAlign: 'center'}}>VÌ SAO CHỌN DORISTOUR ?</p>
          
          <Container>
            <div className="why--content">
              <Row>
                <Col className="gutter-row" span={8}>
                  <div className="col--item">
                    <i className="fa-solid fa-laptop"></i>
                    <p>Mạng bán tour</p>
                    <label>Ứng dụng công nghệ mới nhất</label>
                  </div>
                </Col>

                <Col className="gutter-row" span={8}>
                  <div className="col--item">
                    <i className="fa-solid fa-box"></i>
                    <p>Sản phẩm & Dịch vụ</p>
                    <label>Đa dạng - An toàn - Chất lượng</label>
                  </div>
                </Col>

                <Col className="gutter-row" span={8}>
                  <div className="col--item">
                    <i className="fa-solid fa-dollar-sign"></i>
                    <p>Giá cả</p>
                    <label>Luôn có mức giá tốt nhất</label>
                  </div>
                </Col>
              </Row>
              <p></p>
              {/* row2------------------------------------------------------- */}
              <Row className="row--2">
                <Col className="gutter-row" span={8}>
                  <div className="col--item">
                    <i className="fa-solid fa-plane-departure"></i>
                    <p>Đặt tour</p>
                    <label>Đơn giản - Nhanh chóng - Dễ dàng</label>
                  </div>
                </Col>

                <Col className="gutter-row" span={8}>
                  <div className="col--item">
                    <i className="fa-regular fa-credit-card"></i>
                    <p>Thanh toán</p>
                    <label>An toàn - Linh hoạt</label>
                  </div>
                </Col>

                <Col className="gutter-row" span={8}>
                  <div className="col--item">
                    <i className="fa-solid fa-headset"></i>
                    <p>Hỗ trợ</p>
                    <label>Hotline & trực tuyến: (8:00 - 22:00)</label>
                  </div>
                </Col>
              </Row>
              <p></p>
              <p></p>
            </div>
          </Container>
        </div>
      </Context.Provider>
    </>
  );
};

export default Banner;

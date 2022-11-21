import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TourHead, TourDetail, RegionList } from "../../container";
import { Context } from "../home/Context";
import CardList from "../../container/cardList/CardList";
import { Banner, ScrollButton } from "../../components";
import CircularProgress from "@mui/material/CircularProgress";
import Cancel from "@mui/icons-material/Cancel";
import axios from "axios";
import { Divider } from "antd";
import Search from "../../components/search/Search";
import "./tourmt.scss";
const TourMN = () => {
  const [tag, setTag] = useState("");
  const [DataTours, setDataTours] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [tourMB, setTourMB] = useState([]);

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
          const ATourMB = data.filter((tour) => tour.matour.includes("TMT"));
          setDataTours(ATourMB);
          setFetching(false);
        }
      })
      .catch((err) => {
        console.error("Fetching error: " + err);
      });
  };

  return (
    <>
      <div className="tourList">
        <Divider plain style={{ borderColor: "#f97150" }}>
          <p className="introduction">DU LỊCH MIỀN TRUNG</p>
        </Divider>
        <p style={{ color: "#08183c", fontSize: "18px", marginLeft: "2rem", marginTop: '-1.5rem', 
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight: '50px'
         }}>
          Miền Trung Việt Nam gồm Bắc Trung Bộ, Nam Trung Bộ và Tây Nguyên, tổng
          19 tỉnh thành. Miền Trung là giao điểm của sông núi hữu tình, thiên
          nhiên hùng vĩ, văn hóa đặc sắc, pha trộn ảnh hưởng của Hindu và Trung
          Hoa. Một điểm đến lý tưởng!
        </p>
        <p style={{ color: "#08183c", fontSize: "18px", marginLeft: "2rem", marginBottom: '0.5rem', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight: '50px' }}>
          Chúng tôi tìm thấy{" "}
          <strong style={{ color: "red" }}>{DataTours.length}</strong> tours cho
          quý khách
        </p>
      </div>
      {/* <div className="tourListMB">

      <p style={{color: '#08183c', fontSize: '18px'}}>Miền Bắc Việt Nam gồm Tây Bắc, Đông Bắc và đồng bằng Sông Hồng, là cái nôi văn hóa lịch sử hàng ngàn năm của Việt Nam. Thiên nhiên và cảnh đẹp hùng vĩ, 4 mùa xuân hạ thu đông, miền Bắc luôn là điểm hẹn hấp dẫn cho ta trở lại nhiều lần.</p>
      <p style={{color: '#08183c', fontSize: '18px'}}>Chúng tôi tìm thấy <strong style={{color: 'red'}}>{DataTours.length}</strong> tours cho quý khách</p>
    
    </div>  */}
      <p></p>
      <p></p>
      <div>
        <Search />
      </div>
      <CardList DataTours={DataTours} tag={tag} />
      <ScrollButton />
    </>
  );
};

export default TourMN;

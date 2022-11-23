import React, { useState, useEffect } from "react";
import CardList from "../../container/cardList/CardList";
import axios from "axios";
import { Divider } from "antd";
import Search from "../../components/search/Search";
import { ScrollButton } from "../../components";

const TourMB = () => {
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
    axios("http://localhost:3001/tour")
      .then(({ data }) => {
        if (tag) {
          const filteredTours = data.filter((tour) => tour.tags.includes(tag));
          setDataTours(filteredTours);
          setFetching(false);
        } else {
          const ATourMB = data.filter((tour) => tour.matour.includes("TMB"));
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
          <p className="introduction">DU LỊCH MIỀN BẮC</p>
        </Divider>
        <p style={{ color: "#08183c", fontSize: "18px", marginLeft: "2rem", marginTop: '-1.5rem', 
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight: '50px'
         }}>
          Miền Bắc Việt Nam gồm Tây Bắc, Đông Bắc và đồng bằng Sông Hồng, là cái
          nôi văn hóa lịch sử hàng ngàn năm của Việt Nam. Thiên nhiên và cảnh
          đẹp hùng vĩ, 4 mùa xuân hạ thu đông, miền Bắc luôn là điểm hẹn hấp dẫn
          cho ta trở lại nhiều lần.
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

export default TourMB;

import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TourHead, TourDetail, RegionList } from "../../container";
import { Context} from '../../pages/home/Context';
import CardList from '../../container/cardList/CardList'
import { Banner, ScrollButton } from "../../components";
import CircularProgress from "@mui/material/CircularProgress";
import Cancel from "@mui/icons-material/Cancel";
import axios from "axios";
import { Divider } from "antd";
import Search from '../../components/search/Search'
const TourMDNB = () => {
  const [tag, setTag] = useState("");
  const [DataTours, setDataTours] = useState([]);
  const [fetching, setFetching] = useState(true);
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
          const ATourMB = data.filter((tour)=> tour.loai_tour.ten_loai_tour === 'Tour Miền Tây Nam Bộ');
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
         <Divider plain style={{borderColor:'#f97150'}}><p className="introduction">DU LỊCH MIỀN ĐỒNG NAM BỘ</p></Divider>
      </div>
          <Search />
         <CardList DataTours={DataTours} tag={tag} />
         <ScrollButton />
    </>
  );
};

export default TourMDNB;

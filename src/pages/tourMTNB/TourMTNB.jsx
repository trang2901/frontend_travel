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
const TourMTNB = () => {
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
          const ATourMB = data.filter((tour)=>tour.matour.includes('TMNB'));
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
         
          
         <Divider plain style={{borderColor:'#f97150'}}><p className="introduction">DU LỊCH MIỀN TÂY NAM BỘ</p></Divider>
         </div>
    <Search />
   <CardList DataTours={DataTours} tag={tag} />
   <ScrollButton />
    </>
  );
};

export default TourMTNB;

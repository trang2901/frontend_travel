import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TourHead, TourDetail } from "../../container";

import "./detail.scss";
import axios from "axios";

const Detail = () => {
  const [tourData, setTourData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   fetchDetailTour();
    
  // }, []);

  // const fetchDetailTour =  () =>  {
  //   const slug = searchParams.get("slug");
   
  //    axios(`https://tourapi-dev-n.herokuapp.com/tour/${slug}`)
  //     .then(({ data }) => {
  //       document.title = data.ten;
  //       console.log(data);
  //       setTourData(data);
  //     })
  //     .catch((error) => console.error(error));
  //     console.log(tourData);
  // };

  useEffect(() => {
    const loadAsyncStuff = async () => {
      try {
        const slug = searchParams.get("slug");
   
        const response = await fetch(`https://tourapi-dev-n.herokuapp.com/tour/${slug}`);
        const json = await response.json();
        // console.log(json);
        setTourData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoaded(true);
      }
    };

    loadAsyncStuff();
     
  }, []);
  // console.log('log nè',tourData);
  return (
    tourData != null ?
    <div className="detail padding-section">
      <TourHead tourData={tourData} />
      <TourDetail tourData={tourData} />
      <div className="recentViewed--container"></div>
      <div className="recommend--container"></div>
      <div></div>
    </div> : <></>
  ); 
};

export default Detail;

import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TourHead, TourDetail } from "../../container";

import "./detail.scss";
import axios from "axios";

const Detail = () => {
  const [tourData, setTourData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchDetailTour();
  }, []);

  const fetchDetailTour = () => {
    const slug = searchParams.get("slug");
    axios(`https://tourapi-dev-n.herokuapp.com/tour/${slug}`)
      .then(({ data }) => {
        document.title = data.ten;
        setTourData(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="detail padding-section">
      <TourHead tourData={tourData} />
      <TourDetail tourData={tourData} />
      <div className="recentViewed--container"></div>
      <div className="recommend--container"></div>
      <div></div>
    </div>
  );
};

export default Detail;

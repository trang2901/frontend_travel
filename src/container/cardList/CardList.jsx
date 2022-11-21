import React from "react";
import { TourCard } from "../../components";

import "./cardList.scss";

const CardList = ({ DataTours, tag }) => {
  return (
    <>
      <div className="cardList">
        {DataTours.length == 0 ? (
          <h2 style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Hiện tại chưa có tour du lịch liên quan đến "<strong style={{color: 'red', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>{tag}</strong>"</h2>
        ) : (
          DataTours.map((tour) => (
            <TourCard tourData={tour} key={tour["_id"]} />
          ))
        )}
      </div>
    </>
  );
};

export default CardList;

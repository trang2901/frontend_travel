import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./tourCard.scss";
import dateFormat from 'dateformat';
import { format } from 'date-fns';
const TourCard = ({ tourData }) => {
 const so_cho_con = tourData.so_cho - tourData.du_khach?.length;
 const date_format = dateFormat(tourData.khoi_hanh, "dd/mm/yyyy");

 const newDate = new Date();
 const [trangthai, setTrangThai]= useState('Chưa diễn ra');

 const convertToDate = (dateSting) => {
  const [day, month, year] = dateSting.split("/");
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
}

useEffect(() => {
  // console.log(convertToDate(dateFormat(newDate, "dd/mm/yyyy")).getTime().valueOf());
  // console.log(convertToDate(dateFormat(tourData.khoi_hanh, "dd/mm/yyyy")).getTime().valueOf());
   if(convertToDate(dateFormat(newDate, "dd/mm/yyyy")).getTime().valueOf() > convertToDate(dateFormat(tourData.khoi_hanh, "dd/mm/yyyy")).getTime().valueOf()){
      setTrangThai('Đã diễn ra');
   } else {
    setTrangThai('Chưa diễn ra');
   } 
   
}, [tourData]);
  return (
    <>
    {/* <Link to={`/detail?slug=${tourData.slug}`}> */}
      <Card
        sx={{
          width: 340,
 
          borderRadius: 0,
          boxShadow: "0px 4px 45px -15px rgba(0, 0, 0, 0.15)",
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "0px",
            padding: "1rem",
          }}
        >
          <CardMedia
            component="img"
            src={`https://tourapi-dev-n.herokuapp.com/${tourData.hinh[0]}`}
            sx={{
              width: "100%",
              height: 300,
              filter: "drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.2))",
              borderRadius: "0px",
            }}
            alt=""
          />
          <div className="tourCard--Content">
            {/* <p>Mã tour: {tourData.id}</p> */}
            <h3>{tourData.ten}</h3>
            <p className="trangthai" style={{ color: trangthai==='Đã diễn ra'?"red": "green"}}>{trangthai}</p>
            {/* <p>{tourData.describe}</p> */}  
            
            {/* <h2>
            {tourData.khoi_hanh}
              </h2> */}
              <h2>{date_format}</h2>
              {/* <p style={{textAlign: 'center'}}>.................</p> */}
            <div className="locationBox">
              <h3>{tourData.gia}đ/người</h3> 
            </div>
          </div>
          <div className="tour-btn">
          <Link to={`/detail?slug=${tourData.slug}`}>
            <button className="button">     
            ĐẶT NGAY
              </button>
              </Link>
              <Link to={`/detail?slug=${tourData.slug}`}>
            <button className="button1">     
            XEM CHI TIẾT
    
              </button>
              </Link> 
          </div>
          <p className="para">Số chổ còn nhận: <label className="label_socho">{so_cho_con}</label></p>
        </CardActionArea>
      </Card>
    {/* // </Link> */}
    </>
  );
};

export default TourCard;

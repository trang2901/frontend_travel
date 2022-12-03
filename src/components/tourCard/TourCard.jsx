import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./tourCard.scss";
import dateFormat from 'dateformat';
import { format } from 'date-fns';
import { Divider } from "antd";
import Chip from '@mui/material/Chip';
const TourCard = ({ tourData }) => {
 const so_cho_con = tourData.so_cho - tourData.du_khach?.length;
 const date_format = dateFormat(tourData.khoi_hanh, "dd/mm/yyyy");
 const newDate = new Date();
 const [trangthai, setTrangThai]= useState('Chưa diễn ra');
 const convertToDate = (dateSting) => {
  const [day, month, year] = dateSting.split("/");
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
}
const dateFinal = dateFormat(tourData.ngay_dang_ky_cuoi_cung, "dd/mm/yyyy");
useEffect(() => {
  // console.log(convertToDate(dateFormat(newDate, "dd/mm/yyyy")).getTime().valueOf());
  // console.log(convertToDate(dateFormat(tourData.khoi_hanh, "dd/mm/yyyy")).getTime().valueOf());
   if(convertToDate(dateFormat(newDate, "dd/mm/yyyy")).getTime().valueOf() > convertToDate(dateFormat(tourData.khoi_hanh, "dd/mm/yyyy")).getTime().valueOf()){
      setTrangThai('Đã diễn ra');
   } else {
    setTrangThai('Chưa diễn ra');
   } 
   
}, [tourData]);
const setSocho = (socho) => {
  if(trangthai === 'Đã diễn ra') {
    socho = 0;
  }
  else {
    socho = socho;
  }
}

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
          <div className="numberOfTour1">
            <p>
              {tourData.du_khach?.length || 0}/{tourData.so_cho}
            </p>
            {<PeopleIcon />}
          </div>
          <CardMedia
            component="img"
            src={`http://localhost:3001/${tourData.hinh[0]}`}
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
            {/* <small>{tourData.thoigian}</small> */}
            <h3>{tourData.ten}</h3>
           <p className="trangthai" style={{ color: trangthai==='Đã diễn ra'?"red": "green"}}>{trangthai}</p>
            {/* <p>{tourData.describe}</p> */}  
            
            {/* <h2>
            {tourData.khoi_hanh}
              </h2> */}
              
              <h2>Mã tour: <strong style={{color: '#08183c', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>{tourData.matour}</strong></h2>
              <h2>Ngày khởi hành: <strong style={{color: '#08183c', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>{date_format}</strong></h2>
              <h2>Nơi khởi hành:  <strong style={{color: '#08183c', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>{tourData.diemkhoihanh}</strong></h2>
              <h2>Ngày đăng ký cuối cùng: <strong style={{color: '#08183c', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>{dateFinal}</strong></h2>
              {/* <p style={{textAlign: 'center'}}>.................</p> */}
            <div className="locationBox">
              <h3>{tourData.gia}đ/người</h3> 
            </div>
          </div>
          <div className="tour-btn">
          <Link to={`/detail?slug=${tourData.slug}`}>
            <button className="button" disabled={convertToDate(dateFormat(newDate, "dd/mm/yyyy")).getTime().valueOf() >= convertToDate(dateFormat(tourData.ngay_dang_ky_cuoi_cung, "dd/mm/yyyy")).getTime().valueOf()?"disabled": ""} style={{background: convertToDate(dateFormat(newDate, "dd/mm/yyyy")).getTime().valueOf() >= convertToDate(dateFormat(tourData.ngay_dang_ky_cuoi_cung, "dd/mm/yyyy")).getTime().valueOf()?"grey":"", }}	>     
            ĐẶT NGAY
              </button>
              </Link>
              <Link to={`/detail?slug=${tourData.slug}`}>
            <button className="button1">     
            XEM CHI TIẾT
    
              </button>
              </Link> 
          </div>
       
          <p className="para" 
          style={{color: convertToDate(dateFormat(newDate, "dd/mm/yyyy")).getTime().valueOf() >= convertToDate(dateFormat(tourData.ngay_dang_ky_cuoi_cung, "dd/mm/yyyy")).getTime().valueOf()?'red':'#08183c'}}>
            {convertToDate(dateFormat(newDate, "dd/mm/yyyy")).getTime().valueOf() >= convertToDate(dateFormat(tourData.ngay_dang_ky_cuoi_cung, "dd/mm/yyyy")).getTime().valueOf()?'Đã hết hạn đăng ký': <p className="para">Số chổ còn nhận: <label className="label_socho" style={{color:'red'}}>{so_cho_con}/{tourData.so_cho}</label></p>}</p>
        </CardActionArea>
      </Card>
    {/* // </Link> */}
    </>
  );
};

export default TourCard;

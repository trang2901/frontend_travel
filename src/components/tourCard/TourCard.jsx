import React from "react";
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
const TourCard = ({ tourData }) => {


  return (
    <>
    {/* <Link to={`/detail?slug=${tourData.slug}`}> */}
      <Card
        sx={{
          width: 400,
 
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
            src={`http://tour-api-dev.herokuapp.com${tourData.hinh[0]}`}
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
            {/* <p>{tourData.describe}</p> */}
            
            
            <h2>
                {tourData.khoi_hanh}
              </h2>
              <p style={{textAlign: 'center'}}>.................</p>
            <div className="locationBox">
              <h3>{tourData.gia}đ/person</h3>
                  
              
             
            </div>
            
          </div>
          <div className="tour-btn">
          <Link to={`/detail?slug=${tourData.slug}`}>
            <button className="button">     
            BOOK NOW
    
              </button>
              </Link>

              <Link to={`/detail?slug=${tourData.slug}`}>
            <button className="button1">     
            XEM CHI TIẾT
    
              </button>
              </Link> 
          </div>
          <p className="para">Số chổ còn nhận: .........</p>
        </CardActionArea>
      </Card>
    {/* // </Link> */}
    </>
  );
};

export default TourCard;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../../image/logocheck.png"
import './ordersuccessful.scss'
import { Container } from "@mui/material";
import {Button, Modal} from 'antd';
const Ordersuccessful = () => {
   return (
    <Container style={{justifyContent: 'center'}}>
    <div className="order--container">
    {/* <center> */}
        <img src = {img}/> 
        {/* </center> */}
    <p className="order">Đặt tour thành công</p>
    <label>Cảm ơn bạn đã cho chúng tôi cơ hội được phục vụ !</label>
    <p></p>
    <label>Chúng tôi sẽ kiểm tra và xác nhận đơn đặt hàng sớm nhất có thể! </label>
    <p><label><i class="fa-solid fa-phone"></i> Tư vấn đặt tour:</label>&ensp;<label style={{color: 'red', fontWeight: 'bold'}}>0394075201</label><label>(8:00 - 22:00)</label></p>
    <p></p>
    <div className="btn--tour">
          <Link to={`/home`}>
            <button className="button--trove">     
            Trang chủ
              </button>
              </Link>

              <Link to={`./customer/bookedTour`}>
            <button className="button--tiep">     
            Đơn đã đặt
    
              </button>
              </Link> 
          </div>

    </div>
  
    </Container>
   )
};

export default  Ordersuccessful;

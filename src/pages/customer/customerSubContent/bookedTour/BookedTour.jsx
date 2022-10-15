import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../../../../LoginContext";
import Grid from '@mui/material'
import { Col, Row, Divider } from 'antd';
const BookedTour = () => {
  const [customerJoinedTour, setCustomerJoinedTour] = useState([]);
  const customerID = useContext(LoginContext);

  useEffect(() => {
    axios(`https://tour-api-dev.herokuapp.com/thanhtoan`).then(({ data }) => {
      const filterData = data.filter(
        (bookedTour) => bookedTour.id_khach_hang["_id"] === customerID
      );
      console.log(filterData);
      setCustomerJoinedTour(filterData);
    });
  }, []);

  const getDate = (date) => {
    const temp = new Date(date);
    return `${temp.getDate()}/${temp.getMonth() + 1}/${temp.getFullYear()}`;
  };

  const renderTour = (tour) => (
    <div
      className="tour--item"
      style={{ display: "flex", gap: "2rem", marginBottom: "3rem" }}
    >
      {/* <img
        src={`http://tour-api-dev.herokuapp.com${tour.hinh[0]}`}
        style={{ width: "20%" }}
      /> */}
      <div style={{ width: "150%" }}>
        <Row style={{textAlign: 'left'}}>
          <Col span={8}>
          <h3>Tên tour: </h3>
          </Col>
          <Col span={8}>
          {tour.id_tour.ten}
          </Col>
        </Row>

        {/* <h3>Tên tour: {tour.id_tour.ten}</h3> */}
        <p></p>
        <Row style={{textAlign: 'left'}}>
          <Col span={8}>
          <h3>Ngày Khởi Hàng:  </h3>
          </Col>
          <Col span={8}>
          {tour.id_tour.khoi_hanh}
          </Col>
        </Row>
        {/* <h3>Ngày khởi hành: {tour.id_tour.khoi_hanh}</h3> */}
        <p></p>
        {/* <h3>Ngày đặt tour: {getDate(tour.createdAt)}</h3> */}
        <Row style={{textAlign: 'left'}}>
          <Col span={8}>
          <h3>Ngày Đặt Tour:   </h3>
          </Col>
          <Col span={8}>
          {getDate(tour.createdAt)}
          </Col>
        </Row>
        <Row style={{textAlign: 'left'}}>
          <Col span={8}>
          <h3>Thành Tiền:    </h3>
          </Col>
          <Col span={8}>
          {tour.thanh_tien}
          </Col>
        </Row>

        {/* <Row style={{textAlign: 'left'}}>  
          <Col span={6}>Thành Tiền: </Col>
          <Col span={6}>{tour.thanh_tien}đ</Col> */}
          {/* <Col span={6}> <h3 style={{ width: "50%" }}>{tour.trang_thai_duyet}</h3></Col> */}
        {/* </Row> */}
      </div>
      
     
    </div>

  );
  return (
    <>
      <p>Tour đã đặt</p>
      <div className="customer--tour__Container">
        {customerJoinedTour
          ?.slice(0)
          .reverse()
          .map((tour) => renderTour(tour))}
      </div>
      <Divider dashed style={{borderColor: 'black'}}/>
    </>
  );
};

export default BookedTour;

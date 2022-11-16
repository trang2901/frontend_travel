import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../../../../LoginContext";
import Grid from "@mui/material";
import { Col, Row, Divider, Button, Tabs } from "antd";
import "./bookedTour.scss";
import Chip from "@mui/material/Chip";
import dateFormat from "dateformat";
const BookedTour = () => {
  const [customerJoinedTour, setCustomerJoinedTour] = useState([]);
  const customerID = useContext(LoginContext);
  const [state, setState] = useState(0);
  const [customerJoinedTourDate, setCustomerJoinedTourDate] = useState([]);
  const [customerJoinedTourMonth, setCustomerJoinedTourMonth] = useState([]);
  const [customerJoinedTourYear, setCustomerJoinedTourYear] = useState([]);
  const arrayDate = [];
  const arrayMonth = [];
  const arrayYear =[];
  useEffect(() => {
    axios(`https://tourapi-dev-n.herokuapp.com/thanhtoan`).then(({ data }) => {
      const filterData = data.filter(
        (bookedTour) => bookedTour.id_khach_hang["_id"] === customerID
      );
      const date = new Date();
      for (let i = 0; i < filterData.length; i++) {
        const newDate = new Date(dateFormat(filterData[i].createdAt));
        if (newDate.getDate() == date.getDate()) {
          // console.log('tour đặt trong tháng: ', customerJoinedTour[i]);
          arrayDate.push(filterData[i]);
        }
        if (newDate.getMonth() == date.getMonth()) {
          arrayMonth.push(filterData[i]);
        }
        if (newDate.getFullYear() == date.getFullYear()) {
          arrayYear.push(filterData[i]);
        }
      }
      setCustomerJoinedTourYear(arrayYear);
      setCustomerJoinedTourMonth(arrayMonth);
      setCustomerJoinedTourDate(arrayDate);
      setCustomerJoinedTour(filterData);
    });
  }, []);

  const deleteBill = (billid) => {
    axios
      .delete(`https://tourapi-dev-n.herokuapp.com/thanhtoan/${billid}`)
      .then((res) => {
        alert("Xóa thành công");
        window.location.reload();
      })
      .catch(() => {
        alert("xóa thất bại");
      });
  };

  // useEffect(()=>{
  //   const date = new Date();
  //   const array = [];
  //   for (let i = 0; i < customerJoinedTour.length; i++) {
  //     const newDate = new Date(dateFormat(customerJoinedTour[i].createdAt));
  //     // console.log("monrh nè: ", newDate.getDate());

  //     if (newDate.getDate() == date.getDate()) {
  //       // console.log('tour đặt trong tháng: ', customerJoinedTour[i]);
  //       array.push(customerJoinedTour[i]);
  //     } else {
  //       // console.log("tour khác");
  //     }
  //   }
  //   console.log("mảng vừa push", array);
  //   setCustomerJoinedTourDate(array);

  // });

  // useEffect(()=>{
  //   const date = new Date();
  //   const array = [];
  //   for (let i = 0; i < customerJoinedTour.length; i++) {
  //     const newDate = new Date(dateFormat(customerJoinedTour[i].createdAt));
  //     console.log("monrh nè: ", newDate.getDate());

  //     if (newDate.getMonth() == date.getMonth()) {
  //       // console.log('tour đặt trong tháng: ', customerJoinedTour[i]);
  //       array.push(customerJoinedTour[i]);
  //     } else {
  //       console.log("tour khác");
  //     }
  //   }
  //   console.log("mảng vừa push", array);
  //   setCustomerJoinedTourMonth(array);
  // });

  // useEffect(()=>{
  //   const date = new Date();
  //   const array = [];
  //   for (let i = 0; i < customerJoinedTour.length; i++) {
  //     const newDate = new Date(dateFormat(customerJoinedTour[i].createdAt));
  //     console.log("monrh nè: ", newDate.getDate());

  //     if (newDate.getFullYear() == date.getFullYear()) {
  //       // console.log('tour đặt trong tháng: ', customerJoinedTour[i]);
  //       array.push(customerJoinedTour[i]);
  //     } else {
  //       console.log("tour khác");
  //     }
  //   }
  //   console.log("mảng vừa push", array);
  //   setCustomerJoinedTourYear(array);
  // });
  const getDate = (date) => {
    const temp = new Date(date);
    return `${temp.getDate()}/${temp.getMonth() + 1}/${temp.getFullYear()}`;
  };
  // console.log("bookedTour:", customerJoinedTour);

  const getDataItem = () => {
    const date = new Date();
    const array = [];
    for (let i = 0; i < customerJoinedTour.length; i++) {
      const newDate = new Date(dateFormat(customerJoinedTour[i].createdAt));
      console.log("monrh nè: ", newDate.getDate());

      if (newDate.getDate() == date.getDate()) {
        // console.log('tour đặt trong tháng: ', customerJoinedTour[i]);
        array.push(customerJoinedTour[i]);
      } else {
        console.log("tour khác");
      }
    }
    console.log("mảng vừa push", array);
    setCustomerJoinedTourDate(array);
  };

  const getData = (data) => {
    console.log(data);
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
        <Row style={{ textAlign: "left" }}>
          {/* <p>{tour._id}</p>  */}
          <Col span={4}>
            <p>TÊN TOUR:</p>
          </Col>
          <Col span={12}>{tour.id_tour.ten}</Col>
          
          <Col
            span={8}
            style={{
              textAlign: "center",
              justifyContent: "center",
              color: tour.trang_thai_duyet==='Chưa duyệt'?'red':'green',
              fontWeight: "bold",
              textTransform: 'uppercase'
            }}
          >
            {tour.trang_thai_duyet}
          </Col>
        </Row>

        {/* <h3>Tên tour: {tour.id_tour.ten}</h3> */}
        <p></p>
        <Row style={{ textAlign: "left" }}>
          <Col span={4}>
            <p>NGÀY KHỞI HÀNH: </p>
          </Col>
          <Col span={12}>{tour.id_tour.khoi_hanh}</Col>
        </Row>
        {/* <h3>Ngày khởi hành: {tour.id_tour.khoi_hanh}</h3> */}
        <p></p>
        {/* <h3>Ngày đặt tour: {getDate(tour.createdAt)}</h3> */}
        <Row style={{ textAlign: "left" }}>
          <Col span={4}>
            <p>NGÀY ĐẶT TOUR: </p>
          </Col>
          <Col span={12}>{getDate(tour.createdAt)}</Col>
        </Row>
        <p></p>
        <Row style={{ textAlign: "left" }}>
          <Col span={4}>
            <p>THÀNH TIỀN: </p>
          </Col>
          <Col span={12}>{tour.thanh_tien}</Col>
        </Row>

        <Row style={{ textAlign: "left" }}>
          <Col span={4}>
          <a
            // disabled={tour.trang_thai_duyet === 'Chưa duyệt'? 'disabled':''}
            href= {tour.trang_thai_duyet === 'Chưa duyệt'?'':"http://localhost:3000/bill"}
            onClick={() => localStorage.setItem("id", tour._id)}
           
          >
            {tour.trang_thai_duyet==='Chưa duyệt'?'': 'Xuất hóa đơn'}
          </a>
          </Col>
          <Col span={12}></Col>
         <Col 
         span={8}
         style={{
          textAlign: "center",
          justifyContent: "center",
          color: 'red',
          fontWeight: "bold",
          textTransform: 'uppercase'
        }}
         >
          {tour.trang_thai_duyet === 'ĐÃ DUYỆT'?'': <button style={{fontWeight: 'bold'}} onClick={() => deleteBill(tour._id)}>HỦY ĐƠN</button>}
         
         </Col>

         
        </Row>
        <Divider dashed style={{ borderColor: "#f97150" }} />
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
      <div className="tour_dadat">
        <Divider plain style={{ borderColor: "#f97150" }}>
          <p>TOUR ĐÃ ĐẶT</p>
        </Divider>{" "}
      </div>
      <div className="customer--tour__Container">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Tất cả các đơn đã đặt" key="1">
            {customerJoinedTour
              ?.slice(0)
              .reverse()
              .map((tour) => renderTour(tour))}
          </Tabs.TabPane>

          <Tabs.TabPane tab="Đơn đặt trong ngày" key="2">
            {customerJoinedTourDate
              ?.slice(0)
              .reverse()
              .map((tour) => renderTour(tour))}
          </Tabs.TabPane>

          <Tabs.TabPane tab="Đơn đặt trong tháng" key="3">
            {customerJoinedTourMonth
              ?.slice(0)
              .reverse()
              .map((tour) => renderTour(tour))}
          </Tabs.TabPane>
          <Tabs.TabPane tab="Đơn đặt trong năm" key="4">
            {customerJoinedTourYear
              ?.slice(0)
              .reverse()
              .map((tour) => renderTour(tour))}
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default BookedTour;

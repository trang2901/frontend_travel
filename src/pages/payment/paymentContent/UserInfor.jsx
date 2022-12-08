import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { Col, Row, Input} from 'antd';
import "../payment.scss";
import dateFormat from 'dateformat';
import { formatPrice } from "../../../utils/helpers";

const UserInfor = ({ customerData, setCustomerData }) => {
  const customerID = window.sessionStorage.getItem("customerID");

// var gia = parseFloat(bookTourInfor.gia.replaceAll('.', ''));

  const bookTourInfor = JSON.parse(
    window.localStorage.getItem("bookTourInfor")
  );
  
  const date_format = dateFormat(bookTourInfor.date, "dd - mm - yyyy");
  const handleChange = (e) => {
    switch (e.target.id) {
      case "ho_ten":
        setCustomerData({ ...customerData, ho_ten: e.target.value });
        break;
      case "sdt":
        setCustomerData({ ...customerData, sdt: e.target.value });
        break;
      case "email":
        setCustomerData({ ...customerData, email: e.target.value });
        break;
      case "dia_chi":
        setCustomerData({ ...customerData, dia_chi: e.target.value });
        break;
    }
  };

  const handleUpdate = (e) => {
    switch (e.target.id) {
      case "ho_ten":
        axios.put(
          `http://localhost:3001/khachhang/${customerID}`,
          {
            ho_ten: customerData.ho_ten,
          }
        );
        break;
      case "sdt":
        axios.put(
          `http://localhost:3001/khachhang/${customerID}`,
          {
            sdt: customerData.sdt,
          }
        );
        break;
      case "email":
        axios.put(
          `http://localhost:3001/khachhang/${customerID}`,
          {
            email: customerData.email,
          }
        );
        break;
      case "dia_chi":
        axios.put(
          `http://localhost:3001/khachhang/${customerID}`,
          {
            dia_chi: customerData.dia_chi,
          }
        );
        break;
    }
  };
  // console.log('data: ', parseInt(bookTourInfor.gia.replaceAll('.', '')));

  return (
    <div className="payment padding-section">
      <div className="tour--infor">
      
        <div className="tour--infor__container">
        {/* <p className="chitiet--tour">Chi tiết tour</p> */}
          <img src={`http://localhost:3001${bookTourInfor.img}`} />
          <div className="tour--infor__detail">
            {/* <h1>Tour: {bookTourInfor.name}</h1> */}
            
            <Row>

            <p className="tentour">{bookTourInfor.name}</p>
          </Row>
          <Row>
            <Col span={14}>
              <label  className="lb">Số người:   </label>
            </Col>
            <Col span={10}>
            <p className="des">{bookTourInfor.number}</p>
            </Col>
          </Row>
            {/* <h3>
              Số người: <span>{bookTourInfor.number}</span>
            </h3> */}
            <Row>
            <Col span={14}>
              <label  className="lb">Thời gian khởi hành:   </label>
            </Col>
            <Col span={10}>
            <p className="des">{date_format}</p>
            </Col>
          </Row>
            {/* <h3>
              Thời gian khởi hành: <span>{bookTourInfor.date}</span>
            </h3> */}

          </div>
        </div>
      </div>

      <div className="payment--form">
        <form>
          <div className="payment--form__input">
            <p className="title_chitiet">Chi tiết thanh toán</p>
            <p className="slg">Hoàn tất việc mua sắm của bạn bằng việc hoàn thành thông tin chi tiết dưới đây.</p>
            <p className="slg">Hoàn thành một số thông tin để sang bước kế tiếp</p>
            {/* <div className="row"> */}
             

              <Row>
            <Col span={8}>
              <label>Họ tên: <sup style={{ color: "red" }}>*</sup>  </label>
            </Col>
            <Col span={16}>
            <Input
                id="ho_ten"
                onChange={handleChange}
                onBlur={handleUpdate}
                value={customerData.ho_ten || ""}
                type="text"
                name="name"
                size="large"
                width="20px"
                maxLength="200px"
              />
            </Col>
          </Row>
            {/* </div> */}
            <Row>
            <Col span={8}>
              <label>Địa chỉ: <sup style={{ color: "red" }}>*</sup>  </label>
            </Col>
            <Col span={16}>
            <Input
              id="dia_chi"
              name="address"
              label="Địa chỉ liên hệ"
              type="text"
          onChange={handleChange}
                onBlur={handleUpdate}
                value={customerData.dia_chi || ""}
                size="large"
                width="20px"
                maxLength="200px"
              />
            </Col>
          </Row>

          <Row>
            <Col span={8}>
              <label>Số điện thoại: <sup style={{ color: "red" }}>*</sup>  </label>
            </Col>
            <Col span={16}>
            <Input
              id="sdt"
              name="sdt"
       
              type="number"
          onChange={handleChange}
                onBlur={handleUpdate}
                value={customerData.sdt || ""}
                size="large"
                width="20px"
                maxLength="200px"
              />
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <label>Email:<sup style={{ color: "red"}}>*</sup>   </label>
            </Col>
            <Col span={16}>
            <Input
                id="email"
                onChange={handleChange}
                onBlur={handleUpdate}
                value={customerData.email || ""}
                type="email"
                name="email"
                size="large"
                width="20px"
                maxLength="200px"
              />
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <label>Tên doanh nghiệp:  </label>
            </Col>
            <Col span={16}>
            <Input
              id="tendoanhnghiep"
              name="tendoanhnghiep"
              type="text"
              onChange={handleChange}
                onBlur={handleUpdate}
                value={customerData.tendoanhnghiep || ""}
                size="large"
                width="20px"
                maxLength="200px"
              />
            </Col>
          </Row>

          <Row>
            <Col span={8}>
              <label>Mã số thuế doanh nghiệp:    </label>
            </Col>
            <Col span={16}>
            <Input
              id="masothuedoanhnghiep"
              name="masothuedoanhnghiep"
              type="text"
          onChange={handleChange}
                onBlur={handleUpdate}
                value={customerData.masothuedoanhnghiep || ""}
                size="large"
                width="20px"
                maxLength="200px"
              />
            </Col>
          </Row>
          </div>



          <div className="playment--form__button">
          <Row className="row_thanhtoan">
            <Col span={8}>
              <label>Tổng phụ: </label>
            </Col>
            <Col span={16} className="gia">
            {bookTourInfor.gia}
            {/* {formatPrice(parseFloat(bookTourInfor.gia.replaceAll('.', '')))} */}
            </Col>
          </Row>

          <Row className="row_thanhtoan">
            <Col span={8}>
              <label>VAT(10%):  </label>
            </Col>
            <Col span={16} className="gia">
            {formatPrice(parseFloat(bookTourInfor.gia.replaceAll('.', '')) * 0.1)}
            </Col>
          </Row>

          <Row className="row_thanhtoan">
            <Col span={8}>
              <label style={{fontWeight: 'bold'}}>Tổng thành tiền:  </label>
            </Col>
            <Col span={16} className="gia" style={{fontWeight: 'bold'}}>
            { formatPrice(parseFloat(bookTourInfor.gia.replaceAll('.', '')) + parseFloat(bookTourInfor.gia.replaceAll('.', '')) * 0.1)}
            </Col>
          </Row>


            {/* <h1>{bookTourInfor.gia} vnđ</h1> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInfor;

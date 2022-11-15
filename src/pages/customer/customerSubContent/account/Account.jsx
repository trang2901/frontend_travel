import { TextField } from "@mui/material";
import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { LoginContext } from "../../../../LoginContext";
import { Divider, Input, Col, Row } from "antd";
import "./acount.scss";
const Account = () => {
  const [customerData, setCustomerData] = useState({});
  console.log(customerData);
  const customerID = useContext(LoginContext);

  useEffect(() => {
    axios(`https://tourapi-dev-n.herokuapp.com/khachhang/${customerID}`).then(
      ({ data }) => setCustomerData(data)
    );
  }, []);

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
          `https://tourapi-dev-n.herokuapp.com/khachhang/${customerID}`,
          {
            ho_ten: customerData.ho_ten,
          }
        );
        break;
      case "sdt":
        axios.put(
          `https://tourapi-dev-n.herokuapp.com/khachhang/${customerID}`,
          {
            sdt: customerData.sdt,
          }
        );
        break;
      case "email":
        axios.put(
          `https://tourapi-dev-n.herokuapp.com/khachhang/${customerID}`,
          {
            email: customerData.email,
          }
        );
        break;
      case "dia_chi":
        axios.put(
          `https://tourapi-dev-n.herokuapp.com/khachhang/${customerID}`,
          {
            dia_chi: customerData.dia_chi,
          }
        );
        break;
    }
  };

  return (
    <>
      <div className="thongtin">
        <Divider plain style={{ borderColor: "#f97150" }}>
          <p>THÔNG TIN TÀI KHOẢN</p>
        </Divider>
      </div>
      <div className="customer--account">
        <form>
          <Row>
            <Col span={4}>
              <label className="lb1">HỌ TÊN: </label>
            </Col>
            <Col span={18}>
              <Input
                id="ho_ten"
                value={customerData.ho_ten || ""}
                onChange={handleChange}
                onBlur={handleUpdate}
                type="textarea"
                name="name"
                size="large"
                width="20px"
                maxLength="200px"
                
              />
            </Col>
          </Row>
          <p></p>
          {/* <TextField
            id="ho_ten"
            type="text"
            value={customerData.ho_ten || ""}
            name="name"
            onChange={handleChange}
            onBlur={handleUpdate}
            label="Họ tên"
          /> */}
          <Row>
            <Col span={4}>
              <label className="lb1">SỐ ĐIỆN THOẠI: </label>
            </Col>
            <Col span={18}>
              <Input
                id="sdt"
                value={customerData.sdt || ""}
                onChange={handleChange}
                onBlur={handleUpdate}
                type="textarea"
                name="sdt"
                size="large"
                width="20px"
                maxLength="200px"
                
              />
            </Col>
          </Row>

          {/* <TextField
            id="sdt"
            type="text"
            value={customerData.sdt || ""}
            name="sdt"
            label="Số điện thoại"
            onChange={handleChange}
            onBlur={handleUpdate}
          /> */}
          <p></p>
          <Row>
            <Col span={4}>
              <label className="lb1">EMAIL: </label>
            </Col>
            <Col span={18}>
              <Input
                id="email"
                type="email"
                value={customerData.email || ""}
                name="email"
                onChange={handleChange}
                onBlur={handleUpdate}
                size="large"
                width="20px"
                maxLength="200px"
              />
            </Col>
          </Row>
          {/* <TextField
            id="email"
            type="email"
            value={customerData.email || ""}
            name="email"
            label="email"
            onChange={handleChange}
            onBlur={handleUpdate}
          /> */}
          <p></p>
          {/* <TextField
            id="dia_chi"
            type="text"
            value={customerData.dia_chi || ""}
            name="dia_chi"
            label="Địa chỉ"
            onChange={handleChange}
            onBlur={handleUpdate}
          /> */}

          <Row>
            <Col span={4}>
              <label className="lb1">ĐỊA CHỈ: </label>
            </Col>
            <Col span={18}>
              <Input
                id="dia_chi"
                type="textarea"
                value={customerData.dia_chi || ""}
                name="dia_chi"
                onChange={handleChange}
                onBlur={handleUpdate}
                size="large"
                width="20px"
                maxLength="200px"
              />
            </Col>
          </Row>
         
        </form>
      </div>
    </>
  );
};

export default Account;

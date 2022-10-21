import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import { LoginContext } from "../../LoginContext";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import { getDate, getMonth, getYear } from "date-fns";
import ButtonCustom from "../../components/buttonCustom/ButtonCustom";
import { useNavigate } from "react-router-dom";
import { MuiFbPhotoGrid } from "mui-fb-photo-grid";
import PeopleIcon from "@mui/icons-material/People";
import { calendar, numberpeople, location } from "../../assets/svg";
import { Container, TextareaAutosize } from "@mui/material";
import "antd/dist/antd.css";
import { Divider, Space, Col, Row } from "antd";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";
import "./tourHead.scss";
import { red } from "@mui/material/colors";
import dateFormat from "dateformat";

const TourHead = ({ tourData }) => {
  const customerID = useContext(LoginContext);

  const [numberGuest, setNumberGuest] = useState(0);
  const date_format = dateFormat(tourData.khoi_hanh, "dd - mm - yyyy");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const sumCost = (cost, numberGuest) => {
      const formatVND = (value) => {
        value = value.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        });
        return value.replaceAll("VND", "").trim();
      };

      const sum = parseInt(cost.replaceAll(".", "")) * numberGuest;
      return formatVND(sum);
    };

    const infor = {
      id: tourData["_id"],
      img: tourData.hinh[0],
      name: tourData.ten,
      gia: sumCost(tourData.gia, numberGuest),
      date: tourData.khoi_hanh,
      number: numberGuest,
      du_khach: tourData.du_khach,
    };

    const bookTourData = {
      id_khach_hang: customerID,
      id_tour: tourData["_id"],
      giam_gia: "10%",
      thanh_tien: sumCost(tourData.gia, numberGuest),
      phuong_thuc_tt: "Chia kỳ",
      ky_thanh_toan: [],
      trang_thai_duyet: "Chưa duyệt",
    };

    if (customerID) {
      window.localStorage.setItem(
        "bookTourPostRequestData",
        JSON.stringify(bookTourData)
      );
      window.localStorage.setItem("bookTourInfor", JSON.stringify(infor));
      navigate("/payment");
    } else window.location.href = "/login";
  };

  function getImage(dataImage) {
    const imageArray = [];
    dataImage?.map((imageURL) =>
      imageArray.push({
        title: "...", // require
        img: `https://tourapi-dev-n.herokuapp.com/${imageURL}`, // require
        imgThumbnail: `https://tourapi-dev-n.herokuapp.com/${imageURL}`, // optional
      })
    );
    return imageArray;
  }

  const IMAGES = getImage(tourData.hinh);

  const buttonUpDownStyle = {
    maxWidth: "30px",
    maxHeight: "30px",
    minWidth: "30px",
    minHeight: "30px",
    background: "#f97150",
    color: "black"
    
  };

  const buttonSubmitStyle = {
    width: "100%",
    padding: "1rem 0",
    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.15)",
    marginTop: "1rem",
    backgroundColor: "#f97150",
    color: "black",
  };

  const handleClickAdd = () => {
    setNumberGuest(numberGuest + 1);
  };

  const handleClickSubtract = () => {
    setNumberGuest(numberGuest - 1);
  };

  const handleClickSubmit = () => {
    console.log("submit");
  };

  return (
    <Container>
      <div className="tour--information">
        <div className="tour--information__lightBox">
          <div className="numberOfTour">
            <p>
              {tourData.du_khach?.length || 0}/{tourData.so_cho}
            </p>
            {<PeopleIcon />}
          </div>

          <MuiFbPhotoGrid
            style={{ height: "250px" }}
            sx={{ height: "250px" }}
            images={IMAGES} // require
            reactModalStyle={{ overlay: { zIndex: 2000 } }} // optional (https://github.com/reactjs/react-modal#styles)
          />

          {/* <LightBox images={tourData.hinh} /> */}
        </div>
        <div className="tour--information__general">
          <div className="name">
            <h3>{tourData.ten}</h3>
            <p className="trangthai">Trạng thái</p>
          </div>
          <Divider style={{ borderColor: "darkgrey" }} />
          <p>{tourData.description}</p>
          <p style={{ color: "red", fontSize: "30px" }}>{tourData.gia} đ</p>

          {/* {tourData.location} */}

          {/* <div className="location"> */}
          {/* <img src={location} style={{ width: "24px" }} alt="location.svg" />
            <span>Nhật Bản</span> */}
          <Row>
            <Col span={7}>
              <label className="label_detail">
                <i class="fa-regular fa-file-code"></i> &ensp;Mã:{" "}
              </label>
            </Col>
            <Col span={17}>{tourData.id_tour}</Col>
          </Row>
          <p></p>
          <Row>
            <Col span={7}>
              <label className="label_detail">
                <i class="fa-solid fa-car"></i>&ensp;Phương tiện:{" "}
              </label>
            </Col>
            <Col span={17}></Col>
          </Row>
          <p></p>
          <Row>
            <Col span={7}>
              <label className="label_detail">
                <i class="fa-solid fa-location-dot"></i>&ensp;Địa điểm:{" "}
              </label>
            </Col>
            <Col span={17}>NHẬT BẢN</Col>
          </Row>
          <p></p>
          <Row>
            <Col span={7}>
              <label className="label_detail">
                <i class="fa-solid fa-calendar"></i>&ensp;Date:{" "}
              </label>
            </Col>
            <Col span={17}>
              <label>{date_format}</label>
            </Col>
          </Row>
          <p></p>
          {/* </div> */}
          <Row>
            <Col span={7}>
              <label className="label_detail">
                <i class="fa-solid fa-person"></i>&ensp;People:{" "}
              </label>
            </Col>
            <Col span={17}>
              {numberGuest ? (
                <ButtonCustom
                  nameString="-"
                  style={buttonUpDownStyle}
                  variant="contained"
                  customFunction={handleClickSubtract}
                />
              ) : (
                <ButtonCustom
                  nameString="-"
                  style={buttonUpDownStyle}
                  variant="outlined"
                  disabled={true}
                />
              )}
              <input
                id="numberGuest"
                name="numberGuest"
                type="text"
                value={numberGuest}
                style={{ textAlign: "center", width: "50px", border: "none" }}
              />

              {numberGuest <
              parseInt(tourData.so_cho - tourData.du_khach?.length || 0) ? (
                <ButtonCustom
                  nameString="+"
                  style={buttonUpDownStyle}
                  variant="contained"
                  customFunction={handleClickAdd}
                />
              ) : (
                <ButtonCustom
                  nameString="+"
                  style={buttonUpDownStyle}
                  variant="outlined"
                  disabled={true}
                />
              )}
            </Col>
          </Row>

          {/* <div className="input numberGuest2"> */}

          {/* <div className="numberGuest--input1"> */}

          {/* </div> */}
          {/* <div className="booktour--form"> */}
          {/* <div className="input--section"> */}
          {/* <div className="input date"> */}
          {/* <label> */}
          {/* <label>
<i class="fa-solid fa-calendar"></i>  Date
                </label> */}
          {/* <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={date}
                  onChange={(date) => {
                    setDate(date);
                    const day = getDate(date);
                    const month = getMonth(date) + 1;
                    const year = getYear(date);
                    setSelectedDate(`${day}/${month}/${year}`);
                  }}
                  minDate={new Date()}
                  wrapperClassName="datePicker"
                  // highlightDates={tourData.date.map(
                  //   (date) => new Date(date.split("/").reverse().join())
                  // )}
                  disabledKeyboardNavigation
                /> */}
          {/* <div>{tourData.khoi_hanh}</div> */}
          {/* </div> */}
          {/* <div className="input numberGuest">
                <label>
                <i class="fa-solid fa-person"></i>
                  People
                </label>
                <div className="numberGuest--input">
                  {numberGuest ? (
                    <ButtonCustom
                      nameString="-"
                      style={buttonUpDownStyle}
                      variant="contained"
                      customFunction={handleClickSubtract}
                    />
                  ) : (
                    <ButtonCustom
                      nameString="-"
                      style={buttonUpDownStyle}
                      variant="outlined"
                      disabled={true}
                    />
                  )}
                  <input
                    id="numberGuest"
                    name="numberGuest"
                    type="text"
                    value={numberGuest}
                    style={{ textAlign: "center", width: "50px" }}
                  />

                  {numberGuest <
                  parseInt(tourData.so_cho - tourData.du_khach?.length || 0) ? (
                    <ButtonCustom
                      nameString="+"
                      style={buttonUpDownStyle}
                      variant="contained"
                      customFunction={handleClickAdd}
                    />
                  ) : (
                    <ButtonCustom
                      nameString="+"
                      style={buttonUpDownStyle}
                      variant="outlined"
                      disabled={true}
                    />
                  )}
                </div> */}
          {/* </div> */}
          {/* </div> */}

          {
            /*tourData.date.includes(selectedDate) &&*/ numberGuest ? (
              <ButtonCustom
                type="Submit"
                nameString="Đặt Tour"
                variant="contained"
                style={buttonSubmitStyle}
                customFunction={handleSubmit}
              />
            ) : (
              <ButtonCustom
                type="Submit"
                nameString="Chọn số người tham gia"
                variant="contained"
                style={buttonSubmitStyle}
                disabled={true}
              />
            )
          }
          <p></p>
          <Divider dashed style={{ borderColor: "darkgrey" }}>
            HOTLINE TƯ VẤN & ĐẶT TOUR
          </Divider>
          <div className="contact">
            <label className="label1">
              <i class="fa-solid fa-phone"></i> HOLINE TƯ VẤN:{" "}
            </label>
            <label> 0394075201</label>
            <br></br>
            <label className="label1">
              <i class="fa-solid fa-envelope"></i> EMAIL:{" "}
            </label>
            <label> test@gmail.com</label>
          </div>
          {/* </div> */}
        </div>
      </div>
    </Container>
  );
};

export default TourHead;

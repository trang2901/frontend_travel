import React, { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { Button } from "@mui/material";
import {
  WizzardHeader,
  UserInfor,
  AccompanyInfor,
} from "./paymentContent/index";
import "./paymentContent.scss";
import axios from "axios";
import { Divider } from "antd";
import { Container, Paper } from "@mui/material";
import { ConstructionOutlined } from "@mui/icons-material";
import { formatPrice } from "../../utils/helpers";
import { ScrollButton } from "../../components";
const PaymentContent = () => {

  const [onShowLinkInput, setOnShowLinkInput] = useState(false);
  const [activedStep, setActivedStep] = useState(0);
  const [customerData, setCustomerData] = useState({});
  const [accompanyData, setAccompanyData] = useState([]);
  useEffect(() => {
    const customerID = window.sessionStorage.getItem("customerID");
    axios(`https://tourapi-dev-n.herokuapp.com/khachhang/${customerID}`).then(
      ({ data }) => setCustomerData(data)
    );
  }, []);

  useEffect(() => {
    //  Create accompany array
    const arrayTemp = [];
    Array.from({ length: numberGuest }, (item, index) => {
      if (index === 0)
        arrayTemp.push({
          ho_ten: customerData.ho_ten,
          sdt: customerData.sdt,
          tuoi: customerData.tuoi
        });
      else
        arrayTemp.push({
          ho_ten: "",
          sdt: "",
          tuoi: "",
        });
    });
    setAccompanyData(arrayTemp);
  }, [customerData]);

  const handleButtonBack = () => {
    setActivedStep(activedStep - 1);
  };

  const handleButtonNext = () => {
    setActivedStep(activedStep + 1);
  };

  const handleChange = (index) => {
    setActivedStep(index);
  };

  const tourData = JSON.parse(localStorage.getItem("bookTourInfor"));
  
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const requestPosData = JSON.parse(
      window.localStorage.getItem("bookTourPostRequestData")
    );
     
    // console.log('đây là data request', requestPosData);
    if (customerData.email !== "") {
      if (customerData.ho_ten !== "") {
        e.preventDefault();
        setLoading(true);
        const email = customerData.email;
        const hoten = customerData.ho_ten;
        const sodienthoai = customerData.sdt;
        const newDate = new Date();
        const ngaydattour = newDate.getDate() + "/" + newDate.getMonth() + "/" + newDate.getFullYear() + " "+ "-"+" " + newDate.getHours()+":"+newDate.getMinutes()+":"+ newDate.getSeconds();
        const tongtien = formatPrice(
          parseFloat(tourData.gia.replaceAll(".", "")) +
            parseFloat(tourData.gia.replaceAll(".", "")) * 0.1
        );
        const body = {
          email,
          hoten,
          sodienthoai,
          tongtien,
          ngaydattour
        };

        axios
          .post("https://tourapi-dev-n.herokuapp.com/mail", {
            email,
            hoten,
            sodienthoai,
            tongtien,
            ngaydattour
          })
          .then((res) => {
            alert("Email đã được gửi");
            setLoading(false);
            console.log(res);
            // window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      } else {
        alert("Compose Email");
      }
    } else {
      alert("Please fill all required filled");
    }

    axios
      .post("https://tourapi-dev-n.herokuapp.com/thanhtoan", requestPosData)
      .catch((err) => console.log(err));

    const patchDuKhachTour = (idDuKhaches) => {
      axios
        .patch(`https://tourapi-dev-n.herokuapp.com/tour/${tourData.id}`, {
          du_khach: [
            ...[...tourData.du_khach].map((item) => item["_id"]),
            ...idDuKhaches,
          ],
        })
        .then((result) => {
          // alert("Đặt tour thành công");
          window.location.href =
            // "http://localhost:3000/customer/bookedTour"
            "http://localhost:3000/ordersuccessful";
        })
        .catch((err) => console.log(err));
    };

    axios
      .post(`https://tourapi-dev-n.herokuapp.com/dukhach`, accompanyData)
      .then(({ data }) => patchDuKhachTour(data))
      .catch((err) => console.log(err));
  };
  console.log('đây là data Tour:', tourData);
  //User data
  const userData = {};
  //accompany data
  const numberGuest = JSON.parse(
    window.localStorage.getItem("bookTourInfor")
  )?.number;

  // gửi mail
  // const handleRequest = async (e) => {
  //   if (customerData.email !== "") {
  //     if (customerData.ho_ten !== "") {
  //       e.preventDefault();
  //       setLoading(true);
  //       const email = customerData.email;
  //       const hoten = customerData.ho_ten;
  //       const sodienthoai = customerData.sdt;
  //       const tongtien = formatPrice(
  //         parseFloat(tourData.gia.replaceAll(".", "")) +
  //           parseFloat(tourData.gia.replaceAll(".", "")) * 0.1
  //       );
  //       console.log("lại là email", email);
  //       console.log('so dientoahi',customerData.sdt);
  //       console.log('ho ten:', customerData.ho_ten);
  //       console.log('tổng tiền: ', formatPrice(parseFloat(tourData.gia.replaceAll('.', '')) + parseFloat(tourData.gia.replaceAll('.', '')) * 0.1))
  //       const body = {
  //         email,
  //         hoten,
  //         sodienthoai,
  //         tongtien,
  //       };
  //       axios
  //         .post("https://tourapi-dev-n.herokuapp.com/mail", body)
  //         .then((res) => {
  //           alert("Email Sent Successfully");
  //           setLoading(false);
  //           console.log(res);
  //           window.location.reload();
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //           setLoading(false);
  //         });
  //     } else {
  //       alert("Compose Email");
  //     }
  //   } else {
  //     alert("Please fill all required filled");
  //   }
  // };
  return (
    <>
      <div className="payment_h">
        <Divider plain style={{ borderColor: "#f97150" }}>
          <p>THANH TOÁN</p>
        </Divider>
      </div>
      <Container style={{ paddingBottom: "20px" }}>
        <Paper elevation={5}>
          <div className="pagementContent">
            {/* <WizzardHeader /> */}
            <form className="pagementContent.form" onSubmit={handleSubmit}>
              <SwipeableViews index={activedStep} onChangeIndex={handleChange}>
                <UserInfor
                  data={userData}
                  customerData={customerData}
                  setCustomerData={setCustomerData}
                />

                <AccompanyInfor
                  onShowLinkInput={onShowLinkInput}
                  setOnShowLink={setOnShowLinkInput}
                  customerData={customerData}
                  numberGuest={numberGuest}
                  accompanyData={accompanyData}
                  setAccompanyData={setAccompanyData}
                />
              </SwipeableViews>
              <div className="btn--group">
                <Button
                  disabled={activedStep === 0}
                  onClick={handleButtonBack}
                  variant="contained"
                >
                  Trở về
                </Button>
                {activedStep === 1 ? (
                  <Button onClick={handleSubmit} variant="contained">
                    Đặt tour
                  </Button>
                ) : (
                  <Button onClick={handleButtonNext} variant="contained">
                    Tiếp tục
                  </Button>
                )}
              </div>
            </form>
          </div>
        </Paper>
      </Container>
      <ScrollButton />
    </>
  );
};

export default PaymentContent;

import React, { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { Button, TextField } from "@mui/material";

import {
  WizzardHeader,
  UserInfor,
  AccompanyInfor,
  StripeContainer,
  PaymentForm,
} from "./paymentContent/index";

import "./paymentContent.scss";
import axios from "axios";
import * as Yup from "yup";
import { Divider } from "antd";
import { Container, Paper } from "@mui/material";
import { ConstructionOutlined } from "@mui/icons-material";
import { formatPrice } from "../../utils/helpers";
import { ScrollButton } from "../../components";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Formik } from "formik";
import { Radio, Space, Input } from "antd";
const PaymentContent = () => {
  const [onShowLinkInput, setOnShowLinkInput] = useState(false);
  const [activedStep, setActivedStep] = useState(0);
  const [customerData, setCustomerData] = useState({});
  const [accompanyData, setAccompanyData] = useState([]);
  useEffect(() => {
    const customerID = window.sessionStorage.getItem("customerID");
    axios(`http://localhost:3001/khachhang/${customerID}`).then(({ data }) =>
      setCustomerData(data)
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
          tuoi: customerData.tuoi,
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

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const tourData = JSON.parse(localStorage.getItem("bookTourInfor"));
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [value, setValue] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestPosData = JSON.parse(
      window.localStorage.getItem("bookTourPostRequestData")
    );
    const thanhTien = parseInt(requestPosData.thanh_tien.replaceAll('.','').replace('VND',''));
      // ------Stripe==================================================================================================================
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:3001/payment", {
          amount: thanhTien,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          alert("thanh toán online thành công!");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
        alert("thanh toán thất bại");
      }
    } else {
      console.log(error.message);
    }
    //------------------------------------------------------------------------------------------------------------------------------
    // const requestPosData = JSON.parse(
    //   window.localStorage.getItem("bookTourPostRequestData")
    // );

    if (customerData.email !== "") {
      if (customerData.ho_ten !== "") {
        e.preventDefault();
        setLoading(true);
        const email = customerData.email;
        const hoten = customerData.ho_ten;
        const sodienthoai = customerData.sdt;
        const newDate = new Date();
        const ngaydattour =
          newDate.getDate() +
          "/" +
          newDate.getMonth() +
          "/" +
          newDate.getFullYear() +
          " " +
          "-" +
          " " +
          newDate.getHours() +
          ":" +
          newDate.getMinutes() +
          ":" +
          newDate.getSeconds();
        const tongtien = formatPrice(
          parseFloat(tourData.gia.replaceAll(".", "")) +
            parseFloat(tourData.gia.replaceAll(".", "")) * 0.1
        );
        const body = {
          email,
          hoten,
          sodienthoai,
          tongtien,
          ngaydattour,
        };

        axios
          .post("http://localhost:3001/mail", {
            email,
            hoten,
            sodienthoai,
            tongtien,
            ngaydattour,
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
      .post("http://localhost:3001/thanhtoan", requestPosData)
      .then(({ data }) => {
        console.log("data mới tạo: ", data._id);

        const patchDuKhachTour = (idDuKhaches) => {

          // axios
          //   .patch(`http://localhost:3001/tour/${tourData.id}`, {
          //     du_khach: [
          //       ...[...tourData.du_khach].map((item) => item["_id"]),
          //       ...idDuKhaches,
          //     ],
          //   })
          // .then(({ result }) => {

            console.log("id du khách:", ...idDuKhaches);
            axios
            .patch(`http://localhost:3001/thanhtoan/${data._id}`, {
              du_khach: [
                ...idDuKhaches,
              ],
            })
              window.location.href = "http://localhost:3000/ordersuccessful";
            // })
            // .catch((err) => console.log(err));
        };

        axios
          .post(`http://localhost:3001/dukhach`, accompanyData)
          .then(({ data }) => patchDuKhachTour(data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
};

  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#08183c",
        color: "#f97150",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: "#fce883" },
        "::placeholder": { color: "grey" },
      },
      invalid: {
        iconColor: "red",
        color: "red",
      },
    },
  };
// Handle submit 2 ---------------------------------------------------------------------------------------------------------

const handleSubmit1 = async (e) => {
  e.preventDefault();
  const requestPosData = JSON.parse(
    window.localStorage.getItem("bookTourPostRequestData")
  );
  
  if (customerData.email !== "") {
    if (customerData.ho_ten !== "") {
      e.preventDefault();
      setLoading(true);
      const email = customerData.email;
      const hoten = customerData.ho_ten;
      const sodienthoai = customerData.sdt;
      const newDate = new Date();
      const ngaydattour =
        newDate.getDate() +
        "/" +
        newDate.getMonth() +
        "/" +
        newDate.getFullYear() +
        " " +
        "-" +
        " " +
        newDate.getHours() +
        ":" +
        newDate.getMinutes() +
        ":" +
        newDate.getSeconds();
      const tongtien = formatPrice(
        parseFloat(tourData.gia.replaceAll(".", "")) +
          parseFloat(tourData.gia.replaceAll(".", "")) * 0.1
      );
      const body = {
        email,
        hoten,
        sodienthoai,
        tongtien,
        ngaydattour,
      };

      axios
        .post("http://localhost:3001/mail", {
          email,
          hoten,
          sodienthoai,
          tongtien,
          ngaydattour,
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
    .post("http://localhost:3001/thanhtoan", requestPosData)
    .then(({ data }) => {
      console.log("data mới tạo: ", data._id);
      const patchDuKhachTour = (idDuKhaches) => {

        // axios
        //   .patch(`http://localhost:3001/tour/${tourData.id}`, 
        //   {
        //     du_khach: [
        //       ...[...tourData.du_khach].map((item) => item["_id"]),
        //       ...idDuKhaches,
        //     ],
        //   }
        //   )

          // .then(({ result }) => {
          console.log("id du khách:", ...idDuKhaches);
          axios
          .patch(`http://localhost:3001/thanhtoan/${data._id}`, {
            du_khach: [
              ...idDuKhaches,
            ],
          })
            // alert("Đặt tour thành công");
            window.location.href = "http://localhost:3000/ordersuccessful";
          // })
          // .catch((err) => console.log(err));
      };

      axios
        .post(`http://localhost:3001/dukhach`, accompanyData)
        .then(({ data }) => patchDuKhachTour(data))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

//----------------------------------------------------------------------------------------------------------------------

  //User data
  const userData = {};
  //accompany data
  const numberGuest = JSON.parse(
    window.localStorage.getItem("bookTourInfor")
  )?.number;

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
            <form className="pagementContent.form" onSubmit={value === 1? handleSubmit1: handleSubmit}>
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

                {/* <StripeContainer /> */}
                {/* <PaymentForm /> */}

          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value={1}>Thanh toán trực tiếp</Radio>
              <Radio value={2}>
                Thanh toán online
                {value === 2 ? (
                  <Paper elevation={3}>
                    <fieldset
                      className="FormGroup"
                    >
                      <div
                        className="FormRow"
                        style={{width: "500px" }}
                      >
                        <CardElement options={CARD_OPTIONS} />
                      </div>
                    </fieldset>
                  </Paper>
                ) : null}
              </Radio>
            </Space>
          </Radio.Group>


              </SwipeableViews>
              <div className="btn--group">
                <Button
                  disabled={activedStep === 0}
                  onClick={handleButtonBack}
                  variant="contained"
                >
                  Trở về
                </Button>

                {activedStep === 2 ? (
                  <>
                    <Button onClick={value ===1? handleSubmit1 : handleSubmit} variant="contained">
                      Đặt tour
                    </Button>
                  </>
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

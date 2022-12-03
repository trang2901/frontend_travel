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
import { Divider, Row, Col } from "antd";
import {
  Container,
  Paper,
  Card,
  Alert,
  Collapse,
  IconButton,
} from "@mui/material";
import {
  ConstructionOutlined,
  SettingsPowerRounded,
} from "@mui/icons-material";
import { formatPrice } from "../../utils/helpers";
import { ScrollButton } from "../../components";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Formik } from "formik";
import { Radio, Space, Input } from "antd";
import logoStripe from "../../image/stripe.png";
import CloseIcon from "@mui/icons-material/Close";
import { CAlert } from "@coreui/react";
import { set } from "date-fns";

const PaymentContent = () => {
  const [onShowLinkInput, setOnShowLinkInput] = useState(false);
  const [activedStep, setActivedStep] = useState(0);
  const [customerData, setCustomerData] = useState({});
  const [accompanyData, setAccompanyData] = useState([]);
  const tourData = JSON.parse(localStorage.getItem("bookTourInfor"));
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [value, setValue] = useState(1);
  // function tryConvert(money, encode = true) {
  //   const input = parseInt(money);
  //   if (Number.isNaN(input)) {
  //     return '';
  //   }
  //   const currency ="USD";
  //   if (!currency) {
  //     return '';
  //   }
  //   const sellTemp = "24,645";
  //   const sell = parseInt(sellTemp.replace(',', ''))
  //   const output = encode ? input*sell : input/sell;
  //   const rounded = Math.round(output * 1000)/1000;
  //   return rounded.toString();
  // }
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
  const [step, setStep] = useState(0);
  const [acStep, setAcStep] = useState(0);
  useEffect(() => {
    var temp;
    for (let i = 0; i < accompanyData.length; i++) {
      if (accompanyData[i].ho_ten !== "" && accompanyData[i].sdt !== "") {
        temp = 1;
      } else {
        temp = 0;
      }
    }
    setStep(temp);

    var stepTemp;
    if(customerData.ho_ten !== "" && customerData.dia_chi !="" && customerData.email!=="" && customerData.sdt){
      stepTemp = 1;
    }
    else {
      stepTemp = 0;
    }

    setAcStep(stepTemp)
  });

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestPosData = JSON.parse(
      window.localStorage.getItem("bookTourPostRequestData")
    );
    console.log("req:", requestPosData.id_khach_hang);

    const thanhTien = parseInt(
      requestPosData.thanh_tien.replaceAll(".", "").replace("VND", "")
    );

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
          des:
            "Thanh toán cho Khách hàng: " +
            customerData.ho_ten +
            "- Mã hóa đơn:  " +
            requestPosData.id_khach_hang,
        });
        if (response.data.success) {
          console.log("Successful payment");
          alert("thanh toán online thành công!");
          setSuccess(true);

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
              const patchDuKhachTour = (idDuKhaches) => {
                axios
                  .patch(`http://localhost:3001/tour/${tourData.id}`, {
                    du_khach: [
                      ...[...tourData.du_khach].map((item) => item["_id"]),
                      ...idDuKhaches,
                    ],
                  })
                  .then(({ result }) => {
                    axios.patch(`http://localhost:3001/thanhtoan/${data._id}`, {
                      du_khach: [...idDuKhaches],
                      trang_thai_thanh_toan: "Đã thanh toán",
                    });
                    window.location.href =
                      "http://localhost:3000/ordersuccessful";
                  })
                  .catch((err) => console.log(err));
              };

              axios
                .post(`http://localhost:3001/dukhach`, accompanyData)
                .then(({ data }) => patchDuKhachTour(data))
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        }
      } catch (error) {
        console.log("Error", error);
        alert("Thanh toán thất bại");
      }
    } else {
      console.log(error.message);
      alert(error.message);
    }

    // ------Stripe==================================================================================================================

    //------------------------------------------------------------------------------------------------------------------------------
  };
  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#08183c",
        color: "#f97150",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "20px",
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

    axios
          .post("http://localhost:3001/thanhtoan", requestPosData)
          .then(({ data }) => {
            // Gửi email
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

              }
              else {
                alert("Bạn chưa điền họ tên");
              }
            } else {
              alert("Bạn chưa điền email");
            }

            const patchDuKhachTour = (idDuKhaches) => {
              axios
                .patch(`http://localhost:3001/tour/${tourData.id}`, {
                  du_khach: [
                    ...[...tourData.du_khach].map((item) => item["_id"]),
                    ...idDuKhaches,
                  ],
                })
                .then(({ result }) => {
                  console.log("id du khách:", ...idDuKhaches);
                  axios.patch(`http://localhost:3001/thanhtoan/${data._id}`, {
                    du_khach: [...idDuKhaches],
                    trang_thai_thanh_toan: "Chưa thanh toán",
                  });
                  // alert("Đặt tour thành công");
                  window.location.href =
                    "http://localhost:3000/ordersuccessful";
                })
                .catch((err) => console.log(err));
            };

            axios
              .post(`http://localhost:3001/dukhach`, accompanyData)
              .then(({ data }) => patchDuKhachTour(data))
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
  };
  //User data----------------------------------------------------------------------------------------------------------------------
  const userData = {};
  //accompany data
  const numberGuest = JSON.parse(
    window.localStorage.getItem("bookTourInfor")
  )?.number;
  const requestPosDatas = JSON.parse(
    window.localStorage.getItem("bookTourPostRequestData")
  );

  const handleChangeName = (e) => {
    const index = e.target.dataset.index;
    const tempArray = [...accompanyData];
    tempArray[index].ho_ten = e.target.value;
    setAccompanyData(tempArray);
  };

  const handleChangePhone = (e) => {
    const index = e.target.dataset.index;
    const tempArray = [...accompanyData];
    tempArray[index].sdt = e.target.value;
    setAccompanyData(tempArray);
  };
  const handleChangeAge = (e) => {
    const index = e.target.dataset.index;
    const tempArray = [...accompanyData];
    tempArray[index].tuoi = e.target.value;
    setAccompanyData(tempArray);
  };

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
            <form
              className="pagementContent.form"
              onSubmit={value === 1 ? handleSubmit1 : handleSubmit}
            >
              <SwipeableViews index={activedStep} onChangeIndex={handleChange}>
                <UserInfor
                  data={userData}
                  customerData={customerData}
                  setCustomerData={setCustomerData}
                />
                
                {/* accompany info ------------------------------------------------------------------------------------------------------------*/}
                <div>
                <p style={{textAlign: 'center', marginTop: '2rem', marginBottom: '-0.5rem', color: 'grey', fontWeight: '400'}}>Hãy nhập đủ thông tin của từng khách hàng trước khi sang bước kế tiếp!</p>
                <AccompanyInfor
                  onShowLinkInput={onShowLinkInput}
                  setOnShowLink={setOnShowLinkInput}
                  customerData={customerData}
                  numberGuest={numberGuest}
                  accompanyData={accompanyData}
                  setAccompanyData={setAccompanyData}
                />
              </div>  

                {/* end------------------------------------------------------------------------------------------------------------------------ */}
                {/* <StripeContainer /> */}
                {/* <PaymentForm /> */}

                <div className="hinhthucTT">

                
                  <p>CHỌN PHƯƠNG THỨC THANH TOÁN</p>
                  <Container>
                    <label>
                      Chọn một trong hai phương thức thanh toán sau:{" "}
                    </label>
                    <Radio.Group onChange={onChange} value={value}>
                      <Space direction="vertical" style={{ width: "800px" }}>
                        <Radio value={1}>
                          Thanh toán trực tiếp
                          {value === 1 ? (
                            numberGuest > 5 ? (
                              <p>Số lượng kh lớn nên cần cọc 10%</p>
                            ) : null
                          ) : null}
                        </Radio>

                        <Radio value={2}>
                          Thanh toán online
                          {value === 2 ? (
                            <>
                              <Paper
                                sx={{
                                  minWidth: "800px",
                                  background: "#cde1f4",
                                  marginTop: "1rem",
                                }}
                                square="true"
                              >
                                <Row
                                  style={{
                                    marginBottom: "2rem",
                                    marginLeft: "4rem",
                                  }}
                                >
                                  <Col span={18} style={{ marginTop: "3rem" }}>
                                    <label>
                                      Bạn vừa đặt đơn hàng với số tiền là:
                                    </label>
                                    <br />
                                    <label>
                                      <strong>{
                                        requestPosDatas.thanh_tien
                                      }</strong>
                                    </label>{" "}
                                    <br />
                                    <label>
                                    Hãy nhập số thẻ, ngày hết hạn (MM/YY), mã xác minh thẻ (CVC) và mã bưu chính (ZIP) để hoàn tất thanh toán!
                                    </label>
                                    <br />
                                  </Col>
                                  <Col span={6} style={{ marginTop: "5rem" }}>
                                    <img src={logoStripe} />
                                  </Col>
                                </Row>

                                <fieldset>
                                  <div>
                                    <CardElement options={CARD_OPTIONS} />
                                  </div>
                                </fieldset>
                              </Paper>
                            </>
                          ) : null}
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </Container>
                </div>
              </SwipeableViews>
              <div className="btn--group">
                <Button
                  disabled={activedStep === 0}
                  onClick={handleButtonBack}
                  variant="contained"
                  style={{background: '#08183c', color: '#f97150'}}
                >
                  Trở về
                </Button>
                {activedStep === 2 ? (
                  <>
                    <Button
                      onClick={value === 1 ? handleSubmit1 : handleSubmit}
                      variant="contained"
                      style={{background: '#08183c', color: '#f97150'}}
                    >
                      Đặt tour
                    </Button>
                  </>
                ) : 
                activedStep === 1 ? (
                    <Button onClick={handleButtonNext} variant="contained" 
                      disabled= {step ===1? false : true}
                      style={{background: step === 1?'#08183c': 'lightgray', color:step === 1?'#f97150':'darkgray'}}
                    >
                      Tiếp tục
                    </Button>
                ):
                <Button onClick={handleButtonNext} 
                variant="contained"  
                style={{background: acStep === 1?'#08183c': 'lightgray', color: acStep === 1?'#f97150':'darkgray'}}
                disabled = {acStep === 1?false:true}
                >
                Tiếp tục
              </Button>
                
                }
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

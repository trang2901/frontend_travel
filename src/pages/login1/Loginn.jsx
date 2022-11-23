import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { TextField } from "@mui/material";
import { Formik } from "formik";
import axios from "axios";
import { Divider } from "antd";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import CircularProgress from '@mui/material/CircularProgress';
import { Spin } from 'antd';
import isEmpty from "validator/lib/isEmpty";
// import {useHistory} from 'react-router-dom'
import isEmail from "validator/lib/isEmail";
import "./loginn.scss";
import * as Yup from "yup";
const Login = ({ login }) => {
  const [loginOn, setLoginOn] = useState(login);
  const [isSubmit, setIsSubmit] = useState(false);
  useEffect(() => {
    loginOn ? (document.title = "Đăng nhập") : (document.title = "Đăng ký");
  });

  function buttonStyle(primaryColor, secondColor, borderRadius, padding) {
    var obj = {
      padding: padding,
      color: primaryColor,
      background: secondColor,
      borderRadius: borderRadius,
      fontWeight: "bold",
      fontSize: "28px",
      lineHeight: "38px",

      "&:hover": {
        color: primaryColor,
        background: secondColor,
        borderRadius: borderRadius,
        fontWeight: "bold",
        fontSize: "28px",
        lineHeight: "38px",
      },
    };
    return obj;
  }
  const showAlertError = () => {
    <Alert severity="error">
      <AlertTitle>Lỗi</AlertTitle>
      Tài khoản hoặc mật khẩu không đúng — <strong>Hãy kiểm tra lại!</strong>
    </Alert>;
  };
  const createLoginRequest = (values) => {
    const getCustomerID = (accountID) => {
      axios
        .get("http://localhost:3001/khachhang")
        .then(({ data }) => {
          const Data = data.find(
            (customer) => customer.id_tai_khoan?.["_id"] === accountID
          );
          window.sessionStorage.setItem("customerID", Data["_id"]);
          window.location.href = "/";
        });
    };

    axios
      .get(`http://localhost:3001/taikhoan/${values.username}`)
      .then(({ data }) => {
        if (data == null) {
          setIsSubmit(false);
          // showAlertError();
          //     alert(
          //     <Alert severity="error">
          //   <AlertTitle>Lỗi</AlertTitle>
          //   Tài khoản hoặc mật khẩu không đúng — <strong>Hãy kiểm tra lại!</strong>
          // </Alert>)

          alert("Tài khoản hoặc mật khẩu không đúng");
        } else {
          if (data.password === values.password) {
            getCustomerID(data["_id"]);
          }
          //     alert(
          //     <Alert severity="error">
          //   <AlertTitle>Lỗi</AlertTitle>
          //   Mật khẩu không đúng — <strong>Hãy kiểm tra lại!</strong>
          // </Alert>)
          else alert("Mật khẩu không đúng");
        }
      })
      .catch((err) => console.log(err));
  };

  const createRegisterRequest = (values) => {
    axios
      .post("http://localhost:3001/taikhoan", {
        username: values.username,
        password: values.password,
      })
      .then(({ data }) => {
        axios
          .post("http://localhost:3001/khachhang", {
            id_tai_khoan: data,
          })
          .then(({ data }) => {
            window.sessionStorage.setItem("customerID", data._id);
            window.location.href = "/";
          });
      })
      .catch((err) => console.log(err));
  };
  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Tên người dùng không hợp lệ")
      .required("Đây là trường bắt buộc"),
  });

  const renderForm = () => (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = " ";
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = "Email không đúng định dạng";
        //   }
        //   return errors;
        // }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setIsSubmit(true);
            if (loginOn) createLoginRequest(values);
            else createRegisterRequest(values);
          });
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <>
            {/* <form className="form" onSubmit={handleSubmit}>
              <TextField
                type="text"
                name="username"
                variant="standard"
                label="Tên người dùng"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              
              <p
                style={{ color: "red", fontStyle: "italic", fontSize: "14px" }}
              >
                {errors.username && touched.username && errors.username}
              </p>
              <TextField
                type="password"
                name="password"
                label="Mật khẩu"
                variant="standard"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
        
              <p></p>
              <p></p>
              
              {isSubmit ? (
                <LoadingButton
                  sx={{ padding: "16px 0" }}
                  loading
                  variant="outlined"
                ></LoadingButton>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  sx={{
                    color: "#f97150",
                    background: "#08183c",
                    "&:hover": {
                      color: "#f97150",
                      background: "#08183c",
                    },
                  }}
                >
                  {loginOn ? "Đăng nhập" : "Đăng ký"}
                </Button>
              )}
              <p></p>
                </form> */}
            <div className="wrapper1">
              <form className="p-3 mt-3" onSubmit={handleSubmit}>
                <div className="form-field d-flex align-items-center">
                  <span className="far fa-user"></span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Tên đăng nhập"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                </div>
                <div className="form-field d-flex align-items-center">
                  <span className="fas fa-key"></span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Mật khẩu"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </div>
                {isSubmit ? (
                  <div style={{textAlign: 'center'}}>
                   {/* <LoadingButton
                   sx={{ padding: "16px 0" }}
                  loading
                  variant="outlined"
                  // width='100%'
                  ></LoadingButton> */}
                  {/* <CircularProgress size={25}/> */}
                  <Spin size={25} />

                  </div>
                ) : (
                  <div style={{textAlign: 'center'}}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    sx={{
                      color: "#f97150",
                      background: "#08183c",
                      "&:hover": {
                        color: "#f97150",
                        background: "#08183c",
                      },
                      width: '100%'
                      
                    }}
                    style={{borderRadius: '30px'}}
                  >
                    {loginOn ? "Đăng nhập" : "Đăng ký"}
                  </Button>
                  </div>
                )}
                <p style={{textAlign:'center', marginTop: '1rem'}}>Bạn chưa có tài khoản? <a href='/signup'><strong style={{color: 'blue'}}>Đăng ký</strong></a></p>
              </form>
            </div>
          </>
        )}
      </Formik>
    </>
  );

  return (
    <div className="login">
      <div className="login--form">
        <div className="button--group">
          <Button
            onClick={() => setLoginOn(true)}
            sx={buttonStyle("#f97150", "12px 0", "1rem 0")}
            style={{ marginTop: "10px" }}
          >
            Đăng nhập
          </Button>
        </div>
        <Divider style={{ borderColor: "#08183c", borderWidth: "2px" }} />
        {renderForm()}
      </div>

      {/* <div className="authentication--section">
        <Button
          variant="outlined"
          sx={{
            color: "#08183c",
            borderColor: "#f97150",
            "&:hover": {
              color: "#08183c",
              borderColor: "#08183c",
            },
          }}
        >
          Facebook
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#f97150",

            borderColor: "#08183c ",
            "&:hover": {
              color: "#08183c",
              borderColor: "#f97150",
            },
          }}
        >
          Google
        </Button>
      </div> */}
    </div>
  );
};

export default Login;

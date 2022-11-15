import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { TextField } from "@mui/material";
import { Formik } from "formik";
import axios from "axios";
import { Divider } from "antd";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import isEmpty from "validator/lib/isEmpty"
// import {useHistory} from 'react-router-dom'
import isEmail from "validator/lib/isEmail"
import './loginn.scss'
import * as Yup from 'yup';
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
      </Alert>
  }
  const createLoginRequest = (values) => {
    const getCustomerID = (accountID) => {
      axios
        .get("https://tourapi-dev-n.herokuapp.com/khachhang")
        .then(({ data }) => {
          const Data = data.find(
            (customer) => customer.id_tai_khoan?.["_id"] === accountID
          );
          window.sessionStorage.setItem("customerID", Data["_id"]);
          window.location.href = "/";
        });
    };

    axios
      .get(`https://tourapi-dev-n.herokuapp.com/taikhoan/${values.username}`)
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
          } else 
      //     alert(
      //     <Alert severity="error">
      //   <AlertTitle>Lỗi</AlertTitle>
      //   Mật khẩu không đúng — <strong>Hãy kiểm tra lại!</strong>
      // </Alert>)
          alert("Mật khẩu không đúng");
        }
      })
      .catch((err) => console.log(err));
  };

  const createRegisterRequest = (values) => {
    axios
      .post("https://tourapi-dev-n.herokuapp.com/taikhoan", {
        username: values.username,
        password: values.password,
      })
      .then(({ data }) => {
        axios
          .post("https://tourapi-dev-n.herokuapp.com/khachhang", {
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
    username : Yup.string()
    .min(2, 'Tên người dùng không hợp lệ')
    .required('Đây là trường bắt buộc')
    
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
          <form className="form" onSubmit={handleSubmit}>
            <TextField
              type="text"
              name="username"
              variant="standard"
              label="Tên người dùng"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            {/* <p className="text-red-400 text-xs italic">{validationMsg.email}</p> */}
            <p style={{color: 'red', fontStyle: 'italic',fontSize:'14px' }}>{errors.username && touched.username && errors.username}</p>
            <TextField
              type="password"
              name="password"
              label="Mật khẩu"
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {/* <p className="text-red-400 text-xs italic">{validationMsg.password}</p> */}
            <p></p><p></p>
            {/* {errors.password && touched.password && errors.password} */}
            {/* <Button
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
                ĐĂNG NHẬP
              </Button> */}
              {/* <p></p> */}
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
          </form>
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
                style= {{marginTop: '10px'}}
                
              >
                Đăng nhập
              </Button> 
              
          
        </div>
        <Divider 
             style={{borderColor: '#08183c', borderWidth: '2px'}}
             
             />
        {renderForm()}
      </div>

      <div className="authentication--section">
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
        <Button variant="outlined"
        sx={{
          color: "#f97150",
          
          borderColor: "#08183c ",
          "&:hover": {
            color: "#08183c",
            borderColor: "#f97150",
          },
        }}
        >
          Google</Button>
      </div>
    </div>
  );
};

export default Login;

import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { TextField } from "@mui/material";
import { Formik } from "formik";
import axios from "axios";
import { Divider } from "antd";

const Signup = ({ login }) => {
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

  const createLoginRequest = (values) => {
    const getCustomerID = (accountID) => {
      axios
        .get("https://tour-api-dev.herokuapp.com/khachhang")
        .then(({ data }) => {
          const Data = data.find(
            (customer) => customer.id_tai_khoan?.["_id"] === accountID
          );
          window.sessionStorage.setItem("customerID", Data["_id"]);
          window.location.href = "/";
        });
    };

    axios
      .get(`https://tour-api-dev.herokuapp.com/taikhoan/${values.email}`)
      .then(({ data }) => {
        if (data == null) {
          setIsSubmit(false);
          alert("Tài khoản hoặc mật khẩu không đúng");
        } else {
          if (data.password === values.password) {
            getCustomerID(data["_id"]);
          } else alert("Mật khẩu không đúng");
        }
      })
      .catch((err) => console.log(err));
  };

  const createRegisterRequest = (values) => {
    axios
      .post("https://tour-api-dev.herokuapp.com/taikhoan", {
        username: values.email,
        password: values.password,
      })
      .then(({ data }) => {
        axios
          .post("https://tour-api-dev.herokuapp.com/khachhang", {
            id_tai_khoan: data,
          })
          .then(({ data }) => {
            window.sessionStorage.setItem("customerID", data._id);
            window.location.href = "/";
          });
      })
      .catch((err) => console.log(err));
  };

  const renderForm = () => (
    <>
    
      <Formik
        initialValues={{ email: "", password: "" }}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = "Required";
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = "Invalid email address";
        //   }
        //   return errors;
        // }}
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
              name="email"
              variant="standard"
              label="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {/* {errors.email && touched.email && errors.email} */}
            <TextField
              type="password"
              name="password"
              label="Mật khẩu"
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
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
                ĐĂNG KÝ
              </Button>
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
                onClick={() => setLoginOn(false)}
                sx={buttonStyle("#f97150", "#fff", "0 12px", "1rem 0")}
              >
                Đăng ký
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

export default Signup;
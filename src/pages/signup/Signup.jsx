import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { TextField } from "@mui/material";
import { Formik } from "formik";
import axios from "axios";
import { Divider } from "antd";
import "./signup.scss";
import Validator from "../../utils/Validator";
import * as Yup from "yup";
import { ScrollButton } from "../../components";
import {CircularProgress} from "@mui/material";
import { Spin } from 'antd';
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
      .post("http://localhost:3001/taikhoan", {
        username: values.username,
        password: values.password,
        diachi: values.diachi,
        hoten: values.hoten,
        sodienthoai: values.sodienthoai,
        email: values.email,
      })
      // console.log('thành công!!!!!!!')
      .then(({ data }) => {
        // console.log(data);
        axios
          .post("http://localhost:3001/khachhang", {
            id_tai_khoan: data,
            ho_ten: data.hoten,
            dia_chi: data.diachi,
            sdt: data.sodienthoai,
            email: data.email,
            tuoi: values.tuoi,
            tendoanhnghiep: values.tendoanhnghiep,
            masothuedoanhnghiep: values.masothuedoanhnghiep
          })

          .then(({ data }) => {
            window.sessionStorage.setItem("customerID", data._id);
            window.location.href = "/";
          });
      })
      .catch((err) => console.log(err));
  };

  const SignupSchema = Yup.object().shape({
    hoten: Yup.string()
      .min(2, "Họ tên quá ngắn")
      .required("Đây là trường bắt buộc"),
    diachi: Yup.string()
      .min(2, "Địa chỉ quá ngắn")
      .required("Đây là trường bắt buộc"),
    email: Yup.string().email("Invalid email").required("Required"),
    username: Yup.string()
      .min(2, "Tên người dùng không hợp lệ")
      .required("Đây là trường bắt buộc"),
    sodienthoai: Yup.string()
      .min(10, "Số điện thoại không hợp lệ")
      .max(10, "Số điện thoại không hợp lệ")
      .required("Đây là trường bắt buộc"),
    tuoi: Yup.string()
      .min(1, "Tuổi")
      .max(2, "")
      .required("Đây là trường bắt buộc"),
  });

  const renderForm = () => (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
          diachi: "",
          hoten: "",
          sodienthoai: "",
          tuoi: "",
          tendoanhnghiep: "",
          masothuedoanhnghiep: ""
        }}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.email && !values.hoten) {
        //     errors.email = " ";
        //     errors.hoten=" ";
        //   } else
        //   if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email),
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.hoten)
        //   )
        //   {
        //     errors.email = "Email không đúng định dạng";
        //     errors.hoten = "Họ tên không được rỗng"
        //   }
        //   return errors;
        // }}
        validationSchema={SignupSchema}
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
            <div
              className="card shadow-2-strong card-registration"
              style={{
                background: "none",
                marginTop: "-1.5rem",
                border: "none",
              }}
            >
              <div className="card-body p-4 p-md-5">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="hoten">
                          Họ và tên <sup style={{ color: "red" }}>*</sup>
                        </label>
                        <input
                          type="text"
                          id="hoten"
                          className="form-control form-control-lg"
                          name="hoten"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.hoten}
                        />
                        <p
                          style={{
                            color: "red",
                            fontStyle: "italic",
                            fontSize: "12px",
                          }}
                        >
                          {errors.hoten && touched.hoten && errors.hoten}
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" for="tuoi">
                          Tuổi <sup style={{ color: "red" }}>*</sup>
                        </label>
                        <input
                          type="text"
                          id="tuoi"
                          className="form-control form-control-lg"
                          name="tuoi"
                
                         onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.tuoi}
                        />
                         <p
                style={{ color: "red", fontStyle: "italic", fontSize: "12px" }}
              >
                {errors.tuoi && touched.tuoi && errors.tuoi}
              </p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 mb-4 d-flex align-items-center">
                      <div className="form-outline datepicker w-100">
                        <label for="diachi" className="form-label">
                          Địa chỉ <sup style={{ color: "red" }}>*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="diachi"
                          name="diachi"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.diachi}
                        />
                        <p
                          style={{
                            color: "red",
                            fontStyle: "italic",
                            fontSize: "12px",
                          }}
                        >
                          {errors.diachi && touched.diachi && errors.diachi}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" for="email">
                          Email <sup style={{ color: "red" }}>*</sup>
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        <p
                          style={{
                            color: "red",
                            fontStyle: "italic",
                            fontSize: "12px",
                          }}
                        >
                          {errors.email && touched.email && errors.email}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" for="sodienthoai">
                          Số điện thoại <sup style={{ color: "red" }}>*</sup>
                        </label>
                        <input
                          type="text"
                          id="sodienthoai"
                          className="form-control form-control-lg"
                          name="sodienthoai"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.sodienthoai}
                        />
                        <p
                          style={{
                            color: "red",
                            fontStyle: "italic",
                            fontSize: "12px",
                          }}
                        >
                          {errors.sodienthoai &&
                            touched.sodienthoai &&
                            errors.sodienthoai}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" for="username">
                          Tên đăng nhập <sup style={{ color: "red" }}>*</sup>
                        </label>
                        <input
                          type="text"
                          id="username"
                          className="form-control form-control-lg"
                          name="username"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.username}
                        />
                        <p
                          style={{
                            color: "red",
                            fontStyle: "italic",
                            fontSize: "12px",
                          }}
                        >
                          {errors.username &&
                            touched.username &&
                            errors.username}
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" for="password">
                          Mật khẩu <sup style={{ color: "red" }}>*</sup>
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        <p
                          style={{
                            color: "red",
                            fontStyle: "italic",
                            fontSize: "12px",
                          }}
                        >
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" for="tendoanhnghiep">
                          Tên doanh nghiệp 
                        </label>
                        <input
                          type="text"
                          id="tendoanhnghiep"
                          className="form-control form-control-lg"
                          name="tendoanhnghiep"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.tendoanhnghiep}
                        />
                      </div>
                    </div>

                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" for="masothuedoanhnghiep">
                          Mã số thuế doanh nghiệp
                        </label>
                        <input
                          type="text"
                          id="masothuedoanhnghiep"
                          className="form-control form-control-lg"
                          name="masothuedoanhnghiep"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.masothuedoanhnghiep}
                        />
                      </div>
                    </div>


                  </div>

                  <div className="mt-4 pt-2">
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
                          width: "100%",
                        }}
                      >
                        {loginOn ? "Đăng nhập" : "ĐĂNG KÝ"}
                      </Button>
                    )}
                    <p style={{textAlign:'center', marginTop: '1rem'}}>Bạn đã có tài khoản? <a href='/login'><strong style={{color: 'blue'}}>Đăng nhập</strong></a></p>
                  </div>
                </form>
              </div>
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
            onClick={() => setLoginOn(false)}
            sx={buttonStyle("#f97150", "0 12px", "1rem 0")}
            style={{ marginTop: "10px" }}
          >
            Đăng ký
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
      <ScrollButton />
    </div>
  );
};

export default Signup;

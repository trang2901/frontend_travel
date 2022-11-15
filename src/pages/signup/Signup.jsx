import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { TextField } from "@mui/material";
import { Formik } from "formik";
import axios from "axios";
import { Divider } from "antd";
import './signup.scss'
import Validator from "../../utils/Validator";
import * as Yup from 'yup';
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
      .post("https://tourapi-dev-n.herokuapp.com/taikhoan", 
      {
        username: values.username,
        password: values.password,
        diachi: values.diachi,
        hoten: values.hoten,
        sodienthoai: values.sodienthoai,
        email: values.email
      })
      // console.log('thành công!!!!!!!')
      .then(({ data }) => {
        // console.log(data);
        axios
          .post("https://tourapi-dev-n.herokuapp.com/khachhang", {
            id_tai_khoan: data,
            ho_ten: data.hoten,
            dia_chi: data.diachi,
            sdt: data.sodienthoai,
            email: data.email

          })
         
          .then(({ data }) => {
            window.sessionStorage.setItem("customerID", data._id);
            window.location.href = "/";
          });
      })
      .catch((err) => console.log(err));
  }

  const SignupSchema = Yup.object().shape({
    hoten: Yup.string()
      .min(2, 'Họ tên quá ngắn')
      .required('Đây là trường bắt buộc'),
    diachi: Yup.string()
      .min(2, 'Địa chỉ quá ngắn')
      .required('Đây là trường bắt buộc'),
    email: Yup.string().email('Invalid email').required('Required'),
    username : Yup.string()
    .min(2, 'Tên người dùng không hợp lệ')
    .required('Đây là trường bắt buộc'),
    sodienthoai: Yup.string()
      .min(10, 'Số điện thoại không hợp lệ')
      .max(10, 'Số điện thoại không hợp lệ')
      .required('Đây là trường bắt buộc'),
    
  });
 

  const renderForm = () => (
    <>
      <Formik
        initialValues={{ username: "", password: "", diachi: "", hoten: "", sodienthoai: "" }}
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
            else 
            createRegisterRequest(values);
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
              name="hoten"
              variant="standard"
              label="Họ tên"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.hoten}
            />
           <p style={{color: 'red', fontStyle: 'italic',fontSize:'12px' }}>{errors.hoten && touched.hoten && errors.hoten}</p>
            <p></p>
            <TextField
              type="text"
              name="diachi"
              variant="standard"
              label="Địa chỉ"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.diachi}
            />
           <p style={{color: 'red', fontStyle: 'italic',fontSize:'12px' }}>{errors.diachi && touched.diachi && errors.diachi}</p>
            <p>
            </p>
            <TextField
              type="text"
              name="sodienthoai"
              variant="standard"
              label="Số điện thoại"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.sodienthoai}
            />
             <p style={{color: 'red', fontStyle: 'italic',fontSize:'12px' }}>{errors.sodienthoai && touched.sodienthoai && errors.sodienthoai}</p>
            <p></p>
            <TextField
              type="text"
              name="email"
              variant="standard"
              label="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
             <p style={{color: 'red', fontStyle: 'italic',fontSize:'12px' }}>{errors.email && touched.email && errors.email}</p>
            <p></p>
            <TextField
              type="text"
              name="username"
              variant="standard"
              label="Username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
             <p style={{color: 'red', fontStyle: 'italic',fontSize:'12px' }}>{errors.username && touched.username && errors.username}</p>
            <p></p>
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
            <p></p>
            <p></p>
            <p></p>
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
              <p></p> <p></p>
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
                sx={buttonStyle("#f97150", "0 12px", "1rem 0")}
                style= {{marginTop: '10px'}}
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
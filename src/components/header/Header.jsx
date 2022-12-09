import * as React from "react";
import { useState, useLayoutEffect, useContext } from "react";
import "./header.scss";
import { LoginContext } from "../../LoginContext";
import { Button, Grid, Stack, Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
import { Row, Col } from "antd";
import logo from "../../image/DORIS_TOURS.png";
import { red } from "@mui/material/colors";
import axios from "axios";
import { useEffect } from "react";

const Header = () => {
  const customerID = useContext(LoginContext);
  const [customerName, setCustomerName] = useState("");
  const [menuOn, setMenuOn] = useState(false);
  // const vitri = customerName.charAt(0);
    useEffect(() => {
        axios(
          `http://localhost:3001/khachhang/${customerID}`
        ).then(({ data }) =>setCustomerName(data.ho_ten));
      }, []);

    let navigate = useNavigate();
  function buttonStyle(primaryColor, secondColor) {
    var obj = {
      backgroundColor: `${primaryColor}`,
      color: `${secondColor}`,
      "&:hover": {
        backgroundColor: `${primaryColor}`,
        opacity: 0.6,
      },
    };
    return obj;
  }

  return (
    <>
      <div>
        <div className="header-blue">
          <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
            <div className="container-fluid">
              <a
                className="navbar-brand"
                href="/"
                style={{
                  color: "#f97150",
                  fontWeight: "bold",
                  fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                }}
              >
                DẾ MÈN TOURS{" "}
              </a>
              <button
                data-toggle="collapse"
                className="navbar-toggler"
                data-target="#navcol-1"
              ></button>

              <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="nav navbar-nav">
                  {/* TRANG CHỦ Ở ĐÂY ========================================================================*/}
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      href="/"
                      style={{
                        color: "#f97150",
                        fontWeight: "bold",
                        fontFamily:
                          "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                        letterSpacing: "0.5px",
                      }}
                    >
                      <i className="fa-solid fa-house"></i> TRANG CHỦ
                    </a>
                  </li>

                  {/* <li className="nav-item" role="presentation"><a className="nav-link" href="/home" style={{fontSize: '13px',color: '#f97150', fontWeight: 'bold', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', letterSpacing: '0.5px'}}>TOUR TRONG NƯỚC</a></li> */}
                  {/* <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Tour Trong Nước</a>
                                        <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">Logo design</a><a className="dropdown-item" role="presentation" href="#">Banner design</a><a className="dropdown-item" role="presentation" href="#">content writing</a></div>
                                    </li>
                                    <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Tour Nước Ngoài</a>
                                        <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">Logo design</a><a className="dropdown-item" role="presentation" href="#">Banner design</a><a className="dropdown-item" role="presentation" href="#">content writing</a></div>
                                    </li> */}
                  {/* TOUR TRONG NƯỚC Ở ĐÂY=======================================================================================*/}
                  <li className="nav-item dropdown">
                    <a
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      href="/home"
                      style={{
                        color: "#f97150",
                        fontWeight: "bold",
                        fontFamily:
                          "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                        letterSpacing: "0.5px",
                      }}
                    >
                      DU LỊCH
                    </a>

                    <div className="dropdown-menu" role="menu">
                      <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="/tourMB"
                          >
                            TOUR MIỀN BẮC
                          </a>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="/tourMT"
                          >
                            TOUR MIỀN TRUNG
                          </a>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="/tourMTNB"
                          >
                            TOUR MIỀN TÂY NAM BỘ
                          </a>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="/tourMDNB"
                          >
                            TOUR MIỀN ĐÔNG NAM BỘ
                          </a>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="/home"
                            style={{
                              color: "#08183c",
                              textAlign: "right",
                              textDecoration: "underline",
                            }}
                          >
                            Xem tất cả
                          </a>
                        </Col>
                      </Row>
                    </div>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      href="/aboutus"
                      style={{
                        color: "#f97150",
                        fontWeight: "bold",
                        fontFamily:
                          "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                        letterSpacing: "0.5px",
                      }}
                    >
                      GIỚI THIỆU
                    </a>
                  </li>
                </ul>
                <span style={{ width: "500px" }}></span>

                {customerID ? (
                  <>
                    {/* <Link to="/customer">
                        <AccountCircleIcon sx={{ marginRight: "2px" }} >
                        <Avatar style={{ backgroundColor: "darkblue" }}>
                        </Avatar>
                        </AccountCircleIcon>  
                    </Link> */}
                    <div class="dropdown">
                     <button style={{background: 'none', color: '#f97150'}}>
                      <AccountCircleIcon sx={{ marginRight: "2px", fontSize: '40px' }} >
                        <Avatar style={{ backgroundColor: "darkblue" }}>
                        </Avatar>
                       
                      </AccountCircleIcon> 
                      </button>
                      <div class="dropdown-content">
                        <a href="/customer"><i className="fa-solid fa-user" ></i> {" "} Thông tin tài khoản</a>
                        <a href="/customer/bookedTour"><i className="fa-solid fa-list"> {" "} </i> Đơn đã đặt</a>
                        <a href="#" onClick={() => {
                        window.sessionStorage.clear();
                        window.location.reload();
                      }}>Đăng xuất <i className="fa-solid fa-arrow-right-from-bracket" ></i></a>
                      </div>
                    </div>
                    <label style={{color: '#f97150', fontSize: '18px', fontWeight: 'bold', marginLeft: '0.3rem'}}>
                    {
                      customerName
                    }</label>
                    {/* <Button
                      style={{
                        color: "#f97150",
                        fontWeight: "bold",
                        fontFamily:
                          "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                        letterSpacing: "0.5px",
                      }}
                      onClick={() => {
                        window.sessionStorage.clear();
                        window.location.reload();
                      }}
                    >
                      ĐĂNG XUẤT
                    </Button> */}
                     {
                     }
                  </>
                ) : (
                  <>
                    <span className="navbar-text">
                      <a
                        className="login"
                        href="/login"
                        style={{
                          color: "#f97150",
                          fontWeight: "bold",
                          fontFamily:
                            "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                          letterSpacing: "0.5px",
                        }}
                      >
                        ĐĂNG NHẬP
                      </a>
                    </span>
                    <a
                      className="btn btn-light action-button"
                      role="button"
                      href="/signup"
                      style={{
                        borderColor: "#f97150",
                        color: "#f97150",
                        fontWeight: "bold",
                        fontFamily:
                          "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                        letterSpacing: "0.5px",
                      }}
                    >
                      ĐĂNG KÝ
                    </a>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;

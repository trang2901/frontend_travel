import * as React from "react";
import { useState, useLayoutEffect, useContext } from "react";
import "./header.css";
import { LoginContext } from "../../LoginContext";
import { Button, Grid, Stack, Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
import { Row, Col } from "antd";
import logo from "../../image/DORIS_TOURS.png";
import { red } from "@mui/material/colors";
const Header = () => {
  const customerID = useContext(LoginContext);
  const [customerName, setCustomerName] = useState("");

  // const vitri = customerName.charAt(0);

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
                            style={{color: '#08183c', textAlign: 'right', textDecoration: 'underline'}}
                          >
                            Xem tất cả
                          </a>
                        </Col>
                        {/* <Col className="gutter-row" span={6}>
                          
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                          >
                            
                          </a>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                          >
                            Du lịch Quảng Trị
                          </a>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                          >
                            Du lịch Quảng Bình
                          </a>
                          
                        </Col>
                        <Col className="gutter-row" span={6}>
                        
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                          >
                            Du lịch Phú Quốc
                          </a>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                          >
                            Du lịch Tiền Giang
                          </a>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                          >
                            Du lịch Cần Thơ
                          </a>
                          
                        </Col>
                        <Col className="gutter-row" span={6}>
                        
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                          >
                           Du lịch Đồng Nai
                          </a>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                          >
                            Du lịch Bà Rịa - Vũng Tàu
                          </a>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                          >
                            Du lịch TP.Hồ Chí Minh
                          </a>
                          
                        </Col> */}
                      </Row>
                    </div>
                    
                  </li>


                  {/* TOUR NƯỚC NGOÀI Ở ĐÂY =======================================================================================*/}
                  {/* <li className="nav-item dropdown">
                    <a
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                      style={{
                        color: "#f97150",
                        fontWeight: "bold",
                        fontFamily:
                          "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                        letterSpacing: "0.5px",
                      }}
                    >
                      TOUR NƯỚC NGOÀI
                    </a>
                    <div className="dropdown-menu" role="menu">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                            style={{ color: "#08183c", fontWeight: "bold" }}
                          >
                            TOUR MIỀN BẮC
                          </a>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                          >
                            Du lịch Hà Nội
                          </a>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                          >
                            Du lịch Hải Phòng
                          </a>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                          >
                            Du lịch Hạ Long
                          </a>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                            style={{color: "#08183c", fontWeight: "bold", fontStyle: 'italic', textDecoration: 'underline' }}
                          >
                            Xem tất cả
                          </a>
                        </Col>
                        <Col className="gutter-row" span={6}>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                            style={{ color: "#08183c", fontWeight: "bold" }}
                          >
                            TOUR MIỀN TRUNG
                          </a>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                          >
                            Du lịch Huế
                          </a>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                          >
                            Du lịch Quảng Trị
                          </a>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                          >
                            Du lịch Quảng Bình
                          </a>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                            style={{color: "#08183c", fontWeight: "bold", fontStyle: 'italic', textDecoration: 'underline' }}
                          >
                            Xem tất cả
                          </a>
                        </Col>
                        
                        
                      </Row>
                    </div>
                  </li> */}

                  {/* <li className="nav-item dropdown">
                    <a
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                      style={{
                        fontSize: "13px",
                        color: "#f97150",
                        fontWeight: "bold",
                        fontFamily:
                          "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                        letterSpacing: "0.5px",
                      }}
                    >
                      MIỀN TÂY NAM BỘ
                    </a>
                    <div className="dropdown-menu" role="menu">
                      <a className="dropdown-item" role="presentation" href="#">
                        Logo design
                      </a>
                      <a className="dropdown-item" role="presentation" href="#">
                        Banner design
                      </a>
                      <a className="dropdown-item" role="presentation" href="#">
                        content writing
                      </a>
                    </div>
                  </li> */}
                  {/* <li className="nav-item dropdown">
                    <a
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                      style={{
                        fontSize: "13px",
                        color: "#f97150",
                        fontWeight: "bold",
                        fontFamily:
                          "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                        letterSpacing: "0.5px",
                      }}
                    >
                      MIỀN ĐÔNG NAM BỘ
                    </a>
                    <div className="dropdown-menu" role="menu">
                      <a className="dropdown-item" role="presentation" href="#">
                        Logo design
                      </a>
                      <a className="dropdown-item" role="presentation" href="#">
                        Banner design
                      </a>
                      <a className="dropdown-item" role="presentation" href="#">
                        content writing
                      </a>
                    </div>
                  </li> */}
                  {/* GIỚI THIỆU Ở ĐÂY================================================================================================ */}
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
                  {/* TIN TỨC Ở ĐÂY======================================================================================================== */}
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      href="/blog"
                      style={{
                        color: "#f97150",
                        fontWeight: "bold",
                        fontFamily:
                          "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                        letterSpacing: "0.5px",
                      }}
                    >
                      CẨM NANG DU LỊCH
                    </a>
                  </li>
                </ul>
                <span style={{width: '400px'}}></span>
                
                {customerID ? (
                  <>
                    <Link to="/customer">
                      {/* <Button variant="contained"> */}
                      <Avatar style={{ backgroundColor: "darkblue" }}>
                        <AccountCircleIcon sx={{ marginRight: "2px" }} />
                      </Avatar>
                      {/* </Button> */}
                    </Link>

                    <Button
                      // className="button_custom"
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
                    </Button>
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

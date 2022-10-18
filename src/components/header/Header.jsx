import * as React from "react";
import { useState, useLayoutEffect, useContext} from "react";
import './header.css'
import { LoginContext } from "../../LoginContext";
import { Button, Grid,Stack, Avatar  } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
import {Row} from "antd"
import logo from "../../image/DORIS_TOURS.png"
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
                        <div className="container-fluid"><a className="navbar-brand" href="/" style={{color: '#f97150', fontWeight: 'bold', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'}}>DORIS TOURS </a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"></button>
                           
                            <div className="collapse navbar-collapse" id="navcol-1">
                                <ul className="nav navbar-nav">
                                    <li className="nav-item" role="presentation"><a className="nav-link" href="/" style={{color: '#f97150', fontWeight: 'bold', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', letterSpacing: '0.5px'}}><i class="fa-solid fa-house"></i> TRANG CHỦ</a></li>
                                    <li className="nav-item" role="presentation"><a className="nav-link" href="/aboutus" style={{color: '#f97150', fontWeight: 'bold', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', letterSpacing: '0.5px'}}>GIỚI THIỆU</a></li>
                                    <li className="nav-item" role="presentation"><a className="nav-link" href="/home" style={{color: '#f97150', fontWeight: 'bold', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', letterSpacing: '0.5px'}}>TOUR TRONG NƯỚC</a></li>
                                    <li className="nav-item" role="presentation"><a className="nav-link" href="/home" style={{color: '#f97150', fontWeight: 'bold', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', letterSpacing: '0.5px'}}>TOUR NƯỚC NGOÀI</a></li>
                                    {/* <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Tour Trong Nước</a>
                                        <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">Logo design</a><a className="dropdown-item" role="presentation" href="#">Banner design</a><a className="dropdown-item" role="presentation" href="#">content writing</a></div>
                                    </li>
                                    <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Tour Nước Ngoài</a>
                                        <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">Logo design</a><a className="dropdown-item" role="presentation" href="#">Banner design</a><a className="dropdown-item" role="presentation" href="#">content writing</a></div>
                                    </li> */}
                                    {/* <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Contact</a>
                                        <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">Logo design</a><a className="dropdown-item" role="presentation" href="#">Banner design</a><a className="dropdown-item" role="presentation" href="#">content writing</a></div>
                                    </li> */}
                                    <li className="nav-item" role="presentation"><a className="nav-link" href="/blog" style={{color: '#f97150', fontWeight: 'bold', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', letterSpacing: '0.5px'}}>TIN TỨC</a></li>
                                </ul>
                                <form className="form-inline mr-auto" target="_self">
                                    <div className="form-group"><label for="search-field"><i className="fa fa-search" style={{color: '#f97150'}}></i></label><input className="form-control search-field" type="search" id="search-field" name="search" style={{color: '#f97150'}} /></div>
                                </form>
                                
                                    {customerID ? (
                                        <>
                                            <Link to="/customer">
                                                {/* <Button variant="contained"> */}
                                                    <Avatar style={{backgroundColor: 'darkblue'}}>
                                                    <AccountCircleIcon sx={{ marginRight: "2px" }} />
                                                    {customerName}
                                                    {/* <label>{vitri}</label> */}
                                                    </Avatar>
                                                {/* </Button> */}
                                            </Link>
                                            
                                            <Button
                                            // className="button_custom"
                                            style={{color: '#f97150', 
                                            fontWeight: 'bold', 
                                            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', 
                                            letterSpacing: '0.5px'}}    
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
                                    <a className="login" href="/login" style={{color: '#f97150', fontWeight: 'bold', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', letterSpacing: '0.5px'}} >ĐĂNG NHẬP</a></span>
                                    <a className="btn btn-light action-button" role="button" href="/signup" style={{borderColor: '#f97150', color: '#f97150', fontWeight: 'bold', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', letterSpacing: '0.5px'}}>ĐĂNG KÝ</a>
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
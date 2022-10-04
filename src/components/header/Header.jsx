import * as React from "react";
import { useState, useLayoutEffect, useContext } from "react";
import './header.css'
import { LoginContext } from "../../LoginContext";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
import Banner1 from "../banner1/Banner1"
const Header = () => {
    const customerID = useContext(LoginContext);
    const [customerName, setCustomerName] = useState("");
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
                        <div className="container-fluid"><a className="navbar-brand" href="/">.travelwoVi</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                            <div className="collapse navbar-collapse" id="navcol-1">
                                <ul className="nav navbar-nav">
                                    <li className="nav-item" role="presentation"><a className="nav-link" href="/">Home</a></li>
                                    <li className="nav-item" role="presentation"><a className="nav-link" href="/aboutus">About Us</a></li>
                                    <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Contact</a>
                                        <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">Logo design</a><a className="dropdown-item" role="presentation" href="#">Banner design</a><a className="dropdown-item" role="presentation" href="#">content writing</a></div>
                                    </li>
                                </ul>
                                <form className="form-inline mr-auto" target="_self">
                                    <div className="form-group"><label for="search-field"><i className="fa fa-search text-black"></i></label><input className="form-control search-field" type="search" id="search-field" name="search" /></div>
                                </form>
                                
                                    {customerID ? (
                                        <>
                                            <Link to="/customer">
                                                <Button variant="contained">
                                                    <AccountCircleIcon sx={{ marginRight: "2px" }} />
                                                    {customerName}
                                                </Button>
                                            </Link>
                                            <Button
                                                sx={buttonStyle("#fff", "#3075C6")}
                                                onClick={() => {
                                                    window.sessionStorage.clear();
                                                    window.location.reload();
                                                }}
                                            >
                                                Log out
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                        <span className="navbar-text">
                                    <a className="login" href="/login">Log In</a></span>
                                    <a className="btn btn-light action-button" role="button" href="/signup">Signup</a>
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
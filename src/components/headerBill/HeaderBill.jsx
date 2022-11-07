import * as React from "react";
import { useState, useLayoutEffect, useContext } from "react";
import './headerBill.css'
import { LoginContext } from "../../LoginContext";
import { Button, Grid, Stack, Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
import { Row, Col } from "antd";
import logo from "../../image/DORIS_TOURS.png";
import { red } from "@mui/material/colors";
const HeaderBill = () => {
  return (
    <>
      <div>
        <div className="header-blue1">
        
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
                DORIS TOURS{" "}
              </a>
              <button
                data-toggle="collapse"
                className="navbar-toggler"
                data-target="#navcol-1"
              ></button>

              
            </div>
      
        </div>
      </div>
    </>
  );
};

export default HeaderBill;

import { TextField } from "@mui/material";
import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../../LoginContext";
import CustomerRouterConfig from "./CustomerRouterConfig";
import "./customer.scss";
const Customer = () => {
  const [customerJoinedTour, setCustomerJoinedTour] = useState([]);
  // console.log(customerJoinedTour);
  const customerID = useContext(LoginContext);

  useEffect(() => {
    axios(`http://localhost:3001/khachhang/${customerID}`).then(
      ({ data }) => setCustomerJoinedTour(data.tour_tg)
    );
  }, []);
  
  const listItem = [
    { id: "/customer/account", label: "Thông tin tài khoản" },
    { id: "/customer/bookedTour", label: "Tour đã đặt" },
  ];

  return (
    <div
      className="customer padding-section"
      style={{ display: "flex", gap: "2rem", width: "100%" }}
    >
      <div className="customer--sideBar" style={{ width: "20%" }}>
        <div className="customer--sideBar__header"></div>
        <ul className="customer--sideBar__Container">
          {listItem.map((item) => (
            <NavLink
              to={item.id}
              className={({ isActive }) =>
                isActive ? "itemNavBar itemNavBar--active" : "itemNavBar"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="customer--content" style={{ width: "80%" }}>
        <CustomerRouterConfig />
      </div>
    </div>
  );
};

export default Customer;

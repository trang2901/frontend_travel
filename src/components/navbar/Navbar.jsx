import React, { useState, useLayoutEffect, useContext } from "react";
import axios from "axios";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { LoginContext } from "../../LoginContext";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Menu, Close } from "@mui/icons-material";
import "./navbar.scss";

const Navbar = (props) => {
  const [customerName, setCustomerName] = useState("");
  const [menuOn, setMenuOn] = useState(false);
  const customerID = useContext(LoginContext);
  useLayoutEffect(() => {
    if (customerID)
      axios(`https://tour-api-dev.herokuapp.com/khachhang/${customerID}`).then(
        ({ data }) => setCustomerName(data.ho_ten)
      );
  }, []);

  const pages = [
    { label: "Home", path: "", default: true },
    { label: "About us", path: "about-us", default: false },
    { label: "Contact", path: "contact", default: false },
  ];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
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

  function buttonMenuStyle(primaryColor, secondColor) {
    var obj = {
      backgroundColor: `${primaryColor}`,
      fontSize: "12px",
      border: `1px solid ${secondColor}`,
      borderRadius: "0",
      color: `${secondColor}`,
      padding: "0 2rem",
      "&:hover": {
        backgroundColor: `${primaryColor}`,
        opacity: 0.6,
      },
    };
    return obj;
  }

  return (
    <div className="navbar">
      <div className="navbar-container">
        

        

        <div className="button-action">
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
              <Button
                sx={buttonStyle("#3075C6", "#fff")}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
              <Button
                sx={buttonStyle("#fff", "#3075C6")}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up
              </Button>
            </>
          )}
        </div>

        <div className="menu">
          {menuOn ? (
            <>
              <Close fontSize="large" onClick={() => setMenuOn(!menuOn)} />
              <div className="menu--content">
                <ul className="menu--navbar-pages__container">
                  {pages.map((item) => (
                    <NavLink
                      to={`${item.path}`}
                      onClick={() => setMenuOn(!menuOn)}
                    >
                      <li>{item.label}</li>
                    </NavLink>
                  ))}
                </ul>

                <div className="menu--button-action">
                  {customerID ? (
                    <>
                      <Button
                        sx={buttonMenuStyle("#3075C6", "#fff")}
                        onClick={() => {
                          navigate("/Login");
                        }}
                      >
                        Login
                      </Button>
                      <Button
                        sx={buttonMenuStyle("#fff", "#3075C6")}
                        onClick={() => {
                          navigate("/Signup");
                        }}
                      >
                        Sign up
                      </Button>
                    </>
                  ) : (
                    <Button sx={{ width: "100%" }} variant={"text"}>
                      Log out
                    </Button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <Menu fontSize="large" onClick={() => setMenuOn(!menuOn)} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;

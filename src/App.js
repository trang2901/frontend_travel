import React, { createContext } from "react";
import "lodash";
import "./App.scss";
import { LoginContext } from "./LoginContext";
import Header from "./components/header/Header";


import Footer from "./container/footer/Footer";
import Navbar from "./components/navbar/Navbar"
import { RouterConfig } from "./components";
const App = () => {
  return (
    <LoginContext.Provider value={window.sessionStorage.getItem("customerID")}>
      <div className="App">
      <Header></Header>
        {/* <Navbar /> */}
        <RouterConfig />
       
        <Footer />
        
      </div>
    </LoginContext.Provider>
  );
};

export default App;

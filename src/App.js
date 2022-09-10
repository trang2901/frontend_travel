import React, { createContext } from "react";
import "lodash";
import "./App.scss";
import { LoginContext } from "./LoginContext";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Banner1 from "./components/banner1/Banner1"
import List from "./pages/product/list"
import Navbar from "./components/navbar/Navbar"
import { RouterConfig } from "./components";
const App = () => {
  return (
    <LoginContext.Provider value={window.sessionStorage.getItem("customerID")}>
      <div className="App">
      <Header></Header>
        <RouterConfig />
        
       <Footer></Footer>  
      </div>
    </LoginContext.Provider>
  );
};

export default App;

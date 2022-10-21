import React from "react";

import { Routes, Route } from "react-router-dom";
import { Home, Detail, Login, PaymentContent, Customer, Banner,List,Aboutus, Blog, Loginn, Signup,Payment1, Ordersuccessful} from "../../pages";

const RouterConfig = () => {
  return (
    <>
      <Routes>
        <Route path="m" element={<List />}/>
        <Route path="/" element={<Banner />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="home" element={<Home />} />
        <Route path="customer/*" element={<Customer />} />
        <Route path="Detail" element={<Detail />} />
        <Route path="payment" element={<PaymentContent />} />
        {/* <Route path="Login" element={<Login login={true} />} />
        <Route path="Signup" element={<Login login={false} />} /> */}
        <Route path="Login" element={<Loginn login={true}/>} />
        <Route path="Signup" element={<Signup login={false}/>} />
        <Route path="ordersuccessful" element={<Ordersuccessful />} />
      
      </Routes>
    </>
  );
};

export default RouterConfig;

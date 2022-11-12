import React from "react";

import { Routes, Route } from "react-router-dom";
import { Home, Detail, Login, SendMail, PaymentContent, Customer, Banner,List,Aboutus, Blog, Loginn, Signup,Payment1, Ordersuccessful, BookedTour, Bill,TourMB, Library1, Library2, Library3, Library4, Library5} from "../../pages";

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
        <Route path="bill" element={<Bill />} />
        <Route path="/tourMB" element={<TourMB />} />
        <Route path="/library1" element={<Library1 />} />
        <Route path="/library2" element={<Library2 />} />
        <Route path="/library3" element={<Library3 />} />
        <Route path="/library4" element={<Library4 />} />
        <Route path="/library5" element={<Library5 />} />
        <Route path="/mail" element={<SendMail />} />
      </Routes>
    </>
  );
};

export default RouterConfig;

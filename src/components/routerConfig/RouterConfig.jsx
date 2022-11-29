import React from "react";

import { Routes, Route } from "react-router-dom";
import { Process } from "../../container";
import { loadStripe } from "@stripe/stripe-js"
import {Elements} from '@stripe/react-stripe-js';

import { Home, Detail, Login, SendMail, PaymentContent, Customer, Banner,List,Aboutus, Blog, Loginn, Signup,Payment1, Ordersuccessful, BookedTour, Bill,TourMB, Library1, Library2, Library3, Library4, Library5, TourMT, TourMTNB, 
  TourMDNB, ProcessTour} from "../../pages";

const RouterConfig = () => {
  const PUBLIC_KEY = "pk_test_51M8HVJLsIuvyhKGN7eiT5Ne2S1eY7k9SAPyaSMCuzmHdWzmm74IKFWS5imFdgHYcUcup5q2w3XpMbDMUKPsjtuX900r9gMNccg"
  const stripeTestPromise = loadStripe(PUBLIC_KEY)
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
        <Route path="payment" element={<Elements stripe={stripeTestPromise}><PaymentContent /></Elements>} />
        {/* <Route path="Login" element={<Login login={true} />} />
        <Route path="Signup" element={<Login login={false} />} /> */}
        <Route path="Login" element={<Loginn login={true}/>} />
        <Route path="Signup" element={<Signup login={false}/>} />
        <Route path="ordersuccessful" element={<Ordersuccessful />} />
        <Route path="bill" element={<Bill />} />
        <Route path="/tourMB" element={<TourMB />} />
        <Route path="/tourMT" element={<TourMT />} />
        <Route path="/tourMTNB" element={<TourMTNB />} />
        <Route path="/tourMDNB" element={<TourMDNB />} />
        <Route path="/library1" element={<Library1 />} />
        <Route path="/library2" element={<Library2 />} />
        <Route path="/library3" element={<Library3 />} />
        <Route path="/library4" element={<Library4 />} />
        <Route path="/library5" element={<Library5 />} />
        <Route path="/mail" element={<SendMail />} />
        <Route path="/process" element={<ProcessTour />} />
      </Routes>
    </>
  );
};

export default RouterConfig;

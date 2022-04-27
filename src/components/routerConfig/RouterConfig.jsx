import React from "react";

import { Routes, Route } from "react-router-dom";
import { Home, Detail, Login, PaymentContent, Customer } from "../../pages";

const RouterConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="customer/*" element={<Customer />} />
        <Route path="Detail" element={<Detail />} />
        <Route path="payment" element={<PaymentContent />} />
        <Route path="Login" element={<Login login={true} />} />
        <Route path="Signup" element={<Login login={false} />} />
      </Routes>
    </>
  );
};

export default RouterConfig;

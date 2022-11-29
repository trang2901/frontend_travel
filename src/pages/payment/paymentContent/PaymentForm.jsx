import { PaymentElement, CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Container } from "@mui/material";
import { Radio, Space, Input } from "antd";
import { Paper } from "@mui/material";
import { RadioChangeEvent } from "antd";
import './paymentform.scss'
const PUBLIC_KEY =
  "pk_test_51M8HVJLsIuvyhKGN7eiT5Ne2S1eY7k9SAPyaSMCuzmHdWzmm74IKFWS5imFdgHYcUcup5q2w3XpMbDMUKPsjtuX900r9gMNccg";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#08183c",
      color: "#f97150",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "grey" },
    },
    invalid: {
      iconColor: "red",
      color: "red",
    },
  },
};

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [open, setOpen] = useState("false");
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { error, paymentMethod } = stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = axios.post("http://localhost:3001/payment", {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
    <Container>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value={3}>Thanh toán trực tiếp</Radio>
              <Radio value={4}>
                Thanh toán online
                {value === 4 ? (
                  <Paper elevation={3}>
                    <fieldset
                      className="FormGroup"
                     
                    >
                      <div
                        className="FormRow"
                        style={{width: "500px" }}
                      >
                        <CardElement options={CARD_OPTIONS} />
                      </div>
                    </fieldset>
                  </Paper>
                ) : null}
              </Radio>
            </Space>
          </Radio.Group>
         
        </form>
      ) : (
        <div>
          <h2>
            You just bought a sweet spatula congrats this is the best decision
            of you're life
          </h2>
        </div>
      )}
      </Container>
    </>
  );
};
export default PaymentForm;

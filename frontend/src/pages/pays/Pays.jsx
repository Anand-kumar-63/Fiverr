import React, { useDebugValue } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import Checkoutform from "@/Components/CheckoutForm/Checkoutform";

const stripePromise = loadStripe("pk_test_51SSclkFuG7cooJldnP3sYpLdVqidXnFSjGEpJYKDMJ0Zu898IegIXJOJ05mIfGM8IF0nwW5LQBQiXs1QmzJlFrFm00WzTcHrbZ");
const Pay = () => {
  const [clientSecret, setclientSecret] = useState("");
  const { Id } = useParams();
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(`/order/create-payment-intent/${Id}`);
        setclientSecret(res.data.clientSecret);
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  }, []);
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return <div className="pay">
   {
    clientSecret && (
      <Element options={options} stripe={stripePromise}>
        <Checkoutform />
      </Element>
    )
   }
  </div>;
};

export default Pays;

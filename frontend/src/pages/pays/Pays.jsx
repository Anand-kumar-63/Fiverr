import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "@/lib/api";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkoutform from "@/Components/CheckoutForm/Checkoutform";

const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
const stripePromise = loadStripe(stripePublicKey);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { Id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          `${API_BASE_URL}/order/create-payment-intent/${Id}`,
          {},
          { withCredentials: true }
        );
        setClientSecret(res.data.clientSecret);
      } catch (error) {
        console.error("Payment intent error:", error);
      }
    };
    if (Id) makeRequest();
  }, [Id]);

  const options = {
    clientSecret,
    appearance: { theme: "stripe" },
  };

  return (
    <div className="pay flex justify-center p-10">
      {clientSecret && stripePromise && (
        <Elements options={options} stripe={stripePromise}>
          <Checkoutform />
        </Elements>
      )}
    </div>
  );
};

export default Pay;

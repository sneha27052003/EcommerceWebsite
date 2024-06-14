import React, { useEffect, useState } from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card1 from "./Card1";
import axios from "axios";
import CartPage from "./pages/CartPage";
import queryString from "query-string";

const Home = () => {
  const [razorpayScriptLoaded, setRazorpayScriptLoaded] = useState(false);
  const amount = queryString.parse(window.location.search).amount || 0;

  useEffect(() => {
    const loadRazorpayScript = async () => {
      // Check if Razorpay script is already loaded
      if (window.Razorpay) {
        setRazorpayScriptLoaded(true);
        return;
      }

      // Load Razorpay script dynamically
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;

      script.onload = () => {
        // Razorpay script has loaded
        setRazorpayScriptLoaded(true);
      };

      document.head.appendChild(script);
    };

    loadRazorpayScript();
  }, []);

  // const checkoutHandler = async (amount) => {
  //     if (!razorpayScriptLoaded) {
  //         console.error("Razorpay script is not yet loaded");
  //         return;
  //     }

  //     const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey");
  //     const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", { amount });

  //     const options = {
  //         key,
  //         amount: order.amount,
  //         currency: "INR",
  //         name: "6 Pack Programmer",
  //         description: "Tutorial of RazorPay",
  //         image: "https://avatars.githubusercontent.com/u/25058652?v=4",
  //         order_id: order.id,
  //         callback_url: "http://localhost:4000/api/paymentverification",
  //         prefill: {
  //             name: "Sanika Mandhare",
  //             email: "sanikamandhare301@gmail.com",
  //             contact: "7420935018"
  //         },
  //         notes: {
  //             "address": "Razorpay Corporate Office"
  //         },
  //         theme: {
  //             "color": "#121212"
  //         }
  //     };

  //     // Create Razorpay instance
  //     const razor = new window.Razorpay(options);
  //     razor.open();
  // };

  const checkoutHandler = async (amount) => {
    console.log(`http://localhost:8081/api/checkout/${amount?.amount}`);
    const finalAmount = parseInt(parseInt(amount?.amount) / 10000);
    console.log(amount, finalAmount);
    const {
      data: { key },
    } = await axios.get("http://localhost:8081/api/getkey");
    console.log(key);
    const {
      data: { order },
    } = await axios.post(`http://localhost:8081/api/checkout/${finalAmount}`, {
      amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "SugarBites",
      description: "Sweets and Snacks Venture",
      image: require("./images1/sweet-plate.jpg"),
      order_id: order.id,
      callback_url: "http://localhost:8081/api/paymentVerification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <Box>
      <Stack
        h={"100vh"}
        alignItems="center"
        justifyContent="center"
        direction={["column", "row"]}
      >
        <Card1 amount1={amount} checkoutHandler={checkoutHandler} />
      </Stack>
    </Box>
  );
};

export default Home;

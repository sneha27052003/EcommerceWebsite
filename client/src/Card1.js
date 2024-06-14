// Card1.js
import { Button, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests

const Card1 = ({ amount1, checkoutHandler }) => {
  const [loading, setLoading] = useState(false);

  const handlePayNow = async () => {
    try {
      setLoading(true);
      const finalAmount = amount1.slice(1);
      console.log(finalAmount);
      const fAmoun = parseInt(finalAmount.split(".")[0]);
      // Make an API request to your backend to create a Razorpay order
      const response = await axios.post(`/api/checkout/${fAmoun}`, {
        amount: amount1,
      });

      // Extract the order from the response
      const { order } = response.data;

      // Pass the order to the checkoutHandler
      checkoutHandler(order);
    } catch (error) {
      console.error("Error creating Razorpay order:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <VStack>
      <img src={require("./images1/payment.jpg")} alt="Payment" />
      <Text className="f-s">{amount1}</Text>
      <Button
        className="submit-btn1 text-white"
        onClick={handlePayNow}
        disabled={loading}
      >
        {loading ? "Processing..." : "Pay Now"}
      </Button>
    </VStack>
  );
};

export default Card1;

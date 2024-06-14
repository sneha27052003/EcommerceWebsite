import express from "express";
import {
  checkout,
  paymentVerification,
} from "../controllers/paymentController.js";

const router = express.Router();

router.route("/checkout/:amount").post(checkout);

router.route("/paymentverification").post(paymentVerification);

export default router;

import express from "express";
import tickerController from "../controller/tickerController.js";

const router = express.Router();

router.route("/:symbol").get(tickerController.getTickerBySymbol);

router.route("/").get(tickerController.getAllTicker);

router.route("/new").post(tickerController.newTicker);

export default router;

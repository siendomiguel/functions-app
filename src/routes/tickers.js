import express from "express";
import tickerController from "../controller/tickerController.js";

const router = express.Router();

router.route("/ticker/new").post(tickerController.newTicker);

router
  .route("/:symbol")
  .get(tickerController.getTickerBySymbol)
  .put(tickerController.putTickerBySymbol)
  .delete(tickerController.deleteTickerBySymbol);

router.route("/tickers/all").get(tickerController.getAllTicker);

export default router;

import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

// ========= Import Routes =========
import portfolios from "./src/routes/portfolios/index.js";
import tickers from "./src/routes/tickers.js";

// ========= DB =========
mongoose
  .connect(process.env.URI_LOCAL_DB)
  .then(() => console.log("******** Conected to MongoDB Local ********"))
  .catch((error) => console.error(error));

// ========= Middlewares =========
const app = express();
const port = process.env.PORT;
app.use(express.json())

// ========= Routes =========
app.get("/", (req, res) => {
  res.send("API de testing para BitfinApp");
});

// ========= Routes =========
app.use("/api/v1/portfolios", portfolios);
app.use("/api/v1/tickers", tickers);

// ========= Start server =========
app.listen(port, () => {
  console.log(`******** Servidor en el puerto ${port} ********`);
});

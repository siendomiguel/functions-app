import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

// ========= Routes
import portfolios from "./src/routes/portfolios/index.js";
import tickers from "./src/routes/tickers/index.js";

mongoose
  .connect(process.env.URI_LOCAL_DB)
  .then(() => console.log("******** Conected to MongoDB Local ********"))
  .catch((error) => console.error(error));

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("API de testing para BitfinApp");
});

app.use("/portfolios", portfolios);
app.use("/tickers", tickers);

app.listen(port, () => {
  console.log(`******** Servidor en el puerto ${port} ********`);
});

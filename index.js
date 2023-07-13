import express from "express";
import "dotenv/config";

import portfolios from "./src/routes/portfolios/index.js";
import tickers from "./src/routes/tickers/index.js"

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("API de testing para BitfinApp");
});

app.use("/portfolios", portfolios);
app.use("/tickers", tickers);

app.listen(port, () => {
  console.log(`Ejecutando servidor en el puerto ${port}`);
});

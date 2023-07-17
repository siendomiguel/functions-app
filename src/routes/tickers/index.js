import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  // const id = req.params.id; // -> Esto seria el parametro de la ruta: tickers/1
  const paramId = req.query.id // -> Esto seria la query params de la ruta: tickers?id=jajajaja
  
  res.send(`Este es el precio de: `);
});

export default router;

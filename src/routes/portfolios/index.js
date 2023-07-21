import express from "express";

const router = express.Router();

router.get("/portafolios", (req, res) => {
  console.log("hola desde ruta portfolios");
  res.send('consulta a portafolio')
});

export default router;

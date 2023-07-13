import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("hola desde ruta portfolios");
  res.send('consulta a portafolio')
});

export default router;

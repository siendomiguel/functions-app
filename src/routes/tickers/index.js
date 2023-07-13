import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Respuesta desde tickers')
});

export default router;
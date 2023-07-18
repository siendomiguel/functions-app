import Ticker from "../models/modelTicker.js";

export const getTickerBySymbol = async (req, res) => {
  try {
    const symbol = req.query.symbol;
    const ticker = await Ticker.findOne({ symbol: symbol });

    if (!ticker) {
      return res.status(404).json({ message: "Ticker not found" });
    }

    return res.status(200).json(ticker);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error retrieving ticker" });
  }
};



export const getAllTicker = async (req, res) => {
  try {
    const allTickers = await Ticker.find();
    return res.status(200).json(allTickers);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error retrieving tickers" });
  }
};


export const newTicker = async (req, res) => {
  try {
    const newTicker = new Ticker({ ...req.body });
    const saveTicker = await newTicker.save();
    return res.status(200).json({ Documento_creado: saveTicker });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error create ticker" });
  }
};

const tickerController = {
  getAllTicker,
  getTickerBySymbol,
  newTicker,
};

export default tickerController;

import Ticker from "../models/modelTicker.js";

export const getTickerBySymbol = async (req, res) => {

  // Patrones para detectar dispositivos móviles
  const userAgent = req.get('User-Agent');
  const mobilePattern = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const desktopPattern = /Windows|Macintosh|Linux/i;
  
  const isMobile = mobilePattern.test(userAgent);
  const isDesktop = desktopPattern.test(userAgent);
  
  if (isMobile) {
    // Obtener el sistema operativo en dispositivos móviles
    const mobileOSPattern = /(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i;
    const mobileOSMatch = userAgent.match(mobileOSPattern);
    const mobileOS = mobileOSMatch ? mobileOSMatch[0] : 'Desconocido';
  
    console.log(`Es un dispositivo móvil con sistema operativo ${mobileOS}.`);
  } else if (isDesktop) {
    // Obtener el sistema operativo en equipos de escritorio
    const desktopOSPattern = /(Windows|Macintosh|Linux)/i;
    const desktopOSMatch = userAgent.match(desktopOSPattern);
    const desktopOS = desktopOSMatch ? desktopOSMatch[0] : 'Desconocido';
  
    console.log(`Es un equipo de escritorio con sistema operativo ${desktopOS}.`);
  } else {
    console.log('Es un dispositivo desconocido.');
  }
  

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

export const putTickerBySymbol = async (req, res) => {
  try {
    const symbol = req.query.symbol;
    const updateTicker = await Ticker.updateOne({ symbol }, req.body);
    return res.status(200).json(updateTicker);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error update ticker" });
  }
};

export const deleteTickerBySymbol = async (req, res) => {
  try {
    const symbol = req.query.symbol;
    const deleteTicker = await Ticker.deleteOne({symbol})
    return res.status(200).json({message: `${symbol} deleting`})
  } catch (error) {
    return res.status(500).json({message: "Error delete ticker"})
  }
}

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
    const existingTicker = await Ticker.findOne({ symbol: req.body.symbol });

    if (existingTicker) {
      return res.status(400).json({ message: "This Ticker already exists" });
    }
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
  putTickerBySymbol,
  deleteTickerBySymbol,
  newTicker,
};

export default tickerController;

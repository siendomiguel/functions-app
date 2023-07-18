import mongoose from "mongoose";

//In general it is best to specify required fields in Mongoose schemas to avoid problems
const tickerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

//We can create a constant and then export just that constant
// example const Ticker = mongoose.model("Ticker", tickerSchema); module.exports = { Ticker }

const Ticker = mongoose.model("Ticker", tickerSchema);

export default Ticker;

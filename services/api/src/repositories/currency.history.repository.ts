import CurrencyHistory, { ICurrencyHistory } from "../models/currency.history";

export async function getCurrenciesHistoryRepository(code,fields) {
  try {
    console.log(code);
    const history = await CurrencyHistory.find({from_code: code}).select(fields);
    console.log(history);
    return history;
  } catch(error) {
    console.log(error);
    throw Error();
  }
}









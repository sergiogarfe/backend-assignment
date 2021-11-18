import {
  getLastCurrencyChangeRepository,
  getLastHourHistoryRepository,
  createCurrencyHistoryRepository
} from "../repositories/currency.history.repository";

import {
    getCurrenciesController
  } from "../controllers/currency.controller";


async function getLastCurrencyChangeController(code:string) {
    try {
      
        code = code.toUpperCase();
        const currencyChange = await getLastCurrencyChangeRepository(code);
        //get history change
        const lastHourHistoryCurrencyChange = await getLastHourHistoryRepository(code);
        if (lastHourHistoryCurrencyChange && lastHourHistoryCurrencyChange.length) {
            currencyChange.bid_diff = currencyChange.bid - lastHourHistoryCurrencyChange[0].avg_bid;
            currencyChange.ask_diff = currencyChange.ask - lastHourHistoryCurrencyChange[0].avg_ask;
            currencyChange.spread_diff = currencyChange.spread - lastHourHistoryCurrencyChange[0].avg_spread;
        } 
        await createCurrencyHistoryRepository(currencyChange);

        return currencyChange;
    } catch (error) {
        return error
    }
  }

export async function fecthExchangePriceFromCurrencies() {
   
    return new Promise(async (resolve, reject) => {
        console.log("fecthExchangePriceFromCurrencies");
        const currencies = await getCurrenciesController();
        console.log(currencies);
        for (let index = 0; index < currencies.length; index++) {
            const currency = currencies[index];
            const lastCurrencyChange = await getLastCurrencyChangeController(currency.code);
            console.log(lastCurrencyChange);
        }
       
        console.log("resolve?¿");
        resolve(true);
    });
    
}


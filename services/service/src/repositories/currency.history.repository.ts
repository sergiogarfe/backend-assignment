import CurrencyHistory, { ICurrencyHistory } from "../models/currency.history";

import * as request from "request";



export async function getCurrencyByCodeRepository(code: string) {
    try {
      return await CurrencyHistory.find({code:code});
  
    } catch(error) {
      throw Error();
    }
}

export async function createCurrencyHistoryRepository(currency:ICurrencyHistory) {
  try{
    await currency.save();
    return currency;
  } catch(error) {
      console.log(error);
    throw Error();
  }
}



export async function getLastCurrencyChangeRepository(code: string) {
    return new Promise<ICurrencyHistory>(async (resolve, reject) => {
        try {
            var url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency='+code+'&to_currency=EUR&apikey=5GQ9E08BVZ0U64OU.';
            
            request.get({
                url: url,
                json: true,
                headers: { 'User-Agent': 'request' }
            }, (err, res, data) => {
                if (err) {
                    console.log('Error:', err);
                } else if (res.statusCode !== 200) {
                    console.log('Status:', res.statusCode);
                } else {
                    // data is successfully parsed as a JSON object:
                    console.log("data");
                    console.log(data);

                    const newcurrency: ICurrencyHistory = new CurrencyHistory();
                    newcurrency.from_code = code;
                    newcurrency.to_code = 'EUR';
                    newcurrency.rate = data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
                    newcurrency.ask = data["Realtime Currency Exchange Rate"]["9. Ask Price"];
                    newcurrency.bid = data["Realtime Currency Exchange Rate"]["8. Bid Price"];
                    newcurrency.spread = newcurrency.bid - newcurrency.ask;

                    resolve(newcurrency);
                }
            });
        } catch (error) {
            console.log(error);
            // Log Errors
            reject(error);
        }
    });
}

export async function getLastHourHistoryRepository(code:string) {
    const date = Date.now() - (3600*1000);
    var isoDate = new Date(date).toISOString();
    var isoDateString = new Date(isoDate);
    console.log("DATE: "+isoDateString);
    return await CurrencyHistory.aggregate([
        { $match:{ $and:[ {createdAt:{$gte: isoDateString }}, {from_code:code}] }},
        {$group: {_id:"$from_code" , avg_ask: {$avg: '$ask'}, avg_bid: {$avg: '$bid'}, avg_spread: {$avg: '$spread'}}}
    ]);        
}
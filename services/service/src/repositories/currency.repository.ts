
import Currency, { ICurrency } from "../models/currency";
import {ObjectId} from "mongodb";
import * as request from "request";

export async function getCurrenciesRepository() {
 
  try {
    const currencies = await Currency.find();
    return currencies;
  } catch(error) {
    console.log(error);
    throw Error(error);
  }
}

export async function getCurrencyRepository(id: ObjectId) {
  try {
    return await Currency.findOne({_id:id});

  } catch(error) {
    throw Error();
  }
}

export async function getCurrencyByCodeRepository(code: string) {
    try {
      return await Currency.findOne({code:code});
  
    } catch(error) {
      throw Error();
    }
  }

export async function createCurrencyRepository(currency:ICurrency) {
  try{
    await currency.save();
    return currency;
  } catch(error) {
      console.log(error);
    throw Error();
  }
}


export async function deleteCurrencyRepository(code: string) {
  try {
    return await Currency.findOneAndRemove({code: code});
  } catch (error) {
    // Log Errors
    throw Error();
  }
}

export async function getLastCurrencyChangeRepository(code: string) {
    return new Promise(async (resolve, reject) => {
        try {
            var url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency='+code+'&to_currency=EUR&apikey=5GQ9E08BVZ0U64OU.';
            console.log(url);
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
                    console.log(data);
                    resolve(data);
                }
            });
        } catch (error) {
            console.log(error);
            // Log Errors
            reject(error);
        }
    });
   
}
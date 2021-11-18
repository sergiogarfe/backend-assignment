import { Request, Response } from "express";

import {
    getCurrenciesHistoryRepository
  
} from "../repositories/currency.history.repository";

import {
    getCurrenciesByCodesRepository,
} from "../repositories/currency.repository";




export async function getCurrenciesHistoryController(req: Request, res: Response) {
  try {
    var { codes,  fields} = req.query;
    
    var parseCodes:Array<String>;
    if (codes) {
        codes = codes.toUpperCase();
        parseCodes = codes.split(',');
    }
  
    var parseFields:Array<String>;
    if (fields) {
        parseFields = fields.split(',');
    }
   
    const currencies = await getCurrenciesByCodesRepository(parseCodes);
    var currenciesResponse = [];
    
    for (let index = 0; index < currencies.length; index++) {
        const currency = currencies[index];

        var history = await getCurrenciesHistoryRepository(currency.code,parseFields);
        var currencyResponse = {code:currency.code, history:history};
        currenciesResponse.push(currencyResponse);
    }
 
    res.json(currenciesResponse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: error.message });
  }
}

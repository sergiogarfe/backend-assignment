
import Currency, { ICurrency } from "../models/currency";
import {ObjectId} from "mongodb";


export async function getCurrenciesRepository() {
  try {
    return await Currency.find();
  } catch(error) {
    console.log(error);
    throw Error();
  }
}

export async function getCurrenciesByCodesRepository(codes) {
  try {
    return await Currency.find({code:{$in:codes}});
  } catch(error) {
    console.log(error);
    throw Error();
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


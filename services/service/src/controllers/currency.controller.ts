
import {
  getCurrenciesRepository
  
} from "../repositories/currency.repository";

export async function getCurrenciesController() {

  try {
    const currencies = await getCurrenciesRepository();
    return currencies;
  } catch (error) {
    console.log(error);
    return error;
  }
}

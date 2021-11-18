import * as path from 'path';
import * as mongoose from 'mongoose';

import {
  fecthExchangePriceFromCurrencies
} from "./controllers/currency.history.controller";


// [DB Connection]

declare var MONGODB_URI: string;

/**
 * connectToDatabase
 * Configures the global MongoDB connection based on the provided secrets.
 * 
 * @returns Promise<string>
 */
async function connectToDatabase(connectionUri: string) {
  return new Promise((resolve, reject) => {
    // From mongoose@6.x.x onwards useNewUrlParser, useUnifiedTopology,
    // useCreateIndex are deprecated and default to true
    mongoose
    .connect(connectionUri)
      .then(() =>{
        console.log("database ok");
        resolve(connectionUri)
      })
      .catch((error: any) => {
        console.log(error)
        reject(`${connectionUri}: ${error}`)
      });
  })
}

connectToDatabase(MONGODB_URI);

// [Script execution]
console.log('Executing service...');


fecthExchangePriceFromCurrencies()
  .then(text => {
      console.log(text);
      process.exit(0);
  })
  .catch(err => {
      // Deal with the fact the chain failed
      process.exit(0);
  });


// 
import express from "express";
import {
    getCurrenciesHistoryController
} from "../controllers/currency.history.controller";

const router = express.Router();


/**
     * Model : CurrencyHistory
     * Desc : Devuelve array de divisas junto a su historico.
     * Method : Get
     * Url : /history
     * Params: 
          * codes=code1,code2,...,coden
          * fields=field1,field2,...,fieldn
*/
router.get("/", async (_req, res) => {
  return await getCurrenciesHistoryController(_req, res);

});

export default router;
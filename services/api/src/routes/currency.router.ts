import express from "express";
import { ObjectId } from "mongodb";
import {
    getCurrenciesController,
    getCurrencyController,
    createCurrencyController,
    deleteCurrencyController
} from "../controllers/currency.controller";

const router = express.Router();

/*
     * Model : Currency
     * Desc : Devuelve array de divisas añadidas.
     * Method : Get
     * Url : /currency
*/

router.get("/", async (_req, res) => {
  return await getCurrenciesController(_req, res);

});

/**
     * Model : Currency
     * Desc : Devuelve una divisa indicada por su code.
     * Method : Get
     * Url : /currency/:code
*/

router.get("/:code", async (_req, res) => {
    return await getCurrencyController(_req, res);
  
});

/**
     * Model : Currency
     * Desc : Añade una divisa.
     * Method : Post
     * Url : /currency
     * Arg: {
            code:<string>
        }
*/
router.post("/", async (_req, res) => {
    return await createCurrencyController(_req, res);

});

/**
     * Model : Currency
     * Desc : Elimina una divisa indicando su code
     * Method : Delete
     * Url : /currency/:code
*/
router.delete("/:code", async (req, res) => {
    return await deleteCurrencyController(req, res);
   
});


export default router;
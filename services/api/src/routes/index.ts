import express from "express";

import CurrencyRouter from "./currency.router";
import CurrencyHitoryRouter from "./currency.history.router";
const router = express.Router();



router.use("/currency", CurrencyRouter);
router.use("/history", CurrencyHitoryRouter);
export default router;
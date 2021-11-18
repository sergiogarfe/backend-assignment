import { Schema, model, Document } from "mongoose";

export interface ICurrency extends Document {
    code: string;
}

const CurrencySchema = new Schema(
    {
        code: {type: String, required: true},
        createdAt: {type: Date, default: Date.now}
    }
);
export default model<ICurrency>('Currency', CurrencySchema);

import { Schema, model, Document } from "mongoose";

export interface ICurrencyHistory extends Document {
    from_code: string;
    to_code:string;
    bid: number;
    ask: number;
    spread: number;
    rate: number;
    bid_diff: number;
    ask_diff: number;
    spread_diff: number;
}

const CurrencyHistorySchema = new Schema(
    {   
        from_code: {type: String, required: true},
        to_code:    {type: String, required: true, default:"EUR"},
        bid: {type: Number, required: true},
        ask: {type: Number, required: true},
        spread: {type: Number, required: true},
        rate: {type: Number, required: true},
        bid_diff: {type: Number, required: false, default:0},
        ask_diff: {type: Number, required: false, default:0},
        spread_diff: {type: Number, required: false, default:0},
        createdAt: {type: Date, default: Date.now}
    }
);
export default model<ICurrencyHistory>('CurrencyHistory', CurrencyHistorySchema);

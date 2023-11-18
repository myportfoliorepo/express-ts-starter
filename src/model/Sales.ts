import { Schema,Document,model, ObjectId, Types } from "mongoose";

export interface ISales{
    date : Date,
    product_id : ObjectId,
    quantity : Schema.Types.Number,
    amount : Number,
    salesperson_id : ObjectId
}

const SalesSchema:Schema = new Schema({
    date : {
        type : String,
        default : null
    },
    product_id : {
        type : Types.ObjectId,
        default : null
    },
    quantity : {
        type : Number,
        default : null
    },
    amount : {
        type : Number,
        default : null
    },
    salesperson_id : {
        type : Types.ObjectId,
        default : null
    }
})

export default model<ISales>("Sales",SalesSchema)
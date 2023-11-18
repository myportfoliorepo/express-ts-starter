import { Schema,Document,model } from "mongoose";

export interface ISalesPerson extends Document{
    name : string,
    region : string,
    hireDate : Schema.Types.Date,
    commissionRate : Schema.Types.Number
}

const SalesPersonSchema : Schema = new Schema({
    name : {
        type : String,
        default: null
    },
    region : {
        type : String,
        default : null
    },
    hireDate : {
        type : Date,
        default : null
    },
    commissionRate : {
        type : String,
        default : null
    }  
})


export default model<ISalesPerson>("SalesPerson",SalesPersonSchema)
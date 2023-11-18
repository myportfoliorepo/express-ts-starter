import { Schema,model,Document } from "mongoose";


export interface IProduct extends Document {
    name : string,
    category : string
}

const ProductSchema : Schema = new Schema({
    name : {
        type : String,
        default : null
    },
    category : {
        type : String,
        default : null
    }
})

export default model<IProduct>("Product",ProductSchema);
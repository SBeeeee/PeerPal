import mongoose from "mongoose";

const rentalsSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
       type:Number,
        required:true,
        min:1
    },
    postedby:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true,
    },
    category:{
        type:String,
        enum: ['Electronics', 'Books', 'Bedding', 'Kitchenware', 'Bicycles', 'Clothing', 'Other'],
        required:true
    },
    status: {
        type: String,
        enum: ['not accepted', 'in progress', 'completed'],
        default: 'not accepted'
    },
    location:{
        type:String,
    },
})

export const Rentals = mongoose.model("Rentals",rentalsSchema)
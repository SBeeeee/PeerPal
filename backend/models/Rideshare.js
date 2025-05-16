import mongoose from "mongoose";

const rideSchema = new mongoose.Schema({
   destination:{
    type:String,
    required:true
   },
   fromdestination:{
        type:String,
        required:true,
   },
   ride:{
        type:String,
        required:true,
        enum:['Cab','Auto']
   },
   Details:{
    type:String,
    required:true,
   },
   seats:{
     type:Number,
     required:true,
   },
   postedby:{
     type: mongoose.Schema.Types.ObjectId,
     ref: "User",
     required:true,
   },
   contact:{
     type:Number,
     required:true,
   },
   travelDate:{
     type:Date,
     required:true,
   }
},{timestamps:true})

export const Ride = mongoose.model("Ride",rideSchema)
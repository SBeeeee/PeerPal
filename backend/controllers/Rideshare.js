import { Ride } from "../models/Rideshare.js";

export const createride=async(req,res)=>{
    try {
        const {destination,fromdestination,ride,Details,seats,contact,travelDate}=req.body;
        const postedby=req.user._id;

        const newRide=new Ride({
            destination,
            fromdestination,
            ride,
            Details,
            seats,
            contact,
            travelDate,
            postedby
        })

        await newRide.save();

        res.status(201).json({
            success:true,
            message:'Ride created Successfully',
            Ride:newRide
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: 'Error creating task',
            error: error.message,
        })
    }
}

export const getallRides =async(req,res)=>{
    try {
        const Rides= await Ride.find().populate({path:'postedby',select:'name -_id'});
        res.status(200).json({
            success:true,
            message:'View All tasks',
            Rides
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating task',
            error: error.message,
        });
    }
}
import { Rentals } from "../models/rental.js";

export const createrental=async(req,res)=>{
    try {
        const {title,description,price,category,location}=req.body;
        const postedby=req.user._id;

        const newRental=new Rentals({
            title,
            description,
            price,
            category,
            location,
            postedby,
        })

        await newRental.save();
        res.status(201).json({
            success: true,
            message: 'Rental created successfully',
            Rental: newRental,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating task',
            error: error.message,
        });
    }
}

export const getRentals=async(req,res)=>{
    try {
        const rentals=await Rentals.find().populate({path:'postedby',select:'name -_id'});
        res.status(200).json({
            success:true,
            message:'View All tasks',
            rentals,
    
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating task',
            error: error.message,
        });
    }
}

export const myrentals=async(req,res)=>{
    try {
        const userId=req.user._id;
        const rentals = await Rentals.find({ postedby: userId });
        res.status(200).json({
            success:true,
            message:'View All tasks',
            rentals,
    
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating task',
            error: error.message,
        });
    }
}

export const createrequest=async(req,res)=>{
    try{
    const postedby=req.user._id;
    const {title,description,price,category,location}=req.body;
    const newRental=new Rentals({
        title,
        description,
        price,
        category,
        location,
        postedby,
        status:'requested'
    })

    await newRental.save();
    res.status(201).json({
        success: true,
        message: 'Rental created successfully',
        Rental: newRental,
    });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: 'Error creating requested task',
            error: error.message,
        });
    }

}
export const requested=async(req,res)=>{
    try {
        const rentals=await Rentals.find({status:'requested'})
        res.status(200).json({
            success:true,
            message:'View requested tasks',
            rentals,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error getting requested tasks',
            error: error.message,
        });
    }
}
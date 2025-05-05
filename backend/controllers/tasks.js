import { Tasks } from "../models/tasks.js";

export const createtask = async (req, res) => {
    try {
        const { title, description, price, category, location } = req.body;
        const postedby = req.user._id;

        const newTask = new Tasks({
            title,
            description,
            price,
            category,
            location,
            postedby,
        });

        await newTask.save();

        res.status(201).json({
            success: true,
            message: 'Task created successfully',
            task: newTask,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating task',
            error: error.message,
        });
    }
}

export const gettasks=async(req,res)=>{
    try {
        const tasks = await Tasks.find().populate( {  path: 'postedby',select: 'name -_id'} )// For each task, it looks at the postedby field (which should contain a user _id reference) and replaces it with the actual user document — but only includes: name field ✅ excludes _id ❌
        
        


    
    res.status(200).json({
        success:true,
        message:'View All tasks',
        tasks,

    })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating task',
            error: error.message,
        });
    }
}

export const mytasks=async(req,res)=>{
    try {
        const userId=req.user._id;
        const tasks = await Tasks.find({ postedby: userId });
        res.status(200).json({
            success:true,
            message:'View All tasks',
            tasks,
    
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating task',
            error: error.message,
        });
    }
}
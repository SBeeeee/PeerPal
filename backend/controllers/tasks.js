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
        const tasks = await Tasks.find().populate( {  path: 'postedby',select: 'name -_id'} )
    
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
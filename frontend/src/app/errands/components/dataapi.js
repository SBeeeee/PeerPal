import axios from 'axios';
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

import api from '@/app/lib/api';

export const fetchdata = async () => {
  try {
    const res = await axios.get(`${BACKEND_URL}/task/alltasks`);
    const data = await res.data;
    return data; // Return the fetched data
  } catch (error) {
    console.error(error);
    return {}; // Return empty object in case of error to prevent breaking
  } 
};

  export const createTask =async(task)=>{
    try{
      const res=await api.post(`${BACKEND_URL}/task/create`,task);
      return res.data;
    }catch(error){
      console.error("Error creating task:", error.message);
      return { error: "Failed to create task" };
    }
  }

export const fetchmytasks =async()=>{
  try {
    const res=await api.get(`${BACKEND_URL}/task/mytasks`);
    const data =await res.data;
    return data;
  } catch (error) {
    console.error("Error fetching your tasks:", error.message);
      return { error: "Failed to create task" };
  }
}

















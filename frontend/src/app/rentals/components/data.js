import api from "@/app/lib/api";
import axios from "axios";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchdata = async () => {
  try {
    const res = await axios.get(`${BACKEND_URL}/rentals/allrentals`);
    const data = await res.data;
    return data; // Return the fetched data
  } catch (error) {
    console.error(error);
    return {}; // Return empty object in case of error to prevent breaking
  } 
};

export const createRental =async(rental)=>{
  try{
    const res=await api.post(`${BACKEND_URL}/rentals/create`,rental,{
     
    });
    return res.data;
  }catch(error){
    console.error("Error creating task:", error.message);
    return { error: "Failed to create rental" };
  }
}

export const fetchRequestedRentals=async()=>{
    try {
      const res=await axios.get(`${BACKEND_URL}/rentals/requested`);
      const data = await res.data;
      return data; // Return the fetched data
    } catch (error) {
      console.error("Error creating task:", error.message);
    return { error: "Failed to create rental" };
    }
}

export const createRequestRental=async(rental)=>{
  try{
    const res=await api.post(`${BACKEND_URL}/rentals/postrequest`,rental,{
     
    });
    return res.data;
  }catch(error){
    console.error("Error creating task:", error.message);
    return { error: "Failed to create rental" };
  }
}








  
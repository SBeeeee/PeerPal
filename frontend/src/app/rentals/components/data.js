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










  export const mockRequestedRentals = [
    {
      id: "requestedRental1",
      title: "Mountain Bike",
      description: "Looking for a mountain bike for weekend use. Preferably in good condition.",
      points: 40,
      priceType: "per day",
      location: "Building A",
      createdAt: "2 hours ago",
      user: {
        id: "user5",
        name: "Samantha Green",
        image: "/placeholder.svg?height=40&width=40",
      },
      status: "requested",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "requestedRental2",
      title: "Laptop (MacBook Pro)",
      description: "Need a MacBook Pro for project work. Must be in good condition.",
      points: 60,
      priceType: "per week",
      location: "Library",
      createdAt: "1 day ago",
      user: {
        id: "user6",
        name: "Kevin Brown",
        image: "/placeholder.svg?height=40&width=40",
      },
      status: "requested",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "requestedRental3",
      title: "Camera (DSLR)",
      description: "Looking for a DSLR camera for photography over the weekend.",
      points: 50,
      priceType: "per day",
      location: "Student Center",
      createdAt: "2 days ago",
      user: {
        id: "user7",
        name: "Olivia Taylor",
        image: "/placeholder.svg?height=40&width=40",
      },
      status: "requested",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "requestedRental4",
      title: "Electric Scooter",
      description: "Looking for an electric scooter for a short trip across campus.",
      points: 25,
      priceType: "per day",
      location: "Sports Center",
      createdAt: "3 days ago",
      user: {
        id: "user8",
        name: "Michael Johnson",
        image: "/placeholder.svg?height=40&width=40",
      },
      status: "requested",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]
  
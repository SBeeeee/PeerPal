// data.js
import api from '@/app/lib/api';
import axios from 'axios';
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchrides =async()=>{
  try {
    const res =await axios.get(`${BACKEND_URL}/rides/getallrides`);
    const data = await res.data;
    console.log("hi",data)
    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
}

export const createRide =async(ride)=>{
  try {
    const res=await api.post(`${BACKEND_URL}/task/create`,ride);
  } catch (error) {
    console.error("Error creating ride",error.message);
    return{error:"Failed To create ride"}
  }
}
export const rides = [
    {
      id: 1,
      from: "College Campus",
      to: "Airport",
      postedAgo: "2 hours ago",
      day: "Tomorrow",
      time: "2:00 PM (±30 min)",
      description: "Sharing a cab to the airport. Flight at 5 PM, so leaving early to avoid traffic.",
      seatsAvailable: 3,
      rideType: "Cab",
      user: {
        name: "Alex Johnson",
        profileImage: "/alex.png",
        isOnline: true
      }
    },
    {
      id: 2,
      from: "North Hostel",
      to: "Shopping Mall",
      postedAgo: "1 hour ago",
      day: "Today",
      time: "6:30 PM",
      description: "Going to the mall for dinner and shopping. Auto already booked.",
      seatsAvailable: 2,
      rideType: "Auto",
      user: {
        name: "Sam Wilson",
        profileImage: "/sam.png",
        isOnline: true
      }
    },
    {
      id: 3,
      from: "South Hostel",
      to: "Railway Station",
      postedAgo: "30 minutes ago",
      day: "Tomorrow",
      time: "9:00 AM",
      description: "Leaving early to catch a morning train. Prefer co-passengers to split fare.",
      seatsAvailable: 1,
      rideType: "Cab",
      user: {
        name: "Priya Mehra",
        profileImage: "/priya.png",
        isOnline: false
      }
    },
    {
      id: 4,
      from: "Library Block",
      to: "Main City Bus Stop",
      postedAgo: "10 minutes ago",
      day: "Today",
      time: "4:15 PM",
      description: "Quick auto ride to catch the city bus.",
      seatsAvailable: 2,
      rideType: "Auto",
      user: {
        name: "Ravi Patel",
        profileImage: "/ravi.png",
        isOnline: true
      }
    },
    {
      id: 5,
      from: "Sports Complex",
      to: "Hostel Gate",
      postedAgo: "45 minutes ago",
      day: "Today",
      time: "8:00 PM",
      description: "Returning after practice. Light music and chill ride.",
      seatsAvailable: 3,
      rideType: "Auto",
      user: {
        name: "Neha Sharma",
        profileImage: "/neha.png",
        isOnline: false
      }
    },
    {
      id: 6,
      from: "College Campus",
      to: "Movie Theatre",
      postedAgo: "3 hours ago",
      day: "Tomorrow",
      time: "6:45 PM",
      description: "Evening movie plan, looking for fun companions!",
      seatsAvailable: 2,
      rideType: "Cab",
      user: {
        name: "Aman Verma",
        profileImage: "/aman.png",
        isOnline: true
      }
    },
    {
      id: 7,
      from: "Academic Block",
      to: "Cafe Brewberrys",
      postedAgo: "5 minutes ago",
      day: "Today",
      time: "1:15 PM",
      description: "Lunch break escape. Auto already booked.",
      seatsAvailable: 1,
      rideType: "Auto",
      user: {
        name: "Divya Singh",
        profileImage: "/divya.png",
        isOnline: true
      }
    },
    {
      id: 8,
      from: "College Campus",
      to: "ISBT",
      postedAgo: "4 hours ago",
      day: "Tomorrow",
      time: "11:00 AM",
      description: "Heading to catch the intercity bus. Looking for travel mates.",
      seatsAvailable: 3,
      rideType: "Cab",
      user: {
        name: "Kabir Das",
        profileImage: "/kabir.png",
        isOnline: false
      }
    }
  ];
  
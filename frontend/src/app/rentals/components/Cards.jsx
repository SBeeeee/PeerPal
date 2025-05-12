"use client"
import React, { useEffect, useState } from 'react';
import { MapPin, ShoppingCart, Package, Home, Truck, Clock, Filter, Search ,Plus} from 'lucide-react';
import { useAuth } from '@/app/context/UserContext';
import { fetchdata,createRental } from './data';
import TaskModal from './TaskModal';
export default function Cards() {

  const [rentals,setRentals]=useState([])
  const [showModal,setShowModal]=useState(false);
  const { user, logout, loading,setLoading } = useAuth();
  const getData=async()=>{
    setLoading(true)
    const data = await fetchdata();
    setRentals(data.rentals)
    setLoading(false);
  }
  useEffect(() => {
    
    getData();
  }, []);

  const getIconByCategory = (category) => {
    switch (category) {
      case "Shopping": return ShoppingCart;
      case "Delivery": return Package;
      case "Home": return Home;
      case "Transport": return Truck;
      case "Development": return Search;
      case "Design": return Filter;
      case "Pets": return Home; // Or use a specific pet icon if available
      default: return Clock;
    }
  };
  const posttask =async(formData)=>{
    const requestBody={
      title:formData.title,
      description: formData.description,
      price: formData.price,
      category: formData.category,
      location:formData.location
    }
    const data=await createRental(requestBody);
    getData();
    setShowModal(false); 
}
  

  if(loading){
    return(
      <div className="text-white text-3xl font-serif text-center">......Loading</div>
    )
  }

  return (
    <>
    <button className="bg-green-400 rounded-lg px-2 py-2 flex hover:bg-green-500 text-gray-900 my-2" onClick={() => setShowModal(true)}><Plus/> Post New Rental</button>
    <div className="flex flex-wrap gap-4 justify-center">
    {rentals.map((task) => {
      const Icon = getIconByCategory(task.category);
      return (
        <div key={task._id} className="w-80 border px-2 py-1 shadow-sm shadow-green-600 border-dashed border-amber-50">
          <h1 className="text-white text-xl font-bold flex items-center gap-2">
            <Icon /> {task.title}
          </h1>
          <div className="text-gray-400 text-lg">{task.description}</div>
          <div className="text-amber-100 flex items-center gap-1">
            <MapPin />
            <div className="text-lg">{task.location}</div>
          </div>
          <div className="border border-white/50 mt-6"></div>
          <div className="flex text-white font-bold text-lg items-center h-16 justify-between">
            <div>${task.price}</div>
            <button className="bg-green-300 px-2 rounded-lg py-2 text-gray-900">View Details</button>
          </div>
        </div>
      );
    })}
     {showModal && (
        <TaskModal 
          onClose={() => setShowModal(false)} 
          onSubmit={posttask}
        />
      )}
  </div>
  </>
  );
}

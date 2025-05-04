'use client'
import React, { useEffect, useState } from 'react';
import { fetchdata } from './data';
import { MapPin, ShoppingCart, Package, Home, Truck, Clock, Filter, Search } from 'lucide-react';
import { useAuth } from '@/app/context/UserContext';

function Cards() {
  const [tasks, setTasks] = useState([]);
  const { user, logout, loading,setLoading } = useAuth();
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const data = await fetchdata();
      setTasks(data.tasks || []);
      console.log(tasks)
      setLoading(false)
    };
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

  if(loading){
    return(
      <div className="text-white text-3xl font-serif text-center">......Loading</div>
    )
  }
  return (

    <div className="flex flex-wrap gap-4 justify-center">
      {tasks.map((task) => {
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
    </div>
  );
}

export default Cards;

import React from 'react';
import RideCard from './RideCard';
import {useState,useEffect} from 'react';
import { useAuth } from '@/app/context/UserContext';

function TodaysRides() {
  const [rides,setRides]=useState([]);
  const { user, logout, loading,setLoading } = useAuth();
 

  if(loading){
    return(
      <div className="text-white text-3xl font-serif text-center">......Loading</div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {todaysRides.length > 0 ? (
        todaysRides.map((ride) => <RideCard key={ride._id} ride={ride} />)
      ) : (
        <p className="text-center text-gray-400">No rides for today.</p>
      )}
    </div>
  );
}

export default TodaysRides;

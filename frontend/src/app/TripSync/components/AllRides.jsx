"use client"
import React from 'react';
import { fetchrides} from './data';
import RideCard from './RideCard';
import {useState,useEffect} from 'react';
import { useAuth } from '@/app/context/UserContext';

function AllRides() {

  const [rides,setRides]=useState([]);
  const { user, logout, loading,setLoading } = useAuth();

  const getData =async()=>{
      setLoading(true);
      const data =await fetchrides();
      setRides(data.Rides);
      setLoading(false)
  }

  useEffect(()=>{
    getData();
  },[]);


  if(loading){
    return(
      <div className="text-white text-3xl font-serif text-center">......Loading</div>
    )
  }
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6"> 
      {rides.map((ride) => (
        <RideCard key={ride._id} ride={ride} />
      ))}
    </div>
  );
}

export default AllRides;

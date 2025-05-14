import React from 'react';
import { rides } from './data';
import RideCard from './RideCard';

function AllRides() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {rides.map((ride) => (
        <RideCard key={ride.id} ride={ride} />
      ))}
    </div>
  );
}

export default AllRides;

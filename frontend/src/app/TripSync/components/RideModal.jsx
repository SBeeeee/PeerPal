import React, { useState } from 'react';

function RideModal({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    destination: '',
    fromdestination: '',
    ride: '',
    Details: '',
    seats: '',
    contact: '',
    travelDate: '',
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Convert fields to proper types
    const finalData = {
      ...formData,
      seats: Number(formData.seats),
      contact: Number(formData.contact),
      travelDate: new Date(formData.travelDate),
    };
    onSubmit(finalData);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-zinc-950 text-white w-[50vw] rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-bold mb-4">Create a Ride</h2>

        <label className="block text-left font-semibold">From</label>
        <input
          type="text"
          name="fromdestination"
          className="border p-2 w-full mb-2 rounded-md"
          onChange={handleInput}
          value={formData.fromdestination}
          placeholder="Start location"
        />

        <label className="block text-left font-semibold">To</label>
        <input
          type="text"
          name="destination"
          className="border p-2 w-full mb-2 rounded-md"
          onChange={handleInput}
          value={formData.destination}
          placeholder="Destination"
        />

        <label className="block text-left font-semibold">Ride Type</label>
        <select
          name="ride"
          className="border p-2 w-full mb-2 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleInput}
          value={formData.ride}
        >
          <option value="" disabled>Select Ride Type</option>
          <option value="Cab">Cab</option>
          <option value="Auto">Auto</option>
        </select>

        <label className="block text-left font-semibold">Details</label>
        <input
          type="text"
          name="Details"
          className="border p-2 w-full mb-2 rounded-md"
          onChange={handleInput}
          value={formData.Details}
          placeholder="More info about the ride"
        />

        <label className="block text-left font-semibold">Seats Available</label>
        <input
          type="number"
          name="seats"
          className="border p-2 w-full mb-2 rounded-md"
          onChange={handleInput}
          value={formData.seats}
        />

        <label className="block text-left font-semibold">Contact Number</label>
        <input
          type="tel"
          name="contact"
          className="border p-2 w-full mb-2 rounded-md"
          onChange={handleInput}
          value={formData.contact}
        />

        <label className="block text-left font-semibold">Travel Date</label>
        <input
          type="date"
          name="travelDate"
          className="border p-2 w-full mb-4 rounded-md bg-zinc-800 text-white"
          onChange={handleInput}
          value={formData.travelDate}
        />

        <div className="flex justify-end mt-3 space-x-3">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="bg-gray-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-600"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default RideModal;

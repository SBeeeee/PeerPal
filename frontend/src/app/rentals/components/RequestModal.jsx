import React, { useState } from 'react';

function RequestModal({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    location: '',
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-zinc-950 text-white w-[50vw] rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-bold mb-4">Enter Task Details</h2>
        
        <label className="block text-left font-semibold">Title</label>
        <input
          type="text"
          name="title"
          className="border p-2 w-full mb-2 rounded-md"
          onChange={handleInput}
          value={formData.title}
        />
        
        <label className="block text-left font-semibold">Description</label>
        <input
          type="text"
          name="description"
          className="border p-2 w-full mb-2 rounded-md"
          onChange={handleInput}
          value={formData.description}
        />
        
        <label className="block text-left font-semibold">Price</label>
        <input
          type="number"
          name="price"
          className="border p-2 w-full mb-2 rounded-md"
          onChange={handleInput}
          value={formData.price}
        />
        
        <label className="block text-left font-semibold">Category</label>
        <select
          name="category"
          className="border p-2 w-full mb-2 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleInput}
          value={formData.category}
        >
          <option value="" disabled>Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="Bedding">Bedding</option>
          <option value="Kitchenware">Kitchenware</option>
          <option value="Bicycles">Bicycles</option>
          <option value="Clothing">Clothing</option>
          <option value="Other">Other</option>
        </select>
        
        <label className="block text-left font-semibold">Location</label>
        <input
          type="text"
          name="location"
          className="border p-2 w-full mb-4 rounded-md"
          onChange={handleInput}
          value={formData.location}
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

export default RequestModal;

import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Add() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData.entries());
    console.log(product)
    addProducts(product);
    
    navigate("/");

    
  }
  async function addProducts(product) {
      try {
        const res = await axios.post("/products",product);
        console.log(res.data);
        
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    }
  return (
    <div className="h-screen w-screen justify-center flex items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Create Product
        </h2>

        <div className="mb-4">
          <label htmlFor="id" className="block text-gray-700 font-medium mb-2">
            ID
          </label>
          <input
            type="text"
            id="id"
            name="id"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="id" className="block text-gray-700 font-medium mb-2">
            User_ID
          </label>
          <input
            type="text"
            id="User_id"
            name="User_id"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="body" className="block text-gray-700 font-medium mb-2">
            Body
          </label>
          <textarea
            id="body"
            name="body"
            rows="4"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Add;

import { useContext, useEffect, useState } from "react";
import { Athcontes } from "../../../Provadar/AthoProvadar";

import Axios from "../../../castsomgug/axios/axios";



const UserHome = () => {
  const { user } = useContext(Athcontes);
  const [bookingData , setbookingData]=useState([])
  const [CardData , setCardData]=useState([])
const axios = Axios()
  const totalSpent = CardData.reduce((acc, item) => acc + Number(item.price || 0), 0);

  useEffect(()=>{

    const getData = async()=>{
      const res = await axios.get('/booking')
      const data = res.data
     const filtar = data.filter(item=>item.email=== user.email)
     setbookingData(filtar)
      
    }
getData()
  },[user])

  useEffect(()=>{

    const getData = async()=>{
      const res = await axios.get('/odarstart')
      const data = res.data
     const filtar = data.filter(item=>item.email=== user.email)
     setCardData(filtar)
      
    }
getData()
  },[user])


  return (
    <div className="p-6">

      {/* 🔥 Banner */}
      <div className="relative h-[250px] rounded-2xl overflow-hidden mb-8">
        <img
          src={user?.photoURL}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Welcome, {user?.displayName || "User"} 👋
          </h1>
        </div>
      </div>

      {/* 👤 User Info */}
      <div className="bg-white shadow-md rounded-xl p-5 mb-8">
        <h2 className="text-xl font-semibold mb-2">User Information</h2>
        <p>Email: {user?.email}</p>
      </div>

      {/* 📊 Dashboard Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        
        <div className="bg-blue-500 text-white p-6 rounded-xl shadow">
          <h3 className="text-lg">Total Bookings</h3>
          <p className="text-3xl font-bold">{bookingData.length}</p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-xl shadow">
          <h3 className="text-lg">Total Orders</h3>
          <p className="text-3xl font-bold">{CardData.length}</p>
        </div>

        <div className="bg-purple-500 text-white p-6 rounded-xl shadow">
          <h3 className="text-lg">Total Spent</h3>
          <p className="text-3xl font-bold">${totalSpent}</p>
        </div>

      </div>

      {/* 🧾 Recent Bookings */}
      <div className="bg-white shadow-md rounded-xl p-5 mb-10">
        <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>

      </div>

      {/* 🚀 Quick Actions */}
      <div className="flex flex-wrap gap-4">
        <button className="btn bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
          Book Table
        </button>

        <button className="btn bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
          View Cart
        </button>

        <button className="btn bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
          My Orders
        </button>
      </div>

    </div>
  );
};

export default UserHome;
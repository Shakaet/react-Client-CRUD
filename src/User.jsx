import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
    
    let userData= useLoaderData()
    let [data,setData]=useState(userData)

    let handleDelete =(id)=>{
        console.log(id)

        fetch(`http://localhost:5000/user/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(Udata => {
            console.log(Udata);
        
            if (Udata.deletedCount > 0) {
                alert("Successfully Deleted");

                let remaining= data.filter(item=>item._id !== id)
                setData(remaining)
            }
        })

    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto space-y-4">
          {data.map((item) => (
            <div
              key={item.id} // Add a unique key for each item
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border border-gray-200"
            >
              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  Name: <span className="text-gray-600">{item.name}</span>
                </h2>
                <h3 className="text-sm font-medium text-gray-700">
                  Email: <span className="text-gray-500">{item.email}</span>
                </h3>
              </div>
              <div className="flex gap-3">
                <Link to={`/update/${item._id}`}>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all">
                    Update
                  </button>
                </Link>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition-all"
                  onClick={() => handleDelete(item._id)} // Replace with your delete logic
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default User;
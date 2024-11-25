import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    let data= useLoaderData()
    // console.log(data._id)

    // console.log(data.name)

    let handleUpdate=(e)=>{
        e.preventDefault()

        let form=e.target
        let name=form.name.value
        let email=form.email.value
        console.log(name,email)

        let updatedUser={
            name,email

        }

       fetch(`http://localhost:5000/user/${data._id}`,{
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser), // Convert object to JSON
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
          
            if (data.modifiedCount) {
              alert("Updated Successfully");
            }
          })
      

       

    }
    return (
        <div>

<div className="flex items-center justify-center min-h-screen bg-gradient-to-br ">
      <form onSubmit={handleUpdate} className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Update User of {data.name}</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name='name'
            defaultValue={data.name}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name='email'
            defaultValue={data.email}
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
          />
        </div>

        <div className="text-center">
          <input
            type="submit"
            value="Update User"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-200 focus:ring-4 focus:ring-blue-300 focus:outline-none cursor-pointer"
          />
        </div>
      </form>
    </div>
            
            
        </div>
    );
};

export default Update;
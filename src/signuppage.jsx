import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    rollnumber: '',
    password: '',
    cpassword:''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // You can handle form submission logic here
    if (formData.password===formData.cpassword){
        const response=await axios.post('http://localhost:5000/signup1',formData);
        console.log(response.data);
        if (response.data===true){
            alert('your details were successfully added to our database please login to continue')
            window.location.reload();
        }else{
            alert('you are aldready an existing user')
            window.location.reload();

        }
    }
    else{
        alert('password and confirm password were not same')
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-96 ">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-500">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
              placeholder='enter the name'
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rollNumber" className="block text-gray-700">Roll Number</label>
            <input
              type="text"
              id="rollnumber"
              name="rollnumber"
              value={formData.rollnumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
              placeholder='enter the rollnumber'
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
              placeholder='enter the password'
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              value={formData.cpassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
              placeholder='re-enter the password'
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Sign Up
          </button>
          <br/>
          <p class="text-xs">aldready an existing user <a class="underline text-blue-600" onClick={()=>navigate("/login")}>Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

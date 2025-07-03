import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Signup() {
   const {
      register,
      handleSubmit,
      formState: { errors },
      } = useForm();
    const onSubmit = (data) => console.log(data);
  return (
    
    <>
      <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-slate-900">
        <div className="border-2 p-8 rounded-lg bg-white dark:bg-slate-800 shadow-md w-[400px]">
          <h3 className="font-bold text-2xl text-center mb-6">Sign Up</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-md outline-none"
            {...register("name", { required: true })}/>
            {errors.name && <span className="text-sm text-red-500"><br/>Name is required</span>}
          </div>  

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md outline-none"
             {...register("email", { required: true })}/>
             {errors.email && <span className="text-sm text-red-500">
              <br/>Email is required</span>}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md outline-none"
              {...register("password", { required: true })}/>
              {errors.password && <span className="text-sm text-red-500"><br/>Password is required</span>}
          
          </div>

          {/* Submit + Login Link */}
          <div className="flex justify-between items-center">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition duration-200">
              Sign Up
            </button>
            <p className="text-sm">
              Have an account?{" "}
              <Link to="/" className="text-blue-500 underline">
                Home
              </Link>
            </p>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;

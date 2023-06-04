"use client";
import React from "react";
import { useState, useEffect } from "react";
import "../globals.css";
import Image from "next/image";
export default function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Handle login logic
    };
  
    const handleSignup = (e) => {
      e.preventDefault();
      // Handle signup logic
    };
  
return(
    <div>
       <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center pb-5">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={handleLogin}
            >
              Log In
            </button>
          
          </div>
          <text className="text-sm ">Dont have an account? </text> <a href="#" className="  underline text-indigo-600 text-sm">Sign Up now.</a>
        </form>
      </div>
    </div>
    </div>
)

}
"use client";
import React from "react";

import "../globals.css"
export default function Footer() {

return(
    <footer className=" bg-indigo-950 py-8">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div className="flex flex-col items-center">
        <h4 className="text-lg font-semibold text-white mb-2">About Us</h4>
        <p className="text-white text-sm">we are passionate about connecting fans with their favorite artists and brands through a wide range of merchandise.</p>
      </div>

      <div className="flex flex-col items-center">
        <h4 className="text-lg font-semibold text-white mb-2">Contact Us</h4>
        <p className="text-white text-sm">Email: info@pixiepicks.com</p>
        <p className="text-white text-sm">Phone: +1 123 456 7890</p>
      </div>

      
    {/* Footer Text */}
    <p className="text-center text-white text-xs mt-8">
      &copy; 2023 Pixie Picks. All rights reserved.
    </p>
  </div>
  </div>
</footer>

)
}
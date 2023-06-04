'use client'
import React from "react";
import { useState, useEffect } from "react";
import "../globals.css";
import Image from "next/image";
import fs from "fs/promises"
import Link from "next/link";

import { SignIn } from "@clerk/nextjs/app-beta";
import { ClerkProvider } from '@clerk/nextjs/dist/components.server';
import { SignInButton } from '@clerk/nextjs/dist/client-boundary/uiComponents'

//  async function Signin2() {

//   'use server'
//   return(
//   <ClerkProvider><SignIn/>
 
//   </ClerkProvider>
//   )
 
//  }

export default function Hero() {
  




  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    
    



    setIsOpen(!isOpen);
  };


    const [currentImage, setCurrentImage] = useState(0);
    const images = [
      '/billie/1.png',
      '/billie/2.png',
      '/billie/3.png',
      '/billie/4.png',
      '/billie/5.png',
      '/billie/6.png',
    ];
  
    useEffect(() => {
      



    
      const timer = setTimeout(() => {
        



        setCurrentImage((currentImage + 1) % images.length);
      }, 2000);
  
      return () =>
       clearTimeout(timer);
    }, [currentImage, images]);
   
  return (
    
    <div className="  p-3 w-full h-fit">
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">

                <a href="/" className="text-white font-bold text-3xl ">
                  Pixie Picks
                </a>
              </div>
              <div className="invisible md:visible md:flex ml-10 text-sm items-baseline space-x-4">
                <a
                  href="/"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Products
                 
                </a>

                <a
                  href="/"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Become a Seller
                </a>
                
                <a
                  href="/"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
               
              </div>
            </div>
            
              <button className="  bg-indigo-900 hover:bg-indigo-600 p-2 invisible md:visible md:flex rounded-lg text-white hover:-lime-400"> <ClerkProvider> <SignInButton/></ClerkProvider> <svg 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-shopping-cart inline-block h-6 w-6 ml-3"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.25 11h12.5l2.25-9H1zm6 11h12" />
              </svg></button>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 sm:px-3">
              <a
                href="/"
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="/"
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Products
              </a>
              <a
                href="/"
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
            </div>
          </div>
        )}
      </nav>
      <div className="flex flex-col mt-20 mb-10 flex-wrap cursor-pointer content-center w-full  max-w-6xl mx-auto justify-center items-center rounded-lg hover:-translate-y-9  bg-lime-700 md:flex-row">
      <div className="flex flex-wrap ">
   
      <Image alt="billie" width={350} height={350} src={"/billie/billi.png"} />
      <p className="p-3 -ml-44 font-serif text-gray-400 w-40 rounded-lg bg-opacity-30 bg-lime-900 text-2xl self-center">BUY SOME BILLIE MERCH</p>
      </div>
      <div className="flex items-center justify-center h-80 w-80">

      <img
        className="w-full max-w-lg h-auto p-3"
        src={images[currentImage]}
        alt="Slider Image"
      />
    
    </div>
   </div>
   
    </div>

  );
}

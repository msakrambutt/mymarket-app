"use client";
import React from "react";
import { useState, useEffect } from "react";
import "../globals.css";
import Image from "next/image";


export default function Products() {



    const [currentImage, setCurrentImage] = useState(0);
    const images = [
      '/bts/1.png',
      '/bts/2.png',
      '/bts/3.png',
      '/bts/4.png',
      '/bts/5.png',
      '/bts/6.png',
    ];
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setCurrentImage((currentImage + 1) % images.length);
      }, 2000);
      return () => clearTimeout(timer);
    }, [currentImage, images]);

    const [currentImageB, setCurrentImageB] = useState(0);
    const imagesB = [
      '/blink/1.png',
      '/blink/2.png',
      '/blink/3.png',
      '/blink/4.png',
      '/blink/5.png',
      '/blink/6.png',
    ];
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setCurrentImageB((currentImageB + 1) % imagesB.length);
      }, 2000);
      return () => clearTimeout(timer);
    }, [currentImageB, imagesB]);

return(


<div className="flex w-full h-fit flex-wrap   ">
 
<div className="flex flex-col mt-20 mb-10 flex-wrap cursor-pointer content-center w-full  max-w-6xl mx-auto  items-center rounded-lg hover:-translate-y-9  bg-purple-500 md:flex-row">
      <div className="flex flex-wrap ">
   
      <Image alt="billie" width={500} height={500} src={"/bts/BTS.png"} className=" justify-start" />
      <p className="p-3 -ml-44 font-serif text-gray-400 w-auto rounded-lg bg-opacity-60 bg-purple-900 text-2xl self-center">GET SOME ARMY MERCH</p>
      </div>
      <div className="flex items-center justify-center h-80 w-80">

      <img
        className="w-full max-w-lg h-auto p-3"
        src={images[currentImage]}
        alt="Slider Image"
      />
    
    </div>
   </div>
   <div className="flex flex-col mt-20 mb-10 flex-wrap cursor-pointer content-center w-full  max-w-6xl mx-auto  items-center rounded-lg hover:-translate-y-9  bg-pink-500 md:flex-row">
      <div className="flex flex-wrap ">
   
      <Image alt="blink" width={500} height={500} src={"/blink/blink.png"} className=" justify-start" />
      <p className="p-3 -ml-44 font-serif text-gray-400 w-auto rounded-lg bg-opacity-60 bg-pink-900 text-2xl self-center">GET YOURSELF BLINK</p>
      </div>
      <div className="flex items-center justify-center h-80 w-80">

      <img
        className="w-full max-w-lg h-auto p-3"
        src={imagesB[currentImageB]}
        alt="Slider Image"
      />
    
    </div>
    </div>
</div>


)

};
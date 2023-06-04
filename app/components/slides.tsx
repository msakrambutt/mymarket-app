"use client";
import React from "react";
import Slider from "./slides";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";


const Slidez = () => {
    const slides = [
        <div className=" flex flex-col flex-wrap mb-10  content-center w-full justify-center items-center rounded-lg  md:flex-row max-h-fit mt-48  max-w-6xl mx-auto ">
          <div className=" px-10 flex-1 justify-start max-w-3xl">
            <h1 className="text-red-600  font-bold text-3xl px-10 mb-6">
              szff
            </h1>
            <p className="text-black text-xl  px-10  mb-6">
             gjhgj
            </p>
          </div>
          <div
            className="flex justify-center flex-1  mx-auto 
            "
          >
 <div className="flex justify-center flex-1  mx-auto image-container items-center ">
        <Image alt="metaverse" width={300} height={300} src={"/ai3.png"} />
      </div>
          </div>
        </div>,
    <div className=" flex flex-col mb-10 flex-wrap content-center w-full justify-center items-center rounded-lg  md:flex-row max-h-fit mt-48  max-w-6xl mx-auto ">
      <div className=" px-10 flex-1 justify-start max-w-3xl">
        <h1 className="text-red-600  font-bold text-3xl px-10 mb-6">
         
        </h1>
        <p className="text-black text-xl  px-10  mb-6">
      
        </p>
      </div>
     
    </div>,
    <div className=" flex flex-col mb-10 flex-wrap  content-center w-full justify-center items-center rounded-lg  md:flex-row max-h-fit mt-48  max-w-6xl mx-auto ">
      <div className=" px-10 flex-1 justify-start max-w-3xl">
        <h1 className="text-red-600  font-bold text-3xl px-10 mb-6">
          
        </h1>
        <p className="text-black text-xl  px-10  mb-6">
 
        </p>
      </div>
      <div className="flex justify-center flex-1  mx-auto image-container items-center ">
        <Image alt="metaverse" width={400} height={400} src={"/ccp.png"} />
      </div>
    </div>
  ];
  return (
    <div className="flex flex-col h-[48rem] max-w-7xl mx-auto">
      <main className="flex-grow">
        {/* <Slider slides={slides} /> */}
      </main>
      <hr />
    </div>
  );
};
export default Slidez;

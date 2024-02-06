"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm Ann Isabella {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                // wait 1s before replacing "Mice" with "Hamsters"
                "FRONT END DEVELOPER",
                1000,
                "WEB DEVELOPER",
                1000,
                "FULL STACK DEVELOPER",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "0.8em", display: "inline-block" }}
              repeat={Infinity}
            />
            ;
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6  lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full  mr-2  bg-gradient-to-br from-blue-500 via purple-500 to-pink-500  bg-white hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-transparent hover:bg-slate-800 text-white  mt-3 ">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {" "}
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-elf-center mt-4 lg:mt-0">
          <div className=" bg-[#181818]  relative">
            <img src="images/annpic.jpg" alt="" width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleBackground = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="flex flex-col flex-1">
      <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
        <div>
          <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
            <svg className="h-6 w-6 stroke-white"></svg>
          </span>
        </div>
        <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">
          Writes upside-down
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>

      {/* 60% Section */}
      <div className="bg-red-400 h-[60%] flex flex-col justify-start p-2">
        <div className="grid grid-cols-5 gap-2">
          <div className="bg-blue-400 flex items-center justify-center h-[100px]">
            20%
          </div>
          <div className="bg-blue-400 flex items-center justify-center h-[100px]">
            20%
          </div>
          <div className="bg-blue-400 flex items-center justify-center h-[100px]">
            20%
          </div>
          <div className="bg-blue-400 flex items-center justify-center h-[100px]">
            20%
          </div>
          <div className="bg-blue-400 flex items-center justify-center h-[100px]">
            20%
          </div>
          <div className="bg-primaryMainColor  flex items-center justify-center h-[100px]">
            20%
          </div>
          <div className="bg-foreground flex items-center justify-center h-[100px]">
            20%
          </div>
        </div>
      </div>

      {/* 40% Section */}
      <div className="flex bg-gray-400 h-[40%]">40%</div>
      <div className="bg-red-400 absolute bottom-0 inset-x-0 w-[100px] mx-auto lg:hidden">
        nav
      </div>
    </div>
  );
}

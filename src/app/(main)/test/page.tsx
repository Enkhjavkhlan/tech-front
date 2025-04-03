"use client";
import Image from "next/image";
import { useState } from "react";
import { useEffect, useRef } from "react";
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const containerRef = useRef(null);
  const [gapSize, setGapSize] = useState(0);

  useEffect(() => {
    const updateGapSize = () => {
      if (containerRef.current) {
        const styles = window.getComputedStyle(containerRef.current);
        setGapSize(parseFloat(styles.gap)); // Extracts the gap size in pixels
      }
    };

    window.addEventListener("resize", updateGapSize);
    updateGapSize(); // Initial call

    return () => window.removeEventListener("resize", updateGapSize);
  }, []);

  const toggleBackground = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col flex-1">
      <div className="text-tBase ">
        <div>theme</div>
        <div className="bg-primary">background</div>
        <div className="bg-secondary">secondary</div>
        <div className="">text</div>
      </div>

      <div className="bg-backgroundDark ">qwe qaweq </div>
      <div className="bg-white dark dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
        <div>
          <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
            <svg className="h-6 w-6 stroke-white"></svg>
          </span>
        </div>
        <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">
          Writes upside-down
        </h3>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-gray-800 text-white rounded-md dark:bg-gray-200 dark:text-black"
        >
          Toggle Dark Mode
        </button>
        <p className="text-gray-500 dark dark:text-red-400 mt-2 text-sm ">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>

      {/* 60% Section */}
      <div className="bg-red-400 h-[60%] flex flex-col justify-start p-2">
        <div className="grid grid-cols-5 gap-4">
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

        <div
          ref={containerRef}
          className="flex w-full bg-blue-400 flex-wrap gap-4"
        >
          <div className="flex w-[20%] items-center justify-center h-[100px] bg-red-100">
            20%
          </div>
          <div className="flex w-[20%] items-center justify-center h-[100px] bg-red-100">
            20%
          </div>
          <div className="flex w-[20%] items-center justify-center h-[100px] bg-red-100">
            20%
          </div>
          <div className="flex w-[20%] items-center justify-center h-[100px] bg-red-100">
            20%
          </div>
          <div className="flex w-[20%] items-center justify-center h-[100px] bg-red-100">
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

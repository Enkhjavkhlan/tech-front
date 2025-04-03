"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleBackground = () => {
    setIsDarkMode(!isDarkMode);
  };
  return <div>a</div>;
}

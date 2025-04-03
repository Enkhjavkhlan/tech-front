"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState("light");

  return (
    <div className="bg-primary h-screen flex flex-col">
      <div>header</div>
      {children}
      <div className="bg-secondary">footer</div>
      <div className="bg-primary-mainColor  absolute bottom-[2%] right-[2%]  w-[100px] ">
        chat
      </div>
    </div>
  );
}

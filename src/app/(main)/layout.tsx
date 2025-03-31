import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-400 h-screen flex flex-col">
      <div>header</div>
      {children}
      <div className="bg-gray-600">footer</div>
      <div className="bg-primary-mainColor  absolute bottom-[2%] right-[2%]  w-[100px] ">
        chat
      </div>
    </div>
  );
}

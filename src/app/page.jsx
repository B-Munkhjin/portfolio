"use client";
import { useState } from "react";

export default function Home() {
  return (
    <div className="">
      <div className="bg-emerald-100 w-100vw h-25 p-8.5 flex gap-17">
        <div className="text-3xl font-bold">
          <h className="text-black">Web</h>
          <h className="text-emerald-600">Dev</h>
        </div>
        <div className="flex gap-3 text-lg font-thin tracking-wider justify-center items-center">
          <h className="hover:text-emerald-700">Home</h>
          <h className="hover:text-emerald-700">Skills</h>
          <h className="hover:text-emerald-700">About</h>
          <h className="hover:text-emerald-700">Projects</h>
        </div>
      </div>
      <div className="bg-emerald-100 w-100vw h-128 py-24">
        <div></div>
        <img className="w-20 h-30" src="/pic1.svg"></img>
      </div>
      <div className="bg-gray-100 w-100vw h-135"></div>
      <div className="bg-white w-100vw h-120"></div>
      <div className="bg-gray-100 w-100vw p-30"></div>
    </div>
  );
}

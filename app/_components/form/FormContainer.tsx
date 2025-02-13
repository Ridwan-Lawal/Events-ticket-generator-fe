"use client";

import React from "react";
import FormHeader from "@/app/_components/form/FormHeader";
import { alatsi } from "@/app/_styles/font";

export default function FormContainer() {
  return (
    <div className="step-3-container ">
      <div className="border w-full">
        <FormHeader
          headerText="Ready"
          step={3}
          progressWidth="w-full"
          flexDirection="flex-row justify-between"
        />
      </div>

      <div className="border w-full flex flex-col items-center text-center gap-3 md:gap-4">
        <h2 className="md:hidden text-2xl font-bold leading-[33.6px] text-color-text-1">
          Your Ticket is Booked!
        </h2>

        {/* desktop */}
        <h2
          className={`hidden md:block text-white text-center md:text-[32px] ${alatsi.className} `}
        >
          Your Ticket is Booked!
        </h2>
        <p className="leading-[24px] text-color-text-1">
          You can <span className="font-semibold">download</span> or Check your
          email for a copy
        </p>
      </div>

      {/* ticket block */}
      <div className="py-8 px-[21px] flex flex-col justify-center items-center gap-2.5 self-stretch rounded-[24px]"></div>
    </div>
  );
}

// start step 3
// "color-green-950": "#0A0C11",
// "color-green-900": "#02191D",
// "color-green-850": "#052228",
// "color-green-800": "#05252C",
// "color-green-750": "#07373F",
// "color-green-700": "#08252B",
// "color-green-650": "#041E23",
// "color-green-600": "#0E464F",
// "color-green-550": "#12464E",
// "color-green-500": "#197686",
// "color-green-400": "#24A0B5",
// "color-text-1": "#fafafa",

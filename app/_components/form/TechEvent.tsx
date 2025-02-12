import React from "react";
import { roadRage } from "@/app/_styles/font";

export default function TechEvent() {
  return (
    <div className="border border-[#07373F] px-6 py-4 rounded-[24px] md:py-6 md:px-6 flex flex-col items-center gap-8 md:gap-2 tech-event-gradient ">
      <div className="flex flex-col gap-2 items-center max-w-[360px] mx-auto">
        <h2
          className={`${roadRage.className} text-[48px] md:text-[62px] leading-[100%] text-[#fafafa] text-center`}
        >
          Techember Fest &rdquo;25
        </h2>
        <p className="text-sm md:text-base md:leading-[150%] text-[#fafafa] text-center">
          Join us for an unforgettable experience at the Techember Fest! Secure
          your spot now.
        </p>
      </div>

      {/* events location and data/time */}
      <div className="[&>p]:leading-[150%] [&>p]:text-[#fafafa] flex flex-col md:flex-row items-center gap-1 md:gap-4">
        <p>📍 V.I. Lagos State.</p>
        <p className="hidden md:block">| |</p>
        <p>March 15, 2025 | 7:00 PM</p>
      </div>
    </div>
  );
}

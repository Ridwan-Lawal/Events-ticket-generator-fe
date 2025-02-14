import React from "react";
import FormHeader from "@/app/_components/form/FormHeader";
import { alatsi, roadRage } from "@/app/_styles/font";
import ticketBg from "@/public/bg.svg";
import Image from "next/image";

import bar from "@/public/bar.svg";
import {
  initialState,
  useTicketDetails,
} from "@/app/_lib/contexts/FormContext";
import toast from "react-hot-toast";

export default function StepThree() {
  const { ticketDetails, setTicketDetails } = useTicketDetails();

  return (
    <div className="step-3-container ">
      <div className=" w-full">
        <FormHeader
          headerText="Ready"
          step={3}
          progressWidth="w-full"
          flexDirection="flex-row justify-between"
        />
      </div>

      <div className=" w-full flex flex-col items-center text-center gap-3 md:gap-4">
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

      {/*============= ticket block ============*/}
      <div className="py-8 px-[21px] flex flex-col justify-center items-center gap-2.5 self-stretch rounded-[24px]">
        <div className=" relative w-[300px] h-[600px]">
          <Image src={ticketBg} alt="ticketBg" quality={100} priority={true} />

          {/* ticket information */}
          <div className="ticket-info bg-[#031e2119]">
            <div className="flex w-full flex-col items-center gap-5 flex-shrink-0">
              <div className="flex flex-col items-center text-center gap-1">
                <h2
                  className={`${roadRage.className} text-white text-center text-[34px] leading-[34px]`}
                >
                  Techember Fest ”25
                </h2>
                <p className="text-white  text-[10px] leading-[15px]">
                  📍 04 Rumens road, Ikoyi, Lagos
                </p>
                <p className="text-white  text-[10px] leading-[15px]">
                  📅 March 15, 2025 | 7:00 PM
                </p>
              </div>

              {/* image avatar  */}
              {/* use plaiceholder for blur dataurl */}
              <div className="relative w-[140px] h-[140px] rounded-[12px] border-4 border-[#24a0b57f] border-opacity-[0.5] overflow-hidden">
                <Image
                  src={ticketDetails?.avatar}
                  alt="avatar"
                  quality={100}
                  priority={true}
                  fill
                  className="object-cover"
                />
              </div>

              {/* ticket details */}
              <div className="ticket-details-container">
                <div className="ticket-details-block border-b border-r border-color-green-550">
                  <p>Enter your name</p>
                  <p className="text-xs font-bold break-all">
                    {ticketDetails?.name}
                  </p>
                </div>

                <div className="ticket-details-block border-b border-color-green-550  ">
                  <p>Enter your email*</p>
                  <p className="text-xs font-bold break-all">
                    {ticketDetails?.email}
                  </p>
                </div>

                <div className="ticket-details-block  border-r border-b border-color-green-550">
                  <p>Ticket Type: </p>
                  <p className="text-[10px] font-normal">VIP</p>
                </div>

                <div className="ticket-details-block border-b border-color-green-550">
                  <p>Ticket for:</p>
                  <p className="text-[10px] font-normal">
                    {ticketDetails?.noOfTickets}
                  </p>
                </div>

                <div className="ticket-details-block col-span-2 gap-1 break-all">
                  <p>Special request?</p>
                  <p className="text-[10px] font-normal">
                    {ticketDetails?.request || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* bar code */}
          <div className="flex items-center  justify-center">
            <div className=" absolute bottom-9 flex justify-center items-center gap-0.5">
              {Array.from({ length: 45 }, (_, i) => i + 1).map(
                (num: number) => (
                  <Image
                    key={num}
                    src={bar}
                    alt="bar"
                    quality={100}
                    priority={true}
                    className={`${num % 2 === 0 && "h-[40px]"} `}
                  />
                )
              )}
            </div>
            <div className="w-[230px] flex items-center justify-between text-white text-xs absolute bottom-5">
              {[8282, 80000, 23].map((num: number) => (
                <p key={num}>{num}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ----------------- end of ticket */}

      {/* buttons */}
      <div className="btn-container">
        <button
          onClick={() => toast.success("Ticket succesfully downloaded :)")}
          className="btn-color-green"
        >
          Download Ticket
        </button>
        <button
          onClick={() => setTicketDetails(initialState)}
          className="btn-transparent"
        >
          Book Another Ticket
        </button>
      </div>
    </div>
  );
}

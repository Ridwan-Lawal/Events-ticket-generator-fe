"use client";

import React, { useState } from "react";
import FormHeader from "@/app/_components/form/FormHeader";

import TicketTypeCard from "@/app/_components/form/TicketTypeCard";
import NoOfTickets from "@/app/_components/form/NoOfTickets";
import uploadIcon from "@/public/upload.svg";
import Image from "next/image";

export default function FormContainer() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      alert(`${files.length} file(s) selected`);
    }
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      alert(`${files.length} file(s) selected`);
    }
  };

  return (
    <div className="first-div">
      {/* header  */}
      {/* ticket selection */}
      <FormHeader
        headerText="attendee details"
        step={2}
        progressWidth="w-[66.6%]"
      />

      <form action="" className="second-div ">
        {/* avatar */}
        <fieldset className=" flex flex-col padding pt-6 px-6 pb-12 items-start gap-8 self-stretch border bg-color-green-850 rounded-[24px]  border-[#07373F]">
          <h2 className="capitalize text-color-text-1 leading-[24px] ">
            upload profile photo
          </h2>

          {/* <div className="h-[200px] flex justify-center items-center  self-stretch gap-2.5 bg-opacity-20 bg-black border">
            <input
              type="file"
              name="avatar"
              id="avatar"
              placeholder="drag & drop"
              className="file:border file:border-red-500 h-[240px] w-[240px]"
            />
          </div> */}
          <div className="h-[200px] flex justify-center items-center  self-stretch gap-2.5 bg-opacity-20  bg-black ">
            <div
              className="p-6 border-4 border-[#24A0B5]  text-center h-[240px] w-[240px] flex-col items-center flex justify-center gap-4  bg-color-green-600 rounded-[32px]"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Image src={uploadIcon} alt="upload" quality={100} />
              <label
                htmlFor="fileInput"
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600"
              >
                click to upload
              </label>
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileInputChange}
              />
            </div>
          </div>
        </fieldset>

        <div className="h-1 bg-color-green-750" />

        {/* first form: ticket Type, No of tickets */}
        <div className="space-y-[32px]">
          {/*;==== select ticket type ==== */}
          <div className="space-y-2.5">
            <p className="leading-[24px] text-color-text-1 ">
              Select Ticket Type:
            </p>

            {/* ticket cards */}
            <div className="ticket-cards ">
              <TicketTypeCard ticketPrice="Free" accessType="regular" />

              <TicketTypeCard ticketPrice="$150" accessType="vip" />

              <TicketTypeCard ticketPrice="$150" accessType="vvip" />
            </div>
          </div>

          {/* No of tickets */}
          <NoOfTickets />

          {/* buttons */}
          <div className="flex flex-col items-start self-stretch gap-4 md:flex-row md:gap-6 md:items-end md:justify-end">
            <button className="flex items-center justify-center self-stretch gap-2 py-3 px-6   bg-[#24A0B5] w-full rounded-[8px] font-jeju leading-[24px] text-white hover:bg-white hover:text-[#24A0B5] transition-colors">
              Next
            </button>
            <button className="flex items-center justify-center self-stretch gap-2 py-3 px-6 border border-[#24A0B5]  text-[#24A0B5] w-full rounded-[8px] font-jeju leading-[24px] hover:bg-[#24A0B5] hover:text-white transition-colors ">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

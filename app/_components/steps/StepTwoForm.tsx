"use client";

import React, { useState } from "react";
import FormHeader from "@/app/_components/form/FormHeader";
import uploadIcon from "@/public/upload.svg";
import Image from "next/image";
import FormInput from "@/app/_components/form/FormInput";
import emailIcon from "@/public/envelope.svg";

export default function StepTwoForm() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
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
    const files = e?.target?.files;
    if (files.length > 0) {
      alert(`${files.length} file(s) selected`);
    }
  };
  return (
    <div className="first-div">
      {/* header  */}

      <FormHeader
        headerText="attendee details"
        step={2}
        progressWidth="w-[66.6%]"
        flexDirection="flex-row justify-between"
      />

      {/* form  */}
      <form action="" className="second-div ">
        {/*======== avatar =========*/}

        <fieldset className=" flex flex-col padding pt-6 px-6 pb-12 items-start gap-8 self-stretch border bg-color-green-850 rounded-[24px]  border-[#07373F]">
          <h2 className="capitalize text-color-text-1 leading-[24px] ">
            upload profile photo
          </h2>

          <div className="h-[200px] flex justify-center items-center  self-stretch gap-2.5 xs:bg-opacity-20 xs:bg-black  ">
            <div
              className="p-6 border-4 border-[#24A0B5]  text-center h-[240px] w-[240px] flex-col items-center flex justify-center gap-4  bg-color-green-600 rounded-[32px]"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Image src={uploadIcon} alt="upload" quality={100} />
              <label
                htmlFor="avatar"
                className="leading-[24px] text-center text-color-text-1"
              >
                Drag & drop or click to upload
              </label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                aria-label="Image avatar"
                aria-required={true}
                aria-describedby="avatar-error"
                // aria-invalid=""
                className="hidden"
                onChange={handleFileInputChange}
              />
            </div>
          </div>
        </fieldset>

        <div className="h-1 bg-color-green-750" />

        {/*========== name ===========*/}

        <FormInput error="" label="Enter your name">
          <input
            type="text"
            name="name"
            id="name"
            aria-label="name"
            aria-required={true}
            aria-describedby="name-error"
            // aria-invalid=""
          />
        </FormInput>

        {/*======= email address ========*/}
        <FormInput error="" label="Enter your email">
          <Image
            src={emailIcon}
            alt="email icon"
            quality={100}
            priority={true}
          />
          <input
            type="text"
            name="email"
            id="email"
            aria-label="email"
            aria-required={true}
            aria-describedby="email-error"
            // aria-invalid=""
          />
        </FormInput>

        {/*======= special request =========== */}
        <FormInput error="" label="Special request?">
          <textarea
            name="request"
            id="request"
            aria-label="special request"
            aria-required={true}
            aria-describedby="request-error"
            // aria-invalid=""
            className="h-[127px] w-full bg-transparent focus:outline-none text-white"
          />
        </FormInput>

        {/* buttons */}
        <div className="flex flex-col items-start self-stretch gap-4 md:flex-row md:gap-6 md:items-end md:justify-end">
          <button className="flex items-center justify-center md:order-2 self-stretch gap-2 py-3 px-6   bg-[#24A0B5] w-full rounded-[8px] font-jeju leading-[24px] text-white hover:bg-white hover:text-[#24A0B5] transition-colors capitalize">
            Get my free ticket
          </button>
          <button className="flex md:order-1 items-center justify-center self-stretch gap-2 py-3 px-6 border border-[#24A0B5]  text-[#24A0B5] w-full rounded-[8px] font-jeju leading-[24px] hover:bg-[#24A0B5] hover:text-white transition-colors ">
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

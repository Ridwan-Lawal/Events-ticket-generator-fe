"use client";

import React, { useActionState, useEffect } from "react";
import FormHeader from "@/app/_components/form/FormHeader";
import uploadIcon from "@/public/upload.svg";
import Image from "next/image";
import FormInput from "@/app/_components/form/FormInput";
import emailIcon from "@/public/envelope.svg";
import { useTicketDetails } from "@/app/_lib/contexts/FormContext";
import { stepTwoAction } from "@/app/_lib/actions";
import toast from "react-hot-toast";
import { useImageUpload } from "@/app/_lib/hooks/useImageUpload";

export default function StepTwoForm() {
  const { ticketDetails, setTicketDetails } = useTicketDetails();

  const [state, formAction, isPending] = useActionState(stepTwoAction, null);

  const { handleDrop, handleDragOver, handleImageUpload, isImageUploading } =
    useImageUpload(setTicketDetails);

  const { errors, inputs } = state ?? {};

  useEffect(() => {
    if (state === null || state === undefined) return;
    if (state?.success) {
      toast.success("Ticket successfully printed");
      setTicketDetails((cur) => ({ ...cur, step: cur?.step + 1 }));
    }
  }, [state, setTicketDetails]);

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
      <form action={formAction} className="second-div ">
        {/*======== avatar =========*/}

        <fieldset className=" avatar-container">
          <div className="flex items-center justify-between w-full">
            <h2 className="capitalize text-color-text-1 leading-[24px] ">
              upload profile photo
            </h2>
            {errors?.avatar?.at(0) && (
              <p className="error-msg">{errors?.avatar?.at(0)}</p>
            )}
          </div>

          <div className="upload-image-container  cursor-pointer">
            <div
              className="upload-image-block relative overflow-hidden group"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {ticketDetails?.avatar && (
                <Image
                  src={ticketDetails?.avatar}
                  alt="avatar"
                  fill
                  className="object-cover "
                />
              )}
              <div
                className={`image-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isImageUploading && "opacity-100"
                } `}
              />
              <Image
                src={uploadIcon}
                alt="upload"
                quality={100}
                className={`z-50 opacity-0 group-hover:opacity-100 -mt-8 transition-opacity duration-300 ${
                  ticketDetails?.avatar ? "opacity-0" : "opacity-100"
                } `}
              />
              <label
                htmlFor="avatar"
                className={`leading-[24px] text-center text-color-text-1 z-50 ${
                  ticketDetails?.avatar ? "opacity-0" : "opacity-100"
                }  group-hover:opacity-100 transition-opacity duration-300 ${
                  isImageUploading && "opacity-100"
                } absolute  h-full flex items-center justify-center cursor-pointer`}
              >
                <span className="mt-14">
                  {isImageUploading ? (
                    <i>Uploading image...</i>
                  ) : (
                    "Drag & drop or click to upload"
                  )}
                </span>
              </label>
              <input
                type="hidden"
                name="avatarHidden"
                value={ticketDetails?.avatar}
              />
              <input
                type="file"
                id="avatar"
                name="avatar"
                autoComplete="avatar"
                aria-label="Image avatar"
                aria-required={true}
                aria-describedby={errors?.avatar?.at(0)}
                aria-invalid={errors?.avatar?.at(0) ? true : false}
                disabled={isPending}
                // aria-invalid=""
                className="hidden file:cursor-pointer cursor-pointer"
                onChange={handleImageUpload}
              />
            </div>
          </div>
        </fieldset>

        <div className="h-1 bg-color-green-750" />

        {/*========== name ===========*/}

        <FormInput error={errors?.name?.at(0)} label="Enter your name">
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={inputs?.name || ticketDetails?.name}
            disabled={isPending}
            aria-label="name"
            aria-required={true}
            aria-describedby={errors?.name?.at(0)}
            aria-invalid={errors?.name?.at(0) ? true : false}
            onChange={(e) =>
              setTicketDetails((cur) => ({ ...cur, name: e.target.value }))
            }
          />
        </FormInput>

        {/*======= email address ========*/}
        <FormInput error={errors?.email?.at(0)} label="Enter your email">
          <Image
            src={emailIcon}
            alt="email icon"
            quality={100}
            priority={true}
          />
          <input
            //   This was set to type "text" intentionally for server-side validation
            type="text"
            name="email"
            autoComplete="email"
            defaultValue={inputs?.email || ticketDetails?.email}
            id="email"
            disabled={isPending}
            aria-label="email"
            aria-required={true}
            aria-describedby={errors?.email?.at(0)}
            aria-invalid={errors?.email?.at(0) ? true : false}
            onChange={(e) =>
              setTicketDetails((cur) => ({ ...cur, email: e.target.value }))
            }
          />
        </FormInput>

        {/*======= special request =========== */}
        <FormInput error="" label="Special request?">
          <textarea
            name="request"
            id="request"
            defaultValue={inputs?.request || ticketDetails?.request}
            autoComplete="request"
            disabled={isPending}
            aria-label="special request"
            aria-required={true}
            className="h-[127px] w-full bg-transparent focus:outline-none text-white"
            onChange={(e) =>
              setTicketDetails((cur) => ({ ...cur, request: e.target.value }))
            }
          />
        </FormInput>

        {/* buttons */}
        <div className="btn-container">
          <button
            type="submit"
            disabled={isPending}
            className="btn-color-green"
          >
            {isPending ? "Creating tickets..." : "Get my free ticket"}
          </button>
          <button
            type="button"
            disabled={isPending}
            onClick={() =>
              setTicketDetails((cur) => ({ ...cur, step: cur.step - 1 }))
            }
            className="btn-transparent"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

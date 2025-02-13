"use client";

import React from "react";
import FormHeader from "@/app/_components/form/FormHeader";
import TechEvent from "@/app/_components/form/TechEvent";
import TicketTypeCard from "@/app/_components/form/TicketTypeCard";
import NoOfTickets from "@/app/_components/form/NoOfTickets";
import { useTicketDetails } from "@/app/_lib/contexts/FormContext";
import toast from "react-hot-toast";

export default function StepOneForm() {
  const { ticketDetails, setTicketDetails } = useTicketDetails();

  function handleTicketTypeError() {
    if (ticketDetails?.ticketType) {
      setTicketDetails((cur) => ({
        ...cur,
        step: cur?.step + 1,
        ticketsTypeErrorMsg: "",
      }));
    } else {
      setTicketDetails((cur: object) => ({
        ...cur,
        ticketsTypeErrorMsg: "Please select a ticket Type",
      }));
      toast.error("Please select a ticket type!");
    }
  }

  return (
    <div className="first-div">
      {/* header  */}
      {/* ticket selection */}
      <FormHeader
        headerText="ticket selection"
        step={1}
        progressWidth="w-[33.3%]"
        flexDirection="flex-col"
      />

      <div className="second-div ">
        {/* tickets event location, and date */}
        <TechEvent />

        <div className="h-1 bg-color-green-750" />

        {/* first form: ticket Type, No of tickets */}
        <div className="space-y-[32px]">
          {/*;==== select ticket type ==== */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between ">
              <p className="leading-[24px] text-color-text-1 ">
                Select Ticket Type:
              </p>
              {ticketDetails?.ticketsTypeErrorMsg && (
                <p className="error-msg">
                  {ticketDetails?.ticketsTypeErrorMsg}
                </p>
              )}
            </div>

            {/* ticket cards */}
            <div className="ticket-cards ">
              <TicketTypeCard ticketPrice="Free" accessType="regular" />

              <TicketTypeCard ticketPrice="$150" accessType="vip" />

              <TicketTypeCard ticketPrice="$500" accessType="vvip" />
            </div>
          </div>

          {/* No of tickets */}
          <NoOfTickets />

          {/* buttons */}
          <div className="btn-container">
            <button className="btn-color-green" onClick={handleTicketTypeError}>
              Next
            </button>
            <button
              className="btn-transparent"
              onClick={() =>
                setTicketDetails((cur: object) => ({
                  ...cur,
                  ticketType: "",
                  noOfTickets: 1,
                }))
              }
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

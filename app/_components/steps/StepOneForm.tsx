import React from "react";
import FormHeader from "@/app/_components/form/FormHeader";
import TechEvent from "@/app/_components/form/TechEvent";
import TicketTypeCard from "@/app/_components/form/TicketTypeCard";
import NoOfTickets from "@/app/_components/form/NoOfTickets";

export default function StepOneForm() {
  return (
    <div className="first-div">
      {/* header  */}
      {/* ticket selection */}
      <FormHeader
        headerText="ticket selection"
        step={1}
        progressWidth="w-[33.3%]"
      />

      {/* the form div, exist on desktop but not mobile */}
      {/* step 1 */}
      <div className="second-div ">
        {/* tickets event location, and date */}
        <TechEvent />

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
      </div>
    </div>
  );
}

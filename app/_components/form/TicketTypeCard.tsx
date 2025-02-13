"client";

import { useTicketDetails } from "@/app/_lib/contexts/FormContext";
import React from "react";

interface TicketTypeCardProps {
  ticketPrice: string;
  accessType: string;
}

export default function TicketTypeCard({
  ticketPrice,
  accessType,
}: TicketTypeCardProps) {
  // from the context
  const { ticketDetails, setTicketDetails } = useTicketDetails();

  return (
    <div
      onClick={() =>
        setTicketDetails((cur: object) => ({ ...cur, ticketType: accessType }))
      }
      className={`ticket-type-card not-active cursor-pointer ${
        ticketDetails?.ticketType === accessType ? "active" : "not-active"
      } `}
    >
      <h2>{ticketPrice}</h2>
      <div>
        <p>{accessType} access</p>
        <p>20/52</p>
      </div>
    </div>
  );
}

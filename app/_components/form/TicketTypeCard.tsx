import React from "react";

interface TicketTypeCardProps {
  ticketPrice: string;
  accessType: string;
}

export default function TicketTypeCard({
  ticketPrice,
  accessType,
}: TicketTypeCardProps) {
  return (
    <div className="ticket-type-card not-active">
      <h2>{ticketPrice}</h2>
      <div>
        <p>{accessType} access</p>
        <p>20/52</p>
      </div>
    </div>
  );
}

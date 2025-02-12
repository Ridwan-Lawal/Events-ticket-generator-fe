"use client";

import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function NoOfTickets() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const onToggleDropdown = () => setIsDropdownOpen((cur: boolean) => !cur);

  useEffect(() => {
    function closeTicketNoDropdownOnBlur(e: Event) {
      console.log(!e?.target?.closest(".tickets-no-dropdown"));
      if (!e?.target?.closest(".tickets-no-dropdown")) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("click", closeTicketNoDropdownOnBlur);

    return () =>
      document.removeEventListener("click", closeTicketNoDropdownOnBlur);
  }, []);

  return (
    <div className="space-y-2.5">
      <p className="leading-[24px] text-color-text-1 ">Number of Tickets:</p>

      <div className="flex flex-col gap-3 tickets-no-dropdown">
        <div
          className="flex items-center p-3 gap-2 border border-color-green-750 rounded-[12px] "
          onClick={onToggleDropdown}
        >
          <p className="text-white leading-[24px] flex-grow">1</p>
          <ChevronDown
            className={`text-white size-6 cursor-pointer ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            } transition-transform `}
          />
        </div>

        {isDropdownOpen && (
          <div className="">
            <ul className=" bg-color-green-750 p-3 rounded-[12px]  w-full">
              {Array.from({ length: 5 }, (_, i) => i + 1).map((ticketNo) => (
                <li
                  className="text-white leading-[24px] hover:cursor-pointer py-2 px-2 hover:bg-color-green-600 transition"
                  key={ticketNo}
                >
                  {ticketNo}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

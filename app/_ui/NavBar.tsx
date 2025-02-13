import React from "react";
import logo from "@/public/logo.png";
import arrowIcon from "@/public/arrow.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav>
      <div>
        <Image src={logo} alt="Logo" quality={100} priority={true} />
      </div>

      <ul className="hidden md:flex md:items-center md:gap-4">
        {/* events my tickets and about project */}
        {["events", "my tickets", "about projects"].map((text: string) => (
          <li
            key={text}
            className="font-jeju text-[#b3b3b3] text-lg capitalize"
          >
            {text}
          </li>
        ))}
      </ul>

      <button className="font-jeju hover:bg-[#24A0B5] hover:border hover:border-[#d9d9d9] transition-all ease-in-out  hover:text-[#d9d9d9]">
        <span>my tickets</span>
        <Image src={arrowIcon} alt="arrow-icon" quality={100} priority={true} />
      </button>
    </nav>
  );
}

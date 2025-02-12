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

      <button className="font-jeju hover:bg-opacity-95 transition-all ease-in-out">
        <span>my tickets</span>
        <Image src={arrowIcon} alt="arrow-icon" quality={100} priority={true} />
      </button>
    </nav>
  );
}

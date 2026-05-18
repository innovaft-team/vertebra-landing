import Image from "next/image";
import React from "react";
import { navLinks } from "../common/Helper";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-center ">
        <div className="flex items-center gap-[4.87px]">
          <a
            href="#"
            className="flex  gap-[4.7px] bg-light-gray rounded-medium px-[7.31px] h-[24.35px] items-center"
          >
            <Image
              src="/images/Webp/Logo.webp"
              alt="Logo"
              width={9.64}
              height={12.18}
              className="object-cover h-[12.18px] w-[9.64px]"
            />
            <span className="font-medium text-[9.74px] leading-[103%] text-charcoal">
              Vertebra
            </span>
          </a>
          <div className="bg-off-white px-[14.61px] flex items-center gap-[12.18px]  h-[25.18px] rounded-medium">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-[8.52px] leading-[153%] fonnt-normal"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

"use client";

import Image from "next/image";
import React from "react";
import { navLinks } from "../common/Helper";
import { motion } from "motion/react";

const navContainer: any = {
  hidden: { opacity: 0, y: -20, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const navItem: any = {
  hidden: { opacity: 0, y: -10, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const Navbar = () => {
  return (
    <>
      <motion.nav
        variants={navContainer}
        initial="hidden"
        animate="show"
        className="flex items-center justify-center "
      >
        <div className="flex items-center gap-[4.87px]">
          {/* Left logo pill */}
          <motion.a
            variants={navItem}
            whileHover={{
              y: -1,
              scale: 1.02,
              boxShadow: "0px 8px 20px -6px rgba(0,0,0,0.12)",
              backgroundColor: "rgba(0,0,0,0.02)",
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any}
            href="#"
            className="flex  gap-[4.7px] bg-light-gray rounded-medium px-[7.31px] h-[24.35px] items-center"
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" } as any}
              className="flex items-center justify-center"
            >
              <Image
                src="/images/Webp/Logo.webp"
                alt="Logo"
                width={9.64}
                height={12.18}
                className="object-cover h-[12.18px] w-[9.64px]"
              />
            </motion.div>
            <span className="font-medium text-[9.74px] leading-[103%] text-charcoal">
              Vertebra
            </span>
          </motion.a>

          {/* Right navigation pill */}
          <motion.div
            variants={navItem}
            whileHover={{
              y: -1,
              scale: 1.01,
              boxShadow: "0px 8px 20px -6px rgba(0,0,0,0.08)",
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any}
            className="bg-off-white px-[14.61px] flex items-center gap-[12.18px]  h-[25.18px] rounded-medium"
          >
            {navLinks.map((item, index) => (
              <motion.a
                key={index}
                variants={navItem}
                whileHover={{ y: -1, scale: 1.02, opacity: 0.7 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] } as any}
                href="#"
                className="text-[8.52px] leading-[153%] fonnt-normal relative group"
              >
                {item}
                {/* Smooth left-to-right animated underline on hover */}
                <span className="absolute -bottom-[1px] left-0 w-full h-[0.7px] bg-charcoal/50 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;

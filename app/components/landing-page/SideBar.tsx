"use client";

import React from "react";
import { CartIcons, CornerIcons, LInkIcons } from "../common/Icons";
import Image from "next/image";
import { motion } from "motion/react";

const containerVariants: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const SideBar = () => {
  return (
    <>
      <motion.article
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h3
          variants={itemVariants}
          className="w-fit bg-charcoal-light relative px-[9.74px] py-[4.87px] uppercase font-fragment tracking-[-2%] text-[8.52px] leading-[153%] text-charcoal"
        >
          SOUTIEN SPINAL INTELLIGENT
          <span className="absolute top-0 left-0">
            <CornerIcons />
          </span>
          <span className="absolute top-0 right-0 rotate-90">
            <CornerIcons />
          </span>
          <span className="absolute bottom-0 right-0 rotate-180">
            <CornerIcons />
          </span>
          <span className="absolute bottom-0 left-0 rotate-270">
            <CornerIcons />
          </span>
        </motion.h3>
        <motion.h1
          variants={itemVariants}
          className="text-[38.96px] mt-[14.71px] tracking-[-3%] text-charcoal font-medium leading-[99.9%] max-w-83"
        >
          Conçu pour soutenir la posture naturelle du corps humain
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-[9.74px] text-charcoal/80 my-[14.61px] font-normal leading-[137%] max-w-67.5"
        >
          Une nouvelle génération de soutien spinal alimentée par une
          intelligence neuro-adaptative et une mémoire biométrique, qui ajuste
          votre posture en temps rée.
        </motion.p>
        <motion.div variants={itemVariants} className="flex items-center gap-[4.87px]">
          <motion.button
            whileHover={{ scale: 1.04, y: -2, boxShadow: "0px 8px 15px -3px rgba(37,99,235,0.3)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 } as any}
            className="bg-bright-blue cursor-pointer leading-[148%] text-white text-[8.52px] font-medium py-[6.9px] px-[12.18px] rounded-medium"
          >
            Découvrir l’expérience
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04, y: -2, backgroundColor: "rgba(0,0,0,0.08)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 } as any}
            className="bg-charcoal/7 text-charcoal/80 cursor-pointer leading-[148%] text-[8.52px] font-medium py-[6.9px] px-[12.18px] rounded-medium transition-colors duration-300"
          >
            En savoir plus
          </motion.button>
        </motion.div>
        <motion.div variants={itemVariants} className="flex items-center mt-[7.31px] gap-[4.87px]">
          <CartIcons />
          <span className="text-charcoal/80 text-[8.52px] leading-[153%] font-normal">
            Aucune carte bancaire requise
          </span>
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -4, boxShadow: "0px 15px 30px -5px rgba(0, 0, 0, 0.08)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 } as any}
          className="flex items-center gap-[17.64px] bg-white/60 border-[0.74px] rounded-[5.88px] border-white mt-[38.96px] p-[5.88px] cursor-pointer transition-colors duration-500 hover:bg-white/90 group"
        >
          <div className="bg-white w-[88.22px] h-[120.17px] flex items-center justify-center rounded-[2.94px] overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] } as any}
            >
              <Image
                src="/images/png/skeleton.png"
                alt="Tech"
                width={100}
                height={100}
                className="object-cover h-[102.92px] w-[82.92px]"
              />
            </motion.div>
          </div>
          <div className="">
            <h4 className="text-[11.75px] text-charcoal font-medium leading-[145%] group-hover:text-bright-blue transition-colors duration-300">
              Vertebra X
            </h4>
            <p className="text-[10.29px] text-charcoal/60 font-normal leading-[146%] max-w-56 mt-[5.88px]">
              Un système spinal intelligent conçu pour améliorer la posture,
              optimiser le mouvement et préserver durablement la santé
              musculo-squelettique.
            </p>
            <motion.a
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 } as any}
              className="text-charcoal text-[10.29px] leading-[146%] flex items-center gap-[1.4px] mt-[17.63px] font-medium group-hover:text-bright-blue transition-colors duration-300"
              href="#"
            >
              <span className="relative overflow-hidden">
                En savoir plus
                <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-bright-blue origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
              </span>
              <LInkIcons />
            </motion.a>
          </div>
        </motion.div>
      </motion.article>
    </>
  );
};

export default SideBar;

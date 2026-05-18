import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { BatteryIcons, GradientIcons, HeighIcons, SpinalIcons, TechnologieIcons } from "../common/Icons";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <main className="h-screen flex items-center justify-center w-full">
        <div
          className="w-full max-w-[876.62px] mx-auto pt-[24.35px] 
      pl-[74.27px] shadow-[0px_0px_30px_2px_rgba(0,0,0,0.25)] rounded-[22.63px] relative overflow-hidden"
        >
          <span className="absolute bottom-0 left-0 -z-10">
            {" "}
            <GradientIcons />
          </span>
          <Navbar />
          <div className="flex items-center justify-between">
            <SideBar />
            <div className="">
              <Image
                src="/images/svg/main.svg"
                alt="Tech"
                width={100}
                height={100}
                className="object-cover w-full h-147 max-w-118.5 translate-y-18"
              />
              <div className="flex items-center gap-[7.31px] absolute top-40.25 right-16.75">
                <span className="bg-dark-gray/60 rounded-full grid place-content-center p-1 ">
                  <span className="bg-white size-[6.9px] rounded-full"></span>
                </span>
                <div className=" bg-overlay-dark/25 border-[0.61px] border-white/25 backdrop-blur-[12.26px] rounded-[3.65px] py-[4.87px] px-[7.31px]">
                  <p className="flex items-center text-white text-[9.74px] leading-[153%] gap-[3.65px] font-normal">
                    <SpinalIcons />
                    Alignement spinal optimisé
                  </p>
                  <p className="flex items-center gap-[4.87px] mt-[2.44px]">
                    <span className="py-[1.2px] px-[2.44px] bg-white/10 rounded-[1.22px] text-white text-[8.52px] leading-[153%]">
                      +4 cm
                    </span>
                    <span className="text-white/50 text-[8.52px] leading-[153%] ">
                      de taille en moyenne
                    </span>
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="flex items-center flex-row-reverse gap-[7.31px] absolute top-94 right-50">
                <span className="bg-warm-brown rounded-full grid place-content-center p-1 ">
                  <span className="bg-white size-[6.9px] rounded-full"></span>
                </span>
                <div className=" bg-overlay-dark/25 border-[0.61px] border-white/25 backdrop-blur-[12.26px] rounded-[3.65px] py-[4.87px] px-[7.31px]">
                  <p className="flex items-center text-white text-[9.74px] leading-[153%] gap-[3.65px] font-normal">
                    <TechnologieIcons />
                    Technologie neuro-adaptative
                  </p>
                  <p className="flex items-center gap-[4.87px] mt-[2.44px]">
                    <span className="py-[1.2px] px-[2.44px] gap-[2.44px] flex items-center bg-white/10 Flex rounded-[1.22px] text-white text-[8.52px] leading-[153%]">
                      <HeighIcons />
                     85%
                    </span>
                    <span className="text-white/50 text-[8.52px] leading-[153%] ">
                      Technologie neuro-adaptative
                    </span>
                  </p>
                </div>
              </div>
              {/*  */}
                  <div className="flex items-center gap-[7.31px] absolute top-108 right-12">
                <span className="bg-warm-brown rounded-full grid place-content-center p-1 ">
                  <span className="bg-white size-[6.9px] rounded-full"></span>
                </span>
                <div className=" bg-overlay-dark/25 border-[0.61px] border-white/25 backdrop-blur-[12.26px] rounded-[3.65px] py-[4.87px] px-[7.31px]">
                  <p className="flex items-center text-white text-[9.74px] leading-[153%] gap-[3.65px] font-normal">
                    <BatteryIcons />
               Batterie longue durée
                  </p>
                  <p className="flex items-center gap-[4.87px] mt-[2.44px]">
                    <span className="py-[1.2px] px-[2.44px] gap-[2.44px] flex items-center bg-white/10 Flex rounded-[1.22px] text-white text-[8.52px] leading-[153%]">
                    9H
                    </span>
                    <span className="text-white/50 text-[8.52px] leading-[153%] ">
                                        d’autonomie active

                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;

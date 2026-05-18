import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import {
  BatteryIcons,
  GradientIcons,
  HeighIcons,
  MemoireIcons,
  SpinalIcons,
  TechnologieIcons,
  CartIcons,
  CornerIcons,
  LInkIcons,
} from "../common/Icons";
import Image from "next/image";
import { navLinks } from "../common/Helper";

// Perfectly Centered mobile Navbar (< 768px)
const NavbarMobile = () => {
  return (
    <nav className="flex items-center justify-center gap-3">
      <a
        href="#"
        className="flex gap-[4.7px] bg-light-gray rounded-medium px-[7.31px] h-[24.35px] items-center w-fit"
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
      <div className="bg-off-white px-[10px] sm:px-[14.61px] flex items-center justify-center gap-[8px] sm:gap-[12.18px] h-[25.18px] rounded-medium w-fit max-w-full overflow-x-auto whitespace-nowrap">
        {navLinks.map((item, index) => (
          <a
            key={index}
            href="#"
            className="text-[8.52px] leading-[153%] font-normal"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

// Perfectly Centered mobile Sidebar (< 768px)
const SideBarMobile = () => {
  return (
    <article className="mt-6 w-full flex flex-col items-center text-center">
      <h3 className="w-fit bg-charcoal-light relative px-[9.74px] py-[4.87px] uppercase font-fragment tracking-[-2%] text-[8.52px] leading-[153%] text-charcoal">
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
      </h3>
      <h1 className="text-[28px] mt-[14.71px] tracking-[-3%] text-charcoal font-medium leading-[99.9%] max-w-83 mx-auto">
        Conçu pour soutenir la posture naturelle du corps humain
      </h1>
      <p className="text-[9.74px] text-charcoal/80 my-[14.61px] font-normal leading-[137%] max-w-67.5 mx-auto">
        Une nouvelle génération de soutien spinal alimentée par une intelligence
        neuro-adaptative et une mémoire biométrique, qui ajuste votre posture en
        temps rée.
      </p>
      <div className="flex items-center justify-center gap-[4.87px]">
        <button className="bg-bright-blue cursor-pointer leading-[148%] text-white text-[8.52px] font-medium py-[6.9px] px-[12.18px] rounded-medium">
          Découvrir l’expérience
        </button>
        <button className="bg-charcoal/7 text-charcoal/80 cursor-pointer leading-[148%] text-[8.52px] font-medium py-[6.9px] px-[12.18px] rounded-medium">
          En savoir plus
        </button>
      </div>
      <div className="flex items-center justify-center mt-[7.31px] gap-[4.87px]">
        <CartIcons />
        <span className="text-charcoal/80 text-[8.52px] leading-[153%] font-normal">
          Aucune carte bancaire requise
        </span>
      </div>
      <div className="flex items-center gap-[17.64px] bg-white/60 border-[0.74px] rounded-[5.88px] border-white mt-8 p-[5.88px] text-left mx-auto max-w-[340px]">
        <div className="bg-white w-[88.22px] h-[120.17px] flex items-center justify-center rounded-[2.94px] shrink-0">
          <Image
            src="/images/png/skeleton.png"
            alt="Tech"
            width={100}
            height={100}
            className="object-cover h-[102.92px] w-[82.92px]"
          />
        </div>
        <div className="">
          <h4 className="text-[11.75px] text-charcoal font-medium leading-[145%]">
            Vertebra X
          </h4>
          <p className="text-[10.29px] text-charcoal/60 font-normal leading-[146%] max-w-56 mt-[5.88px]">
            Un système spinal intelligent conçu pour améliorer la posture,
            optimiser le mouvement et préserver durablement la santé
            musculo-squelettique.
          </p>
          <a
            className="text-charcoal text-[10.29px] leading-[146%] flex items-center gap-[1.4px] mt-[17.63px]"
            href="#"
          >
            En savoir plus
            <LInkIcons />
          </a>
        </div>
      </div>
    </article>
  );
};

const Hero = () => {
  return (
    <>
      {/* ========================================================================= */}
      {/* DESKTOP VIEW (>= 768px): 100% Original Code (No Shifts, Pixel-Perfect Gap) */}
      {/* ========================================================================= */}
      <div className="hidden md:block">
        <main className="h-screen flex items-center justify-center w-full">
          <div
            className="w-full max-w-[876.62px] mx-auto pt-6 pl-10 lg:pt-[24.35px] 
        lg:pl-[74.27px] shadow-[0px_0px_30px_2px_rgba(0,0,0,0.25)] rounded-[22.63px] relative overflow-hidden"
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
                  className="object-cover w-full h-147 max-w-118.5 translate-y-18 pointer-events-none [clip-path:inset(2px_0_0_0)]"
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
                {/*  */}
                <div className="flex items-center gap-[7.31px] absolute top-130 right-28">
                  <span className="bg-warm-brown rounded-full grid place-content-center p-1 ">
                    <span className="bg-white size-[6.9px] rounded-full"></span>
                  </span>
                  <div className=" bg-overlay-dark/25 border-[0.61px] border-white/25 backdrop-blur-[12.26px] rounded-[3.65px] py-[4.87px] px-[7.31px]">
                    <p className="flex items-center text-white text-[9.74px] leading-[153%] gap-[3.65px] font-normal">
                      <MemoireIcons />
                      Mémoire biométrique
                    </p>
                    <p className="flex items-center gap-[4.87px] mt-[2.44px]">
                      <span className="py-[1.2px] px-[2.44px] gap-[2.44px] flex items-center bg-white/10 Flex rounded-[1.22px] text-white text-[8.52px] leading-[153%]">
                        <HeighIcons />
                        99%
                      </span>
                      <span className="text-white/50 text-[8.52px] leading-[153%] ">
                        de constance posturale
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE VIEW (< 768px): Dynamically Scaled & Scrollable Responsive View     */}
      {/* ========================================================================= */}
      <div className="block md:hidden">
        <main className="min-h-screen flex items-center justify-center w-full py-4 px-4">
          <div className="w-full max-w-[876.62px] mx-auto pt-[24.35px] px-6 shadow-[0px_0px_30px_2px_rgba(0,0,0,0.25)] rounded-[22.63px] relative overflow-hidden">
            <span className="absolute bottom-0 left-0 -z-10">
              {" "}
              <GradientIcons />
            </span>
            <NavbarMobile />
            <div className="flex flex-col items-center justify-between gap-8 mt-6">
              <SideBarMobile />

              <div className="w-full flex justify-center overflow-hidden h-[340px] sm:h-[450px] select-none mt-0">
                <div className="relative w-[474px] h-[588px] origin-top scale-[0.58] sm:scale-[0.76] -translate-y-8 shrink-0">
                  <Image
                    src="/images/svg/main.svg"
                    alt="Tech"
                    width={100}
                    height={100}
                    className="object-cover w-full h-147 max-w-118.5 translate-y-18 pointer-events-none [clip-path:inset(2px_0_0_0)]"
                  />
                  <div className="flex items-center gap-[7.31px] absolute top-40.25 right-16.75">
                    <span className="bg-dark-gray/60 rounded-full grid place-content-center p-1 ">
                      <span className="bg-white size-[6.9px] rounded-full"></span>
                    </span>
                    <div className=" bg-overlay-dark/25 border-[0.61px] border-white/25 backdrop-blur-[12.26px] rounded-[3.65px] py-[4.87px] px-[7.31px]">
                      <p className="flex items-center text-white text-[9.74px] leading-[153%] gap-[3.65px] font-normal whitespace-nowrap">
                        <SpinalIcons />
                        Alignement spinal optimisé
                      </p>
                      <p className="flex items-center gap-[4.87px] mt-[2.44px] whitespace-nowrap">
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
                      <p className="flex items-center text-white text-[9.74px] leading-[153%] gap-[3.65px] font-normal whitespace-nowrap">
                        <TechnologieIcons />
                        Technologie neuro-adaptative
                      </p>
                      <p className="flex items-center gap-[4.87px] mt-[2.44px] whitespace-nowrap">
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
                      <p className="flex items-center text-white text-[9.74px] leading-[153%] gap-[3.65px] font-normal whitespace-nowrap">
                        <BatteryIcons />
                        Batterie longue durée
                      </p>
                      <p className="flex items-center gap-[4.87px] mt-[2.44px] whitespace-nowrap">
                        <span className="py-[1.2px] px-[2.44px] gap-[2.44px] flex items-center bg-white/10 Flex rounded-[1.22px] text-white text-[8.52px] leading-[153%]">
                          9H
                        </span>
                        <span className="text-white/50 text-[8.52px] leading-[153%] ">
                          d’autonomie active
                        </span>
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex items-center gap-[7.31px] absolute top-130 right-28">
                    <span className="bg-warm-brown rounded-full grid place-content-center p-1 ">
                      <span className="bg-white size-[6.9px] rounded-full"></span>
                    </span>
                    <div className=" bg-overlay-dark/25 border-[0.61px] border-white/25 backdrop-blur-[12.26px] rounded-[3.65px] py-[4.87px] px-[7.31px]">
                      <p className="flex items-center text-white text-[9.74px] leading-[153%] gap-[3.65px] font-normal whitespace-nowrap">
                        <MemoireIcons />
                        Mémoire biométrique
                      </p>
                      <p className="flex items-center gap-[4.87px] mt-[2.44px] whitespace-nowrap">
                        <span className="py-[1.2px] px-[2.44px] gap-[2.44px] flex items-center bg-white/10 Flex rounded-[1.22px] text-white text-[8.52px] leading-[153%]">
                          <HeighIcons />
                          99%
                        </span>
                        <span className="text-white/50 text-[8.52px] leading-[153%] ">
                          de constance posturale
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Hero;

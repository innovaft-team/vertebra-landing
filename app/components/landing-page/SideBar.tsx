import React from "react";
import { CartIcons, CornerIcons, LInkIcons } from "../common/Icons";
import Image from "next/image";

const SideBar = () => {
  return (
    <>
      <article className="mt-[57.88px]">
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
        <h1 className="text-[38.96px] mt-[14.71px] tracking-[-3%] text-charcoal font-medium leading-[99.9%] max-w-83">
          Conçu pour soutenir la posture naturelle du corps humain
        </h1>
        <p className="text-[9.74px] text-charcoal/80 my-[14.61px] font-normal leading-[137%] max-w-67.5">
          Une nouvelle génération de soutien spinal alimentée par une
          intelligence neuro-adaptative et une mémoire biométrique, qui ajuste
          votre posture en temps rée.
        </p>
        <div className="flex items-center gap-[4.87px]">
          <button className="bg-bright-blue cursor-pointer leading-[148%] text-white text-[8.52px] font-medium py-[6.9px] px-[12.18px] rounded-medium">
            Découvrir l’expérience
          </button>
          <button className="bg-charcoal/7 text-charcoal/80 cursor-pointer leading-[148%] text-[8.52px] font-medium py-[6.9px] px-[12.18px] rounded-medium">
            En savoir plus
          </button>
        </div>
        <div className="flex items-center mt-[7.31px] gap-[4.87px]">
          <CartIcons />
          <span className="text-charcoal/80 text-[8.52px] leading-[153%] font-normal">
            Aucune carte bancaire requise
          </span>
        </div>
        <div className="flex items-center gap-[17.64px] bg-white/60 border-[0.74px] rounded-[5.88px] border-white mt-[38.96px] p-[5.88px]">
          <div className="bg-white w-[88.22px] h-[120.17px] flex items-center justify-center rounded-[2.94px]">
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
    </>
  );
};

export default SideBar;

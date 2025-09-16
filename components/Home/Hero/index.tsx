"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import BuyCrypto from "./buy-form";
import SellCrypto from "./sell-form";
import { ArrowRight } from 'lucide-react';
import CardSlider from "./slider";
import { useEffect, useRef, useState, useCallback } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import BrandLogo from "../BrandLogo";

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false);
  const [isSelling, setIsSellingOpen] = useState(false);
  const BuyRef = useRef<HTMLDivElement>(null);
  const SellRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (BuyRef.current && !BuyRef.current.contains(event.target as Node)) {
        setIsBuyingOpen(false);
      }
      if (SellRef.current && !SellRef.current.contains(event.target as Node)) {
        setIsSellingOpen(false);
      }
    },
    [BuyRef, SellRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    document.body.style.overflow = isBuying || isSelling ? "hidden" : "";
  }, [isBuying, isSelling]);

  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative py-24 pt-48 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div {...leftAnimation} className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <div className="flex gap-6 items-center lg:justify-start justify-center">
                <div className="py-1.5 px-4 flex items-center bg-primary/10 rounded-full border border-white/10">
                  <div className="relative flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-stone-500"></span>
                  </div>
                  <span className="text-[#D9D9D9] font-medium">
                    Future of trading
                  </span>
                </div>
              </div>
              <h1 className="xl:text-[72px] lg:text-6xl md:text-54 sm:text-5xl text-4xl md:text-start text-center font-extrabold tracking-tight leading-tight bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent">
                Trading No Drama
              </h1>
              <p className="text-white">
                Ciptakan pertumbuhan konsisten melalui strategi 
                  non-spekulatif berbasis algoritma, yang dirancang untuk 
                    trader baru maupun berpengalaman.
              </p>
            </div>
            <div className="flex items-center md:justify-start justify-center gap-8">
              <Link
                href={"/#work"}
                className="bg-primary hover:bg-primary/80 flex items-center gap-2 border border-primary rounded-lg font-semibold text-[#D9D9D9] py-3 px-7 cursor-pointer"
              >
                Explore More
                <ArrowRight  />
              </Link>
            </div>
          </motion.div>
          <motion.div {...rightAnimation} className="">
            <div className="w-full h-full">
              <Image
                src="/images/hero/Frame-35-new.png"
                alt="Banner"
                width={584}
                height={582}
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
        {/* <BrandLogo /> */}
        {/* <CardSlider /> */}
      </div>

      {/* Modals for Buy and Sell */}
      {/* {isBuying && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
          <div
            ref={BuyRef}
            className="relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-dark_grey/90 backdrop-blur-md"
          >
            <button
              onClick={() => setIsBuyingOpen(false)}
              className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close Buy Modal"
            >
              <Icon
                icon="tabler:currency-xrp"
                className="text-white hover:text-primary text-24 inline-block me-2"
              />
            </button>
            <BuyCrypto />
          </div>
        </div>
      )} */}
      {/* {isSelling && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
          <div
            ref={SellRef}
            className="relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-dark_grey/90 backdrop-blur-md"
          >
            <button
              onClick={() => setIsSellingOpen(false)}
              className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close Sell Modal"
            >
              <Icon
                icon="tabler:currency-xrp"
                className="text-white hover:text-primary text-24 inline-block me-2"
              />
            </button>
            <SellCrypto />
          </div>
        </div>
      )} */}
    </section>
  );
};

export default Hero;

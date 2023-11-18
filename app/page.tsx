"use client";
import AsideNavbar from "@/components/AsideNavbar";
import Bento from "@/components/Bento";
import { Contacto } from "@/components/contact/Contact";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Background from "@/components/background";
import { useScroll, useViewportScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [hookedYPostion, setHookedYPosition] = useState(0);
  useEffect(() => {
    // hook into the onChange, store the current value as state.
    scrollYProgress.onChange((v) => setHookedYPosition(v));
  }, [scrollYProgress]); //make sure to re-subscriobe when scrollYProgress changes

  return (
    <main className="flex flex-col overflow-x-hidden">
      <Navbar />
      {/*<AsideNavbar actualY={hookedYPostion} />*/}
      <div className="flex flex-col lg:w-screen max-w-[1000px] mx-auto">
        <div
          id="inicio"
          className="h-screen w-full flex md:justify-center justify-start items-center"
        >
          <Hero />
        </div>

        <div id="servicios" className="w-full">
          <Services />
        </div>

        <div id="nosotros" className="w-full mt-[4rem]">
          <Bento />
        </div>

        <div id="contacto" className="w-full mt-[4rem] flex justify-center items-center">
          <Contacto />
        </div>
      </div>
      <Footer />
    </main>
  );
}

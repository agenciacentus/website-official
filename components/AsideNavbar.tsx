"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "../public/logo.svg";

import { motion, useScroll } from "framer-motion";
import { NAVBAR_ITEMS } from "@/lib/constants/navbar-items";

export default function AsideNavbar({ actualY }: { actualY: number }) {
  const section = 1 / NAVBAR_ITEMS.length;

  return (
    <nav className="fixed max-w-[15rem] h-screen bg-transparent">
      <div className="w-full h-full p-8 flex flex-col justify-between">
        <Image src={Logo} height={200} width={200} alt="Acentus Logo"></Image>

        <ul className="text-lg">
          {NAVBAR_ITEMS.map((item) => {
            const value = NAVBAR_ITEMS.indexOf(item);

            if (actualY >= value * section && actualY < (value + 1) * section) {
              return (
                <motion.li
                  className="text-xl whitespace-nowrap p-1 cursor-pointer transition-all"
                  initial={{ opacity: 0, x: 100 }}
                  transition={{
                    duration: 0.5,
                    stiffness: 1000,
                    type: "tween",
                    bounce: 0.5,
                  }}
                  animate={{ opacity: 1, x: 100 }}
                  exit={{ opacity: 0, x: 100 }}
                  key={item.path}
                  onClick={() => {
                    console.log(item.path);
                    console.log(document.getElementById(item.path));
                    document
                      .getElementById(item.path)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  - {item.label}
                </motion.li>
              );
            } else {
              return (
                <motion.li
                className=" cursor-pointer p-1 transition-all"
                  onClick={() => {
                    console.log(item.path);
                    console.log(document.getElementById(item.path));
                    document
                      .getElementById(item.path)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  key={item.path}
                >
                  {item.label}
                </motion.li>
              );
            }
          })}
        </ul>

        <div>Acentus - 2023</div>
      </div>
    </nav>
  );
}

import Image from "next/image";
import Logo from "../public/logo.svg";

import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <nav className="fixed w-full">
      <motion.div
        className="p-8 flex justify-between mx-auto max-w-[1800px]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          stiffness: 1000,
          type: "tween",
          bounce: 0.2,
          delay: 0.1,
          duration: 0.5,
        }}
      >
        <Image
          src={Logo}
          alt="Acentus Logo"
          className="w-[150px] h-[28px]"
        ></Image>

        <Button
          variant="outline"
          onClick={() => {
            document
              .getElementById("contacto")
              ?.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className=" text-lg border-black hover:border-white hover:bg-primary hover:text-white"
        >
          Comienza ahora <ArrowRightIcon className="w-4 h-8 ml-2" />
        </Button>
      </motion.div>
    </nav>
  );
}

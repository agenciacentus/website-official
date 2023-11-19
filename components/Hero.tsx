"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center md:space-y-8 space-y-4 px-4 md:p-0">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            stiffness: 1000,
            type: "tween",
            bounce: 0.2,
            duration: 0.5,
          }}
          className="max-w-[1000px] md:text-[60px] text-[40px] text-black font-medium md:leading-[4rem] leading-[2.5rem] text-center md:mt-[70px]"
        >
          <p>
            Haz tu proyecto realidad, con la mejor{" "}
            <span className="text-primary">tecnología</span> y los mejores{" "}
            <span className="text-primary">profesionales</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            stiffness: 1000,
            type: "tween",
            bounce: 0.2,
            delay: 0.1,
            duration: 0.5,
          }}
          className="max-w-[800px]"
        >
          <div className="font-medium text-[#464545] md:text-[18px] text-normal text-center leading-6">
            <h1>
              No solo creamos software, damos vida a visiones. Somos más que una
              empresa de desarrollo de software; somos arquitectos de soluciones.
              digitales
            </h1>{" "}
            <h2>
              ¿Tienes una idea innovadora? Nosotros la convertimos en una realidad tecnológica.
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            stiffness: 1000,
            type: "tween",
            bounce: 0.2,
            delay: 0.2,
            duration: 0.5,
          }}
          className="flex flex-col justify-center items-center space-y-2 mb-5 mt-4 md:mt-0"
        >
          <Button
            variant="outline"
            className=" text-lg border-black hover:border-white hover:bg-primary hover:text-white"
            onClick={() => {
              document
                .getElementById("servicios")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver servicios <ArrowRightIcon className="w-4 h-8 ml-2" />
          </Button>

          <p className="text-[13px] text-[#817e7e] font-medium">
            Respuesta en menos de un día
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            stiffness: 1000,
            type: "tween",
            delay: 0.5,
            bounce: 0.2,
            duration: 0.5,
          }}
          className="font-medium flex flex-col items-center"
        >
          <p className="text-black text-[17px]">
            There is no words to describe this.
          </p>
          <p className="text-[#817e7e] text-[15px]">Luis, Pumpink Inc.</p>
          <Avatar className="mt-2">
            <AvatarImage src="https://pbs.twimg.com/profile_images/1451323399830220808/oa3J89Ck_400x400.jpg" />
            <AvatarFallback>JK</AvatarFallback>
          </Avatar>
        </motion.div>
      </div>
    </section>
  );
}

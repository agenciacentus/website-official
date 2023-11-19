import { motion } from "framer-motion";
import { Card, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";
import { ConsultationFormContact } from "./ConsultationFormContact";
import { PriceFormContact } from "./PriceFormContact";

export function Contacto() {
  return (
    <section className=" flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          stiffness: 1000,
          type: "tween",
          bounce: 0.2,
          duration: 0.5,
        }}
        className="max-w-[700px] text-[35px] text-black font-medium leading-10 text-center mt-[70px]"
      >
        <h2 className="mb-10 md:ml-4 text-black text-4xl">
          ¡Obtén <span className="text-primary">respuestas</span> a tus
          preguntas!
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          stiffness: 1000,
          type: "tween",
          bounce: 0.2,
          duration: 0.5,
        }}
        className="md:grid md:grid-cols-2 h-fit flex flex-col gap-8 p-4 md:p-0"
      >
        <ConsultationFormContact />

        <PriceFormContact />
      </motion.div>
    </section>
  );
}

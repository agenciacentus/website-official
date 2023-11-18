import Image from "next/image";

import Request from "@/public/bento/request.webp";
import Revision from "@/public/bento/revision.png";
import Pause from "@/public/bento/pause.png";
import Designers from "@/public/bento/designers.png";
import Async from "@/public/bento/async-communication.png";
import Team from "@/public/bento/team.png";
import { motion } from "framer-motion";
import { TimeLine } from "./TimeLine";

export default function Bento() {
  return (
    <section className="flex flex-col items-center">
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
          ¿Cómo <span className="text-primary">trabajamos</span> nosotros?
        </h2>
      </motion.div>

      <div className="md:grid md:grid-cols-3 flex flex-col gap-8 p-4 md:p-0">
        <div className="md:col-span-1">
          <TimeLine />
        </div>

        <ul className="md:grid md:col-span-2 md:grid-cols-2 flex flex-col gap-8 items-center justify-center md:space-x-10">
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            transition={{
              duration: 0.5,
              stiffness: 1000,
              type: "tween",
              bounce: 0.5,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center md:relative left-4"
          >
            <Image
              src={Request}
              height={50}
              width={50}
              alt="Request Icon"
              className="py-5"
            ></Image>

            <div className="space-y-2">
              <h1 className="text-center text-[17px] text-black font-medium">
                Plazos de entrega rápidos
              </h1>
              <p className="text-center text-[16px] text-[#464545] font-medium max-w-[250px]">
                Recibe tu proyecto en el tiempo establecido. Por cada día de
                retraso, te descontamos el 10% del valor total.
              </p>
            </div>
          </motion.li>

          {/* Revision */}
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            transition={{
              duration: 0.5,
              stiffness: 1000,
              type: "tween",
              bounce: 0.5,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <Image
              src={Revision}
              height={50}
              width={50}
              alt="Request Icon"
              className="py-5"
            ></Image>

            <div className="space-y-2">
              <h1 className="text-center text-[17px] text-black font-medium">
                Revisiones ilimitadas
              </h1>
              <p className="text-center text-[16px] text-[#464545] font-medium max-w-[250px]">
                No te preocupes por el número de revisiones, te ofrecemos
                revisiones ilimitadas hasta que estés satisfecho.
              </p>
            </div>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: 100 }}
            transition={{
              duration: 0.5,
              stiffness: 1000,
              type: "tween",
              bounce: 0.5,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <Image
              src={Pause}
              height={50}
              width={50}
              alt="Request Icon"
              className="py-5"
            ></Image>

            <div className="space-y-2">
              <h1 className="text-center text-[17px] text-black font-medium">
                Cancela en cualquier momento
              </h1>
              <p className="text-center text-[16px] text-[#464545] font-medium max-w-[250px]">
                Si no estás satisfecho con el progreso del proyecto, puedes
                cancelar y te devolvemos el 30% de tu dinero.
              </p>
            </div>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: 100 }}
            transition={{
              duration: 0.5,
              stiffness: 1000,
              type: "tween",
              bounce: 0.5,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <Image
              src={Designers}
              height={50}
              width={50}
              alt="Request Icon"
              className="py-5"
            ></Image>

            <div className="space-y-2">
              <h1 className="text-center text-[17px] text-black font-medium">
                Profesionales dedicados
              </h1>
              <p className="text-center text-[16px] text-[#464545] font-medium max-w-[250px]">
                Nuestros diseñadores y desarrolladores son profesionales con más
                de 5 años de experiencia en el mercado.
              </p>
            </div>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: 100 }}
            transition={{
              duration: 0.5,
              stiffness: 1000,
              type: "tween",
              bounce: 0.5,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <Image
              src={Async}
              height={50}
              width={50}
              alt="Request Icon"
              className="py-5"
            ></Image>

            <div className="space-y-2">
              <h1 className="text-center text-[17px] text-black font-medium">
                Comunicación asincronica
              </h1>
              <p className="text-center text-[16px] text-[#464545] font-medium max-w-[250px]">
                Comunícate con nosotros en cualquier momento del día, estamos
                disponibles para ti. Mediante correo electrónico, WhatsApp o
                Discord.
              </p>
            </div>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: 100 }}
            transition={{
              duration: 0.5,
              stiffness: 1000,
              type: "tween",
              bounce: 0.5,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            {" "}
            <Image
              src={Team}
              height={50}
              width={50}
              alt="Request Icon"
              className="py-5"
            ></Image>
            <div className="space-y-2">
              <h1 className="text-center text-[17px] text-black font-medium">
                Invita a tu equipo
              </h1>
              <p className="text-center text-[16px] text-[#464545] font-medium max-w-[250px]">
                Invita a tu equipo a la plataforma para que puedan ver el
                progreso del proyecto en tiempo real.
              </p>
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  );
}

import { ServiceCard } from "@/lib/types/service-card";
import { CardHeader } from "@material-tailwind/react";
import { ArrowRightIcon, PersonIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";

export function ServiceCard(props: ServiceCard) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 1 }}
      transition={{
        duration: 0.5,
        stiffness: 1000,
        type: "tween",
        bounce: 0.5,
      }}
      id={props.id}
      whileInView={{ opacity: 1, y: 0 }}
      className="flex flex-row items-center justify-center p-4"
    >
      <div className="card max-w-[1000px] bg-base-100 grid md:grid-cols-2 gap-4 flex-row shadow-xl p-8 relative ">
        <div className="flex flex-col justify-between gap-4">

          <h3 className="text-2xl font-semibold">{props.title}</h3>
          <p className="text-normal">{props.description}</p>

          <div className="mt-4">
            <h4 className="text-lg font-semibold">Precios estimados:</h4>
            <div>
              <p>
                Argentina: Desde{" "}
                <span className=" text-success font-semibold">
                  {props.priceMinArs.toLocaleString("en-US")} ARS
                </span>{" "}
                hasta{" "}
                <span className="text-success font-semibold">
                  {props.priceMaxArs.toLocaleString("en-US")} ARS
                </span>
              </p>
              <p>
                Resto del mundo: Desde{" "}
                <span className="text-success font-semibold">
                  {props.priceMinUsd.toLocaleString("en-US")} USD
                </span>{" "}
                hasta{" "}
                <span className="text-success font-semibold">
                  {props.priceMaxUsd.toLocaleString("en-US")} USD
                </span>
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold">Plazos de entrega:</h4>
              <div>
                <p>
                  Desde{" "}
                  <span className="text-accent font-semibold">
                    {props.waitingTime} días
                  </span>{" "}
                  hábiles
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center p-4">
              <Button
                variant="outline"
                onClick={() => {
                  document
                    .getElementById("contacto")
                    ?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className=" text-lg border-black  hover:border-white hover:bg-primary hover:text-white w-[90%]"
                  >
                Quiero este servicio <ArrowRightIcon className="w-4 h-8 ml-2" />
              </Button>
            </div>
                </div>
          </div>

        <div className="mockup-window border border-base-300">
          <div className="flex justify-center items-center h-full">

          <img src={props.imagePath} alt="Imagen del servicio" className=" object-fill" />
          </div>
        </div>
      </div>
    </motion.li>
  );
}

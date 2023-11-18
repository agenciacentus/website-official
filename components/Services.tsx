import Image from "next/image";

import Request from "@/public/bento/request.webp";
import Revision from "@/public/bento/revision.png";
import Pause from "@/public/bento/pause.png";
import Designers from "@/public/bento/designers.png";
import Async from "@/public/bento/async-communication.png";
import Team from "@/public/bento/team.png";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BackpackIcon,
  GlobeIcon,
  PersonIcon,
  EnterFullScreenIcon,
} from "@radix-ui/react-icons";
import { BrainCircuitIcon, PhoneIcon } from "lucide-react";
import { MonitorDot } from "lucide";
import { ServiceCard } from "./ServiceCard";

export default function Services() {
  return (
    <section className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, x: 1 }}
        whileInView={{ opacity: 1, x: 1 }}
        transition={{
          stiffness: 1000,
          type: "tween",
          bounce: 0.2,
          duration: 0.5,
        }}
        className="max-w-[700px] text-[35px] text-black font-medium leading-10 text-center mt-[70px]"
      >
        <h3 className="mb-10 md:ml-4 text-black text-4xl">
          ¿Que <span className="text-primary">servicios</span> ofrecemos?
        </h3>
      </motion.div>
      <div>
        <ul className="flex flex-col gap-8 items-center justify-center">
          <ServiceCard
            title={"Desarrollo WEB"}
            description="Crea una página web para tu negocio, sistema, producto o
            servicio. Aumenta tus ventas y clientes con una página web
            profesional. Servicio de hosting y dominio incluido."
            id="web"
            priceMinArs={100000}
            priceMaxArs={700000}
            priceMinUsd={100}
            priceMaxUsd={700}
            waitingTime={14}
            imagePath="/web.jpg"
          />

          <ServiceCard
            title={"Aplicaciones de escritorio"}
            description="Creamos la aplicación con la funcionalidad que necesites,
            para cualquier sistema operativo. No importa si es para
            Windows, Linux o Mac, será de calidad y con un diseño único.
            "
            id="desktop"
            priceMinArs={300000}
            priceMaxArs={3000000}
            priceMinUsd={300}
            priceMaxUsd={3000}
            waitingTime={21}
            imagePath="/dashboard.png"
          />

          <ServiceCard
            title={"Aplicaciones Android e iOS"}
            description="Crea una aplicación móvil para tu negocio, producto o
            servicio. Aprovecha el mercado de las aplicaciones móviles
            para llegar a todo tipo de clientes."
            id="mobile"
            priceMinArs={300000}
            priceMaxArs={2000000}
            priceMinUsd={300}
            priceMaxUsd={2000}
            waitingTime={14}
            imagePath="/mobile.jpg"
          />

          <ServiceCard
            title={"E-Commerce"}
            description="Vende tus productos en línea con una tienda virtual. Acepta
            pagos con tarjeta de crédito, débito, Mercado Pago, PayPal y más. Sin limite
            de productos. Sin limites de ventas. Sin comisiones."
            id="ecommerce"
            priceMinArs={50000}
            priceMaxArs={400000}
            priceMinUsd={50}
            priceMaxUsd={400}
            waitingTime={14}
            imagePath="/comerce.jpg"
          />

          <ServiceCard
            title={"CMS"}
            description="Maneja tus contenidos de manera fácil y rápida con un CMS (Sistema de gestión de contenidos). Crea un panel de administración para que puedas gestionar tus contactos, ventas, informes y más.
            Ten el control de tu negocio y de las cosas que de verdad te importan."
            id="cms"
            priceMinArs={100000}
            priceMaxArs={400000}
            priceMinUsd={100}
            priceMaxUsd={400}
            waitingTime={14}
            imagePath="/admin.png"
          />
        </ul>
      </div>
    </section>
  );
}

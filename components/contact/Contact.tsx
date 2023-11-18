import { motion } from "framer-motion";
import { Card, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";
import { ConsultationFormContact } from "./ConsultationFormContact";

export function Contacto() {
  return (
    <section className=" flex flex-col items-center">
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
        <h2 className="mb-10 md:ml-4 text-black text-4xl">
          ¡Obtén <span className="text-primary">respuestas</span> a tus
          preguntas!
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          stiffness: 1000,
          type: "tween",
          bounce: 0.2,
          duration: 0.5,
        }}
        className="md:grid md:grid-cols-2 flex flex-col gap-8 p-4 md:p-0"
      >
        <ConsultationFormContact />

        <div className="card max-w-[1000px] col-span-1 bg-base-100 shadow-xl p-8">
          <h3 className="text-xl font-semibold">Cotización</h3>
          <p className="text-normal">
            Si ya sabes lo que quieres, ¡completa el siguiente formulario!
          </p>

          <div className="form-control w-full max-w-lg mt-4">
            <label className="label">
              <span className="label-text">Correo electrónico:</span>
            </label>
            <input
              type="text"
              placeholder="acentus@soporte.com"
              className="input input-bordered w-full max-w-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="form-control w-full max-w-lg mt-4">
              <label className="label">
                <span className="label-text">Tipo de software / servicio</span>
              </label>
              <select className="select select-bordered w-full max-w-lg">
                <option disabled selected>
                  Selecciona una opción
                </option>
                <option>Web</option>
                <option>Escritorio</option>
                <option>Mobil</option>
                <option>E-Commerce</option>
                <option>CMS</option>
                <option>Otro</option>
              </select>
            </div>

            <div className="form-control w-full max-w-lg mt-4">
              <label className="label">
                <span className="label-text">Tú presupuesto (USD)</span>
              </label>
              <input
                type="number"
                defaultValue={0}
                className="input input-bordered w-full max-w-lg"
              />
            </div>
          </div>
          <div className="form-control max-h-[10rem] mt-4">
            <label className="label">
              <span className="label-text">Descripción del proyecto</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Tengo 500 productos y quiero una tienda para vender con sistema de envío y Mercado Pago..."
            ></textarea>
          </div>
          <div className="w-full flex justify-center pt-4 mt-4">
            <Button
              variant="outline"
              onClick={() => {
                document
                  .getElementById("contacto")
                  ?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className=" text-lg border-black  hover:border-white hover:bg-primary hover:text-white w-[80%] "
            >
              Enviar cotización <ArrowRightIcon className="w-4 h-8 ml-2" />
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

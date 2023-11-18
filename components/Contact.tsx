import { motion } from "framer-motion";
import { Card, CardHeader } from "./ui/card";

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
        <h2 className="mb-10 ml-4 text-black text-4xl">
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
        className="grid grid-cols-2 gap-8"
      >
        <div className="card max-w-[1000px] col-span-1 bg-base-100 shadow-xl p-8">
          <h3 className="text-xl font-semibold">Contacto</h3>
          <p className="text-normal">¿Tienes alguna duda? ¡Escríbenos!</p>

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

          <div className="form-control max-h-[10rem] mt-4">
            <label className="label">
              <span className="label-text">Escribe tu consulta:</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="No se como hacer esto..."
            ></textarea>
          </div>

          <p className="mt-4">
            <span className="text-warning">Atención:</span> Recibirás una
            respuesta durante el siguiente día hábil. ¡Porfavor esté atento!
          </p>
        </div>

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
        </div>
      </motion.div>
    </section>
  );
}

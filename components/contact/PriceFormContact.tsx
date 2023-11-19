import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { validateEmail } from "@/lib/utils";
import { motion } from "framer-motion";

export function PriceFormContact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [usd, setUsd] = useState(0);
  const [type, setType] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    console.log(email, message, usd, type)

    if (email === "" || message === "" || usd === 0 || type === "") {
      setError("Porfavor complete todos los campos.");

      if (email === "") {
        document.getElementById("email")?.focus();
      } else {
        document.getElementById("message")?.focus();
      }

      setLoading(false);

      return;
    }

    if (validateEmail(email) === false) {
      setError("Porfavor ingrese un correo electrónico válido.");
      document.getElementById("email")?.focus();

      setLoading(false);

      return;
    }

    if (usd < 0) {
      setError("Porfavor ingrese un presupuesto válido.");
      document.getElementById("usd")?.focus();

      setLoading(false);

      return;
    }

    setError("");
    setEmail("");
    setUsd(0);
    setType("web");
    setMessage("");

    const sendMail = await fetch(
      "/api/resend?email=" +
        email +
        "&description=" +
        message +
        "&usd=" +
        usd +
        "&type=" +
        type,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response = await sendMail.json();

    if (response.success) {
      setSuccess(true);
    } else {
      setError("Ocurrió un error al enviar su consulta.");
    }

    document.getElementById("modalSuccess")?.showModal();
    setLoading(false);
  };

  return (
    <div className="card max-w-[1000px] col-span-1 bg-base-100 shadow-xl p-8 flex gap-6 justify-between">
      <div>
        <h3 className="text-xl font-semibold">Cotización</h3>
        <p className="text-normal">
          Si ya sabes lo que quieres, ¡completa el siguiente formulario!
        </p>

        <div className="form-control w-full max-w-lg mt-2">
          <label className="label">
            <span className="label-text">Correo electrónico:</span>
          </label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="acentus@soporte.com"
            className="input input-bordered w-full max-w-lg"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="form-control w-full max-w-lg mt-2">
            <label className="label">
              <span className="label-text">Tipo de software / servicio</span>
            </label>
            <select onChange={(e) => setType(e.target.value)} className="select select-bordered w-full max-w-lg">
              <option disabled selected>
                Selecciona una opción
              </option>
              <option >Web</option>
              <option>Escritorio</option>
              <option >Mobil</option>
              <option>E-Commerce</option>
              <option >CMS</option>
              <option>Otro</option>
            </select>
          </div>

          <div className="form-control w-full max-w-lg mt-2">
            <label className="label">
              <span className="label-text">Tú presupuesto (USD)</span>
            </label>
            <input
              type="number"
              id="usd"
              onChange={(e) => setUsd(parseInt(e.target.value))}
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
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            className="textarea textarea-bordered h-24"
            placeholder="Tengo 500 productos y quiero una tienda para vender con sistema de envío y Mercado Pago..."
          ></textarea>
        </div>
        {error ? (
          <motion.span
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 100 }}
            transition={{
              stiffness: 1000,
              type: "keyframes",
              bounce: 0.2,
              duration: 0.5,
            }}
            key={error}
            className="text-red-500 py-2"
          >
            - {error}
          </motion.span>
        ) : null}
      </div>
      <div className="w-full flex justify-center">
        <Button
          variant="outline"
          disabled={loading}
          onClick={() => handleSubmit()}
          className=" text-lg border-black  hover:border-white hover:bg-primary hover:text-white w-[80%] "
        >
          Enviar consulta{" "}
          {loading ? (
            <span className="loading loading-spinner loading-xs ml-2"></span>
          ) : (
            <ArrowRightIcon className="w-4 h-8 ml-2" />
          )}
        </Button>

        <dialog id="modalSuccess" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              ¡Tu presupuesto fue enviado correctamente!
            </h3>
            <p className="py-2">
              Recibirás una respuesta durante el siguiente día hábil. ¡Muchas
              gracias!
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button
                  className="btn"
                  onClick={() => window.location.reload()}
                >
                  Cerrar
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}

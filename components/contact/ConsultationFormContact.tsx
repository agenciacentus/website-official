import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { validateEmail } from "@/lib/utils";
import { sendEmail } from "@/lib/resend";
import { motion } from "framer-motion";

export function ConsultationFormContact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    if (email === "" || message === "") {
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

    setError("");
    setEmail("");
    setMessage("");

    sendEmail({ email: email, description: message }).then((success) => {
      if (success) {
        setSuccess(true);
      } else {
        setError("Ocurrió un error al enviar su consulta.");
      }
    });

    setLoading(false);
  };

  return (
    <div className="card max-w-[1000px] col-span-1 bg-base-100 shadow-xl p-8 flex justify-between ">
      <div>
        <h3 className="text-xl font-semibold">Contacto</h3>
        <p className="text-normal">¿Tienes alguna duda? ¡Escríbenos!</p>

        <div className="form-control w-full max-w-lg mt-4">
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

        <div className="form-control max-h-[10rem] mt-4">
          <label className="label">
            <span className="label-text">Escribe tu consulta:</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="No se como hacer esto..."
          ></textarea>
        </div>

        <p className="mt-4">
          <span className="text-warning">Atención:</span> Recibirás una
          respuesta durante el siguiente día hábil. ¡Porfavor esté atento!
        </p>

        {error ? (
          <motion.span
            initial={{ opacity: 0, x: 1 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{
              stiffness: 1000,
              type: "keyframes",
              bounce: 0.2,
              duration: 0.5,
            }}
            key={error}
            className="mt-2 text-red-500"
          >
            - {error}
          </motion.span>
        ) : null}
      </div>

      <div className="w-full flex justify-center pt-4 mt-4">
        <Button
          variant="outline"
          disabled={loading}
          onClick={() => handleSubmit()}
          className=" text-lg border-black  hover:border-white hover:bg-primary hover:text-white w-[80%] "
        >
          Enviar consulta <ArrowRightIcon className="w-4 h-8 ml-2" />
        </Button>
      </div>
    </div>
  );
}

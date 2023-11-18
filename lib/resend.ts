import { Resend } from "resend";

const resend = new Resend("re_T5WkxcJR_NMEQuukofVi2AijRS5zkdrCL");

export const sendEmail = async ({
  email,
  type,
  usd,
  description,
}: {
  email: string;
  type?: string;
  usd?: number;
  description: string;
}) => {
  return await resend.emails
    .send({
      from: "Acentus <onboarding@resend.dev>",
      to: ["hellojavaa@gmail.com"],
      subject:
        "Mensaje de CONSULTA - " +
        email +
        (type ? " - " + type : "") +
        (usd ? " - " + usd : ""),
      text: description,
    })
    .then((res) => {
      if (res.error) {
        return false;
      }

      return true;
    });
};

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_T5WkxcJR_NMEQuukofVi2AijRS5zkdrCL");

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);

  const email = searchParams.get("email");
  const type = searchParams.get("type");
  const usd = searchParams.get("usd");
  const description = searchParams.get("description");

  const sendMail = await resend.emails.send({
    from: "Acentus <onboarding@resend.dev>",
    to: ["hellojavaa@gmail.com"],
    subject:
      "Mensaje de CONSULTA - " +
      email +
      (type ? " - " + type : "") +
      (usd ? " - " + usd : "USD"),
    text: description!,
  })
  
  if (sendMail.error) {
    return NextResponse.json({ error: sendMail.error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
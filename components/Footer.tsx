import Image from "next/image";
import Logo from "../public/logo.svg";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 mt-10">
      <div className="footer w-full flex justify-between p-10 text-base-content max-w-[1800px] mx-auto">
        <aside>
          <Image
            src={Logo}
            alt="Acentus Logo"
            className="w-[110px] h-[20px]"
          ></Image>
          <p>
            Agencia Acentus, S.A.
            <br />
            Proviendo servicios de diseño y desarrollo web desde 2021.
            <br />
            Santa Fe, Argentina.
            <br />
            Todos los derechos reservados - 2023
          </p>
        </aside>
        <div className="flex gap-12">
          <nav className="flex flex-col">
            <header className="footer-title">Servicios</header>
            <a
              onClick={() => {
                document
                  .getElementById("web")
                  ?.scrollIntoView({ behavior: "smooth", block: "center"});
              }}
              className="link link-hover"
            >
              Desarrollo WEB
            </a>
            <a
              onClick={() => {
                document
                  .getElementById("desktop")
                  ?.scrollIntoView({ behavior: "smooth", block: "center"});
              }}
              className="link link-hover"
            >
              Aplicaciones de escritorio
            </a>
            <a
              onClick={() => {
                document
                  .getElementById("mobile")
                  ?.scrollIntoView({ behavior: "smooth", block: "center"});
              }}
              className="link link-hover"
            >
              Aplicaciones de Android e iOS
            </a>
            <a
              onClick={() => {
                document
                  .getElementById("ecommerce")
                  ?.scrollIntoView({ behavior: "smooth", block: "center"});
              }}
              className="link link-hover"
            >
              E-Commerce
            </a>
            <a
              onClick={() => {
                document
                  .getElementById("cms")
                  ?.scrollIntoView({ behavior: "smooth", block: "center"});
              }}
              className="link link-hover"
            >
              CMS
            </a>
          </nav>
          <nav className="flex flex-col">
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex flex-col">
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

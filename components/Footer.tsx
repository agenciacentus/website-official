import Image from "next/image";
import Logo from "../public/logo.svg";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 mt-[5rem]">
      <div className="footer w-full flex md:flex-row flex-col justify-between p-10 text-base-content max-w-[1800px] mx-auto">
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
            <header className="footer-title">Contacto</header>
            <a className="link link-hover">soporte@acentus.agency</a>
            <a className="link link-hover">+54 341 3107794</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

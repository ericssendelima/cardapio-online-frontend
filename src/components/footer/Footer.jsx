import classes from "./footer.module.css";
import logo from "../../assets/nliras-vermelho.webp";

import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className={classes.footerContainer}
    >
      <div className={`flex-1 ${classes.logoContainer}`}>
        <img alt="logo-vermelha" src={logo} />
        <nav>
          <div className={classes.icons}>
            <a>
              <FaInstagram />
            </a>
            <a>
              <FaWhatsapp />
            </a>
          </div>
        </nav>
      </div>
      <aside>
        <span>Copyright &copy;2025 - Todos os direitos reservados</span>
      </aside>
      <span className={classes.bottomText}> 
        Desenvolvido por&nbsp;<a href="https://portfolio-ericssen.vercel.app/">Yalê Ericssen</a>
      </span>
      {/* <p>
        <a href="/politica-de-privacidade">Política de Privacidade</a> |{" "}
        <a href="/termos-de-uso">Termos de Uso</a>
      </p> */}
    </div>
  );
};

export default Footer;

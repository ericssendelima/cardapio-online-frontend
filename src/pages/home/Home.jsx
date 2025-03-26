import classes from "./home.module.css";
// import ModalAvisos from "../../components/modalAvisos/ModalAvisos";
import { useState } from "react";
//Assets
import logoWhite from "../../assets/nliras-branco.webp";
import vegBackground from "../../assets/legumes-branco.webp";

import { FaBagShopping } from "react-icons/fa6";
import ModalAvisos from "../../components/modais/modalAvisos/ModalAvisos";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={classes.homeContainer}>
      {/* seção para colocar os legumes de fundo */}
      <div className={classes.topBackground}>
        <img
          alt="legumes-fundo"
          src={vegBackground}
          className={classes.legumesFundo}
        />
      </div>

      {/* seção para colocar a logo da aplicação */}
      <div className={classes.logoContainer}>
        <img alt="logo-white" src={logoWhite} className={classes.logoWhite} />
      </div>
      {/* Seção inferior com a frase inicial e botão */}
      <div className={classes.semiCirculo}>
        <div className={classes.semiCirculoHeader}>
          <div className={classes.topTextContainer}>
            <span className={classes.topText01}>Sem tempo para cozinhar?</span>
            <span className={classes.topText02}>Ajudamos Você</span>
          </div>
          <div className={classes.bottomTextContainer}>
            <span className={classes.bottomText}>
              Refeições saudáveis e prontas, só descongelar e saborear!
            </span>
          </div>
        </div>

        {/* Colocar o botão aqui */}
        <div className={classes.semiCirculoFooter}>
          <button className={`btn ${classes.botao}`} onClick={openModal}>
            Vamos começar <FaBagShopping className={classes.bagIcon} />
          </button>
          <span className={classes.spanButton}>Clique para prosseguir</span>
        </div>
      </div>
      {isModalOpen && <ModalAvisos onClose={closeModal} />}

    </div>
  );
};

export default Home;

import classes from "./ModalAvisos.module.css";
import { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router";

import img01 from "../../../assets/refer.webp";
import img02 from "../../../assets/friends01.webp";
import img03 from "../../../assets/friends02.webp";
import { FaRegCopy, FaTicket } from "react-icons/fa6";


const ModalAvisos = () => {
  const numOfPages = 3;
  const modalRef = useRef(null);
  const [currentDiv, setCurrentDiv] = useState(1);
  const images = [img01, img02, img03];
  const texts = [
    "Convide seus amigos e familiares para uma vida mais saudável e mais simples",
    "Compartilhe seu link promocional e ganhem juntos R$ 15,00 de desconto cada, na compra do kit semanal de marmitas",
    "O link estará disponível após você efetuar a 1ª compra de um kit",
    " Assim que seu amigo realizar a 1ª compra (com o desconto do seu link) e seguir nosso perfil no instagram, seu desconto estará disponível    automaticamente na sua próxima compra",
    "Quanto mais compartilhar, mais descontos você ganha!",
    "Não esqueçam de seguir nosso perfil no instagram, caso contrário, os descontos não serão ativados",
  ];

  const itemsPerPage = Math.ceil(texts.length / numOfPages);
  const navigate = useNavigate();

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }, []);

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
      navigate("/cardapio");
    }
  };

  const previousDiv = () => {
    setCurrentDiv((prevDiv) => prevDiv - 1);
  };

  const nextDiv = () => {
    setCurrentDiv((prevDiv) => prevDiv + 1);
  };

  // Função para dividir os textos em páginas
  const paginate = (array, itemsPerPage) => {
    const pages = [];
    for (let i = 0; i < array.length; i += itemsPerPage) {
      const page = array.slice(i, i + itemsPerPage);
      pages.push(page);
    }
    return pages;
  };

  const pages = paginate(texts, itemsPerPage);

  return (
    <dialog
      id="m-modal"
      className={`modal ${classes.modalContainer}`}
      ref={modalRef}
    >
      <div className={`modal-box ${classes.modalView}`}>
        <div className={classes.tituloModalContainer}>
          <h1 id={classes.tituloModal}>Compartilhe com familiares e amigos</h1>
        </div>
        <div className={classes.imgContainer}>
          <img alt="image" src={images[currentDiv - 1]} />
        </div>
        <div className={classes.modalContent}>
          <ul>
            {pages[currentDiv - 1].map((text, i) => {
              return <li id={i}>{text}</li>;
            })}
          </ul>
          {currentDiv === 2 && (
            <div className={classes.linkContainer}>
              <FaTicket className={classes.dashed}/>
              <span>www.seu_link.com.br</span>
              <FaRegCopy />
            </div>
          )}
        </div>
        <div className={classes.buttonsContainer}>
          {currentDiv !== 1 ? (
            <button className={`btn ${classes.backButton}`} onClick={previousDiv}>
              Voltar
            </button>
          ) : (
            <a onClick={closeModal} style={{ textDecoration: "underline" }}>
              Pular
            </a>
          )}
          <progress
            className={`progress progress-primary w-25 h-2 ${classes.progressBar}`}
            value={(100 / numOfPages) * currentDiv}
            max="100"
          ></progress>
          {currentDiv === numOfPages ? (
            <button className="btn" onClick={closeModal}>
              Cardápio
            </button>
          ) : (
            <button className="btn" onClick={nextDiv}>
              Próximo
            </button>
          )}
        </div>
      </div>
      <form
        method="dialog"
        className="modal-backdrop"
        onClick={closeModal}
      ></form>
    </dialog>
  );
};

export default ModalAvisos;

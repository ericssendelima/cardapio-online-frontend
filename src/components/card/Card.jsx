import classes from "./card.module.css";

import { FaCartPlus } from "react-icons/fa";

import { useState } from "react";
import ModalProdutoDetalhes from "../modais/modalProdutoDetalhes/ModalProdutoDetalhes";

const Card = ({ data }) => {
  const { titulo, peso, preco, img } = data;
  const precoFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };


  return (
    <div className={classes.cardContainer}>
      <div className={classes.imgContainer}>
        <img src={img} className="skeleton h-25 w-25" alt="Marmita" />
      </div>
      <div className={classes.cardBody}>
        <h2 className={classes.titulo}>{titulo}</h2>
        <div className={classes.pesoContainer}>
          <div className={`badge badge-md ${classes.peso}`}>{peso}</div>
        </div>
        <div className={classes.buttonContainer}>
          <span>{precoFormatado}</span>
          <button className={classes.buttonPlus} onClick={openModal}>
            <FaCartPlus />
          </button>
        </div>
      </div>
      {isModalOpen && <ModalProdutoDetalhes config={{data, setIsModalOpen}} />}
    </div>
  );
};

export default Card;

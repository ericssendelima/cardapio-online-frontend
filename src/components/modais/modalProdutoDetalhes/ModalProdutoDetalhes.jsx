import { useRef, useEffect } from "react";
import classes from "./modalProdutoDetalhes.module.css";

import { FaAngleLeft } from "react-icons/fa6";
import Quantidade from "../../quantidade/Quantidade";

const ModalProdutoDetalhes = ({ config }) => {
  const {
    data: { titulo, peso, preco, img },
    setIsModalOpen,
  } = config;
  const precoFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }, []);

  const closeModal = () => {
    if (modalRef.current) {
      setIsModalOpen(false);
      modalRef.current.close();
    }
  };
  return (
    <dialog ref={modalRef} className={`modal ${classes.modalContainer}`}>
      <div className={`modal-box ${classes.modalView}`}>
        <div className={classes.header}>
          <button className={classes.voltar} onClick={closeModal}>
            <FaAngleLeft />
          </button>
          <span className={classes.titulo}>{titulo}</span>
        </div>
        <div className={`skeleton h-55 w-55 ${classes.img}`}>
          <img src={img} alt={titulo} />
        </div>
        <div className={classes.body}>
          <span className={`badge badge-lg`}>{peso}</span>
          <span className={classes.descricao}>Descrição</span>
        </div>
        <div className={classes.buildMarmitasContainer}>
          <span>Monte suas marmitas</span>
          {/* Chamar o componente de montagem de marmitas */}
          <section>
            <div></div>
            <div></div>
            <div></div>
          </section>
        </div>
        <div className={classes.footer}>
          <span className={classes.preco}>{precoFormatado}</span>
          <Quantidade />
          <button className={classes.addCart}>Add carrinho</button>
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

export default ModalProdutoDetalhes;

{
  /* <div className={classes.body}>
<div className={bodyHeader}>
  <span className={classes.titulo}>{titulo}</span>
</div>
<div className={bodyFooter}>
  <span className={classes.descrição}>Descrição</span>
// </div> */
}

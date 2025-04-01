import { useRef, useEffect, useState } from "react";
import classes from "./modalProdutoDetalhes.module.css";

import { FaAngleLeft, FaArrowDown, FaCartShopping } from "react-icons/fa6";
import Quantidade from "../../quantidade/Quantidade";
import ComposicaoProduto from "../../composicaoProduto/composicaoProduto";

const ModalProdutoDetalhes = ({ config }) => {
  const [proteina, ] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [isKit, setIsKit] = useState({
    escolheuOpcao: false,
    is: false,
  });
  const {
    data: { titulo, peso, img },
    setIsModalOpen,
  } = config;
  const preco = isKit.is ? 65 : 15;
  const precoFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco * quantidade);

  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }, []);

  const closeModal = () => {
    if (modalRef.current) {
      setIsKit({
        escolheuOpcao: false,
        is: false,
      });
      setIsModalOpen(false);
      modalRef.current.close();
    }
  };

  const handleChange = (event) => {
    setQuantidade(1);
    if (event.target.value === "1") {
      setIsKit({
        escolheuOpcao: true,
        is: false,
      });
    } else {
      setIsKit({ escolheuOpcao: true, is: true });
    }
    return;
  };
  return (
    <dialog ref={modalRef} className={`modal ${classes.modalContainer}`}>
      <div className={`modal-box ${classes.modalView}`}>
        <div className={classes.header}>
          <button className={classes.voltar} onClick={closeModal}>
            <FaAngleLeft />
          </button>
          <span className={classes.titulo}>{titulo}</span>
          {/* TESTAR COLOCAR AQUI UM BOTÃO COM VISOR, DO CARRINHO */}
          <button className={`indicator ${classes.botaoCarrinho}`}>
            <FaCartShopping />
            <span className="badge badge-xs indicator-item">8</span>
          </button>
        </div>
        <div className={`skeleton h-55 w-55 ${classes.img}`}>
          <img src={img} alt={titulo} />
        </div>
        <div className={classes.body}>
          <div className={classes.bodyHeader}>
            <p className={`badge badge-lg`}>{peso}</p>
            {!isKit.escolheuOpcao ? (
              <span>
                Qual tipo você escolhe?&nbsp;
                <FaArrowDown />
              </span>
            ) : (
              <span className={classes.spanOpcao}>Opção:</span>
            )}
          </div>
          <div className={classes.descricaoContainer}>
            <div className={classes.descricaoHeader}>
              <span className={classes.descricao}>Descrição</span>
              <fieldset className={`${classes.fieldsetContainer}`}>
                <select
                  defaultValue="Unidade ou kit?"
                  className="select"
                  onChange={handleChange}
                >
                  <option disabled={true}>Unidade ou kit?</option>
                  <option
                    value="1"
                    selected={
                      isKit.is ? false : isKit.escolheuOpcao ? true : false
                    }
                  >
                    Unidade
                  </option>
                  <option value="2" selected={isKit.is ? true : false}>
                    kit
                  </option>
                </select>
              </fieldset>
            </div>
            <div className={classes.descricaoBody}>Descrição do produto</div>
          </div>
        </div>
        <div className={classes.buildMarmitasContainer}>
          {/* Chamar o componente de montagem de marmitas */}
          <div className={classes.tipoPedido}>
            <span>Tipo do pedido</span>
            <span>
              {isKit.is
                ? `- ${quantidade} Kit com 5 marmitas`
                : isKit.escolheuOpcao
                ? `- ${quantidade} unidade${quantidade > 1 ? "s" : ""}`
                : null}{" "}
            </span>
          </div>
          {/* Se for kit, surgirão 3 seções descrevendo as marmitas do kit. Se não, surgirá 1 seção apenas */}
          {isKit.is ? (
            <div className={classes.visorMarmitas}>
              <section>
                <ComposicaoProduto config={{ isKit, proteina }} />
                <span className={classes.adesivo3x}>3x</span>
              </section>
              <section>
                <ComposicaoProduto config={{ isKit, proteina: "Carne bovina" }} />
                <span className={classes.adesivo3x}>1x</span>
              </section>
              <section>
                <ComposicaoProduto config={{ isKit, proteina: "Figado" }} />
                <span className={classes.adesivo3x}>1x</span>
              </section>
            </div>
          ) : isKit.escolheuOpcao ? (
            <div className={classes.visorMarmitas}>
              <section className={classes.marmitaUnicaContainer}>
                <span className={classes.adesivo3x}>1x</span>
              </section>
            </div>
          ) : null}
        </div>

        {/* Seção final do modal. Preço, controle de quantidade e botão de adicionar ao carrinho */}
        <div className={classes.footer}>
          <span className={classes.preco}>
            {isKit.escolheuOpcao ? precoFormatado : "R$ ------"}
          </span>
          <Quantidade config={{ quantidade, setQuantidade, isKit, setIsKit }} />
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

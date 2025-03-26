import classes from "./quantidade.module.css";

import React, { useState } from "react";

import { FaMinus, FaPlus } from "react-icons/fa6";

const Quantidade = () => {
  const [quantidade, setQuantidade] = useState(1);

  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      return setQuantidade(quantidade - 1);
    }
    return
  };
  const aumentarQuantidade = () => {
    return setQuantidade(quantidade + 1)
  };
  return (
    <div className={classes.quantidadeContainer}>
      <button onClick={diminuirQuantidade}>
        <FaMinus />
      </button>
      <span>{quantidade}</span>
      <button onClick={aumentarQuantidade}>
        <FaPlus />
      </button>
    </div>
  );
};

export default Quantidade;

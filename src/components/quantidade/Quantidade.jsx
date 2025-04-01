import classes from "./quantidade.module.css";

import { FaMinus, FaPlus } from "react-icons/fa6";

const Quantidade = ({ config }) => {
  const { quantidade, setQuantidade, isKit, setIsKit } = config;

  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      return setQuantidade(quantidade - 1);
    }
    return;
  };
  const aumentarQuantidade = () => {
    // Primeiro checa se não é um kit, pra verificar até 4 unidades. Se for kit, soma de 1 em 1 kit normalmente
    if (!isKit.is) {
      // É UNIDADE de marmita
      // Verificação de unidades
      if (quantidade === 1) {
        // Quando a quantidade muda de 4 unidades para 5, muda a opção e o preço para kit
        setIsKit({
          escolheuOpcao: true,
          is: true,
        });
        // E volta o controle de quantidade, que antes estava em 4 unidades de marmitas, para 1 unidade de kit
        setQuantidade(1);
      } else {
        // Enquanto a quantidade for menor que 5, vai somando 1
        setQuantidade(quantidade + 1);
      }
      return;
    }
    // É KIT de marmitas
    // Vai somando até 4 unidades de marmitas
    setQuantidade(quantidade + 1);
    return;
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

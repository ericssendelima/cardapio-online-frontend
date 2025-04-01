import classes from "./composicaoProduto.module.css";

const ComposicaoProduto = ({ config }) => {
  const { isKit, proteina } = config;

  return (
    <div className={classes.composicaoProdutoContainer}>
      <span>
        Proteina: {isKit.is ? (proteina ? proteina : "Galinha") : proteina}
      </span>
    </div>
  );
};

export default ComposicaoProduto;

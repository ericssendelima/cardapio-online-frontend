import classes from "./filtro.module.css";

const Filtro = () => {
  return (
    <div className={classes.filtroContainer}>
      <div className={classes.nomeFiltro}>
        <span>Categorias</span>
      </div>
      <div className={`filter ${classes.botoesFiltro}`}>
        <input
          className="btn filter-reset "
          type="radio"
          name="produtos"
          aria-label="All"
        />
        <input
          className="btn"
          type="radio"
          name="produtos"
          aria-label="Refeições"
        />
        <input
          className="btn"
          type="radio"
          name="produtos"
          aria-label="Sobremesas"
        />
        <input
          className="btn"
          type="radio"
          name="produtos"
          aria-label="Bebidas"
        />
      </div>
    </div>
  );
};

export default Filtro;

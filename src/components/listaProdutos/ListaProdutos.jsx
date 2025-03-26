import classes from "./listaProdutos.module.css";
import Card from "../card/Card";
// import { useState } from "react";

import marmita01 from "../../assets/compressed/marmita01.webp";
import marmita02 from "../../assets/compressed/marmita02.webp";
import marmita03 from "../../assets/compressed/marmita03.webp";
import marmita04 from "../../assets/compressed/marmita04.webp";
import marmita05 from "../../assets/compressed/marmita05.webp";

import Subir from "../subir/Subir";

const ListaProdutos = () => {
  // const [screenPosition, setScreenPosition] = useState(0);

  // window.onscroll = () => {
  //   setScreenPosition(document.documentElement.scrollTop);
  //   console.log("rolou")

  // };
  // console.log(window);
  return (
    <div className={classes.listaProdutosContainer}>
    <div className={classes.tituloSecao}>
      <span>Refeições</span>
    </div>
      <Card data={{
        titulo: "Marmita 01",
        peso: "500g",
        img: marmita01,
        preco: "13"
      }}/>
      <Card data={{
        titulo: "Marmita 02",
        peso: "700g",
        img: marmita02,
        preco: "15.93"
      }}/>
      <Card data={{
        titulo: "Marmita 03",
        peso: "200g",
        img: marmita03,
        preco: "15.93"
      }}/>
      <Card data={{
        titulo: "Marmita 04",
        peso: "850g",
        img: marmita04,
        preco: "12.67"
      }}/>
      <Card data={{
        titulo: "Marmita 05",
        peso: "300g",
        img: marmita05,
        preco: "15.93"
      }}/>
      {/* <span style={{position: 'fixed', left: "10px", bottom: "10px"}}>lista {screenPosition}</span>
      {screenPosition > 10 ? <Subir /> : null}
      <Subir /> */}
    </div>
  );
};

export default ListaProdutos;

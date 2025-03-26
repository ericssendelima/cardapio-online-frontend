// import { useState } from "react";
import classes from "./produtos.module.css";
import Navbar from "../../components/navbar/Navbar";
import Filtro from "../../components/filtro/Filtro";
import Footer from "../../components/footer/Footer";
import ListaProdutos from "../../components/listaProdutos/ListaProdutos";
import Subir from "../../components/subir/Subir";

const Produtos = () => {
  // const [screenPosition, setScreenPosition] = useState(0);

  // window.onscroll = () => {
  //   setScreenPosition(document.documentElement.scrollTop);
  //   console.log("rolou")
  // };
  // console.log(screenPosition);
  
  return (
    <div className={classes.cardapioContainer}>
      <Navbar />
      <Filtro />
      <ListaProdutos />
      <Footer />
      {/* <span style={{position: 'fixed', right: "10px", bottom: "10px"}}>produtos {screenPosition}</span>
      {screenPosition > 10 ? <Subir /> : null} */}
    </div>
  );
};

export default Produtos;

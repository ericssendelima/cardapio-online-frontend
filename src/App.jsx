import './App.css'
import './styles/theme.module.css'


import { Routes, Route } from "react-router";

import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Produtos from "./pages/produtos/Produtos";

const App = () => {

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cardapio" element={<Produtos />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  )
}

export default App

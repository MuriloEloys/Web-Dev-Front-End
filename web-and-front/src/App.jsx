import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import { Outlet } from "react-router-dom";

export default function App() {

  return (
    <>
      <div>
        {/* Iniciando a área do cabeçalho */}
        <Cabecalho />

          <Outlet/>
       
        {/* Iniciando a área do rodapé */}
        <Rodape />
      </div>
    </>
  );
}

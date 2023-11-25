import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Cabecalho.scss";

export default function Cabecalho() {

  const rotaAtual = useLocation();


  const obJUser = JSON.parse(sessionStorage.getItem("data-user"));


  return (
    <>
      <header>

        <div className="container">
          <div className="logo">
            <img src="../img/logo.jpeg" alt="" />
          </div>
          <ul className="links">
            <p><Link to="/login" className={rotaAtual.pathname == "/login" ? "active" : ""}>Login</Link></p>
            <p><Link to="/cadastro" className={rotaAtual.pathname == "/cadastro" ? "active" : ""}>cadastro</Link></p>
            <p><Link to="/" className={rotaAtual.pathname == "/" ? "active" : ""}>Home</Link></p>
            <p><Link to="/ideia" className={rotaAtual.pathname == "/ideia" ? "active" : ""}>Ideia</Link></p>
          </ul>
        </div>
        <div className="saudacoes">
          <p>{obJUser != null ?  `Olá ${obJUser.nome}`:""}</p>
          <p>{obJUser != null ?  `E-mail registrado : ${obJUser.email}` :""}</p>
        </div>
      </header>
    </>
  );
}

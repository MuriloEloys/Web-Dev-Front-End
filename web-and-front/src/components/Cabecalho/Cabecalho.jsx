import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Cabecalho.scss";

export default function Cabecalho() {

  const rotaAtual = useLocation();
  const navigate = useNavigate();

  const obJUser = JSON.parse(sessionStorage.getItem("data-user"));

  const handleLogout = ()=>{
    sessionStorage.removeItem("token-user");
    sessionStorage.removeItem("data-user");
    navigate("/login");
  }

  return (
    <>
      <header>

        <div>
          <button onClick={handleLogout} className={sessionStorage.getItem("token-user") ? "btnLogout":"btn"}>Logout</button>
        </div>
        <nav>
          <ul className="Links">
            <p><Link to="/" className={rotaAtual.pathname == "/" ? "active" : ""}>Home</Link></p>
            <p><Link to="/login" className={rotaAtual.pathname == "/login" ? "active" : ""}>Login</Link></p>
          </ul>
        </nav>
        <div>
          <p>{obJUser != null ?  `Olá ${obJUser.nome}`:""}</p>
          <p>{obJUser != null ?  `E-mail registrado : ${obJUser.email}` :""}</p>
        </div>
      </header>
    </>
  );
}

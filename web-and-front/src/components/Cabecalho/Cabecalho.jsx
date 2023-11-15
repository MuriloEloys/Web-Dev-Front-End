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
      <header className="cabecalho1">

        <div>
          {/* <button onClick={handleLogout} className={sessionStorage.getItem("token-user") ? "btnLogout":"btn"}>Logout</button>    BOTÃO APRA LOGOUT*/}
        </div>
        <nav>
          <ul>
            <li><Link to="/" className={rotaAtual.pathname == "/" ? "active" : ""}>Home</Link> </li>
            {/* <li><Link to="/login" className={rotaAtual.pathname == "/login" ? "active" : ""}>Login</Link> </li> */}
          </ul>
        </nav>
        <div className="welcome">
          <p>{obJUser != null ?  `Olá ${obJUser.name}`:""}</p>
          <p>{obJUser != null ?  obJUser.email :""}</p>
        </div>
      </header>
    </>
  );
}

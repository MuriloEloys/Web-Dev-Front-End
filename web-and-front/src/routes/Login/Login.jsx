import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import './Login.scss'

export default function Login() {

    const navigate = useNavigate();

    const [usuario,setUsuario] = useState({
        email: "",
        senha: ""
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUsuario({...usuario,[name]:value});
    }

    const handleLogout = ()=>{
        sessionStorage.removeItem("token-user");
        sessionStorage.removeItem("data-user");
        navigate("/login");
      }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        let users;
        let user;
        try {
            const response = await fetch("http://localhost:5000/usuarios");
            users = await response.json();
            
        } catch (error) {
            alert("Ocorreu um erro no processamento da sua solicitação!");    
        }

        for (let x = 0; x < users.length; x++) {
                user = users[x];
            if(user.email == usuario.email && user.senha == usuario.senha){
                alert("Login realizado com SUCESSO!")

                const tokenUser = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
                console.log(tokenUser);
                
                sessionStorage.setItem("token-user",tokenUser);
                sessionStorage.setItem("data-user", JSON.stringify(user));

                navigate("/");
                return; 
            }
        }

        alert("Login ou senha incorretos!")
        setUsuario({
            email:"",
            senha:""
        });
    }

  return (
    <div className="container-login">
        <h1>Login</h1>

        <div className="form-login">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Informação do usuário:</legend>
                    <div>
                        <label htmlFor="idEmail">Email:</label>
                        <input type="email" name="email" id="idEmail" placeholder="Digite seu email." value={usuario.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idSenha">Senha:</label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite sua senha." value={usuario.senha} onChange={handleChange}/>
                    </div>
                    <div>
                        <button>LOGIN</button>
                        <button onClick={handleLogout} className={sessionStorage.getItem("token-user") ? "btnLogout":"btn"}>Logout</button>
                    </div>
                    <div>
                        <p>Se você ainda não é registrado. <Link to="/cadastro">CLIQUE AQUI</Link></p>
                    </div>
                </fieldset>
            </form>
        </div>

    </div>
  )
}

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";


export default function Cadastro() {

    const [usuario,setUsuario] = useState({
        nome:"",
        email: "",
        senha: ""
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUsuario({...usuario,[name]:value});
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/usuarios",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(usuario)
            });

            if(response.ok){
                alert("Cadastro realizado com sucesso!");
            }
            
        } catch (error) {
            console.error(error);
            setMsgStatus("Ocorreu um erro ao tentar realizar o registro!");
        }

    }

  return (
    <div>
        <h1>Cadastrar</h1>

        <div className="form-cad">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>User Information:</legend>
                    <div>
                        <label htmlFor="idNome">Nome:</label>
                        <input type="text" name="nome" id="idNome" placeholder="Digite seu nome." value={usuario.nome} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idEmail">Email:</label>
                        <input type="email" name="email" id="idEmail" placeholder="Digite seu email." value={usuario.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idSenha">Senha:</label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite sua senha." value={usuario.senha} onChange={handleChange}/>
                    </div>
                    <div>
                        <button>CADASTRAR</button>
                    </div>
                    <div>
                        <p>Se você já é registrado. <Link to="/login">CLIQUE AQUI</Link></p>
                    </div>
                </fieldset>
            </form>
        </div>

    </div>
  )
}

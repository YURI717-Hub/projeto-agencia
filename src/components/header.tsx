import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ref, set, get } from "firebase/database";
import { auth, db } from "../firebaseConfig";
import logo from "../assets/img/banner-logo.png";
import usuario from "../assets/img/usuario.png";
import emprego from "../assets/img/emprego.png";
import Perfil from "../assets/img/perfil.png";
import "../assets/css/style.css";

function Header() {
  const [tipoAtual, setTipoAtual] = useState("login"); // login | cadastro
  const [perfilAtual, setPerfilAtual] = useState("usuario"); // usuario | empresa

  const mudarTipo = (tipo: string) => setTipoAtual(tipo);
  const mudarPerfil = (perfil: string) => setPerfilAtual(perfil);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const senha = formData.get("senha") as string;

    if (tipoAtual === "cadastro") {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        const uid = userCredential.user.uid;

        const dados = perfilAtual === "usuario"
          ? {
              tipo: "usuario",
              nome: formData.get("nome"),
              idade: formData.get("idade"),
              telefone: formData.get("telefone"),
              escolaridade: formData.get("escolaridade"),
              senha: formData.get("senha")
            }
          : {
              tipo: "empresa",
              nomeEmpresa: formData.get("nomeEmpresa"),
              cnpj: formData.get("cnpj"),
              area: formData.get("area"),
              descricao: formData.get("descricao"),
              telefone: formData.get("telefone"),
              cargo: formData.get("cargo"),
              email: formData.get("email"),
              senha: formData.get("senha")            };

        await set(ref(db, `usuarios/${uid}`), dados);
        window.location.href = dados.tipo === "usuario" ? "/oportunidades" : "/anunciar";
      } catch (error) {
        console.error("Erro no cadastro:", error);
      }
    }

    if (tipoAtual === "login") {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);
        const uid = userCredential.user.uid;
        const snapshot = await get(ref(db, `usuarios/${uid}`));
        const dados = snapshot.val();
        window.location.href = dados.tipo === "usuario" ? "/oportunidades" : "/anunciar";
      } catch (error) {
        console.error("Erro no login:", error);
      }
    }
  };

  const renderFormulario = () => {
    return (
      <form onSubmit={handleSubmit}>
        {tipoAtual === "cadastro" && perfilAtual === "usuario" && (
          <>
            <input name="nome" type="text" placeholder="Nome" className="form-control mb-2" />
            <input name="idade" type="number" placeholder="Idade" className="form-control mb-2" />
            <input name="telefone" type="tel" placeholder="Telefone" className="form-control mb-2" />
            <select name="escolaridade" className="form-control mb-2">
              <option value="">Escolaridade...</option>
              <option value="fundamental_incompleto">Fundamental Incompleto</option>
              <option value="fundamental_completo">Fundamental Completo</option>
              <option value="medio_incompleto">Ensino Médio Incompleto</option>
              <option value="medio_completo">Ensino Médio Completo</option>
            </select>
          </>
        )}

        {tipoAtual === "cadastro" && perfilAtual === "empresa" && (
          <>
            <input name="nomeEmpresa" type="text" placeholder="Nome da Empresa" className="form-control mb-2" />
            <input name="cnpj" type="text" placeholder="CNPJ" className="form-control mb-2" />
            <input name="area" type="text" placeholder="Área de Atuação" className="form-control mb-2" />
            <textarea name="descricao" className="form-control mb-2" placeholder="Descrição da Empresa"></textarea>

            <input name="telefone" type="tel" placeholder="Telefone/WhatsApp" className="form-control mb-2" />
            <input name="cargo" type="text" placeholder="Cargo" className="form-control mb-2" />
          </>
        )}

        {/* Campos comuns */}
        <input name="email" type="email" placeholder="Email" className="form-control mb-2" />
        <input name="senha" type="password" placeholder="Senha" className="form-control mb-2" />
        <button type="submit" className="btn btn-dark w-100">
          {tipoAtual === "login" ? "Entrar" : "Cadastrar"}
        </button>
      </form>
    );
  };

  return (
    <>
      <header>
  
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-custom">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="logo" width="80" height="45" />
            </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
               <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
             <Link className="nav-link" to={"/"}>Home</Link>
             </li>
            <li className="nav-item">
             <Link className="nav-link" to={"../Oportunidades"}>Oportunidades</Link>
             </li>
             <li className="nav-item">
             <Link className="nav-link" to={"../Sobre"}>Sobre</Link>
             </li>
  
          </ul>
          
            <div className="auth-section ms-auto">
              <Link className="perfil" to={"../Perfil"}> <img src={Perfil} alt="logo"  /></Link> 
              
              
                        <button
                className="btn btn-dark ms-auto"
                data-bs-toggle="modal"
                data-bs-target="#authModal"
              >
                Cadastro / Login
              </button>
            </div>
             
          </div>
       
          </div>
        </nav>
      </header>

      {/* Modal */}
      <div className="modal fade" id="authModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content p-3">
            <div className="modal-header">
              <h5 className="modal-title">
                {tipoAtual === "login" ? "Login" : "Cadastro"} - {perfilAtual === "usuario" ? "Candidato" : "Empresa"}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>

            <div className="modal-body">
              {/* Botões tipo */}
              <div className="d-flex justify-content-center mb-3">
                <button
                  className={`btn btn-outline-dark me-2 ${tipoAtual === "login" ? "active" : ""}`}
                  onClick={() => mudarTipo("login")}
                >
                  Login
                </button>
                <button
                  className={`btn btn-outline-dark ${tipoAtual === "cadastro" ? "active" : ""}`}
                  onClick={() => mudarTipo("cadastro")}
                >
                  Cadastro
                </button>
              </div>

              {/* Seleção de perfil */}
              <div className="d-flex justify-content-center mb-3">
                <img
                  src={usuario}
                  alt="Usuário"
                  width="6"
                  className={` ${perfilAtual === "usuario" ? "border border-dark " : ""} img-cin-1 `}
                  onClick={() => mudarPerfil("usuario")}
                  style={{ cursor: "pointer" }}
                />
                <img
                  src={emprego}
                  alt="Empresa"
                  width="6"
                  className={` ${perfilAtual === "empresa" ? "border border-dark rounded" : ""} img-cin-2`}
                  onClick={() => mudarPerfil("empresa")}
                  style={{ cursor: "pointer" }}
                />
              </div>

              {/* Formulário */}
              {renderFormulario()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

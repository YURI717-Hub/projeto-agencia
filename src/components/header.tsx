import { useState } from "react";
import logo from "../assets/img/banner-logo-removebg-preview.png";
import usuario from "../assets/img/usuario.png";
import emprego from "../assets/img/emprego.png";
import "../assets/css/style.css";

function Header() {
  // Estados
  const [tipoAtual, setTipoAtual] = useState("login"); // login | cadastro
  const [perfilAtual, setPerfilAtual] = useState("usuario"); // usuario | empresa

  // Trocar tipo
  const mudarTipo = (tipo) => {
    setTipoAtual(tipo);
  };

  // Trocar perfil
  const mudarPerfil = (perfil) => {
    setPerfilAtual(perfil);
  };

  // Renderizar formulários dinamicamente
  const renderFormulario = () => {
    if (tipoAtual === "login" && perfilAtual === "usuario") {
      return (
        <form id="form-login-usuario" className="formulario">
          <input type="email" placeholder="Email" className="form-control mb-2" />
          <input type="password" placeholder="Senha" className="form-control mb-2" />
          <button type="submit" className="btn btn-dark w-100">Entrar</button>
          <p className="mt-3 text-center">
            Caso não lembre da senha <a href="#">clique aqui</a>
          </p>
        </form>
      );
    }

    if (tipoAtual === "login" && perfilAtual === "empresa") {
      return (
        <form id="form-login-empresa" className="formulario">
          <input type="email" placeholder="Email" className="form-control mb-2" />
          <input type="text" placeholder="CNPJ" className="form-control mb-2" />
          <input type="password" placeholder="Senha" className="form-control mb-2" />
          <button type="submit" className="btn btn-dark w-100">Entrar</button>
          <p className="mt-3 text-center">
            Caso não lembre da senha <a href="#">clique aqui</a>
          </p>
        </form>
      );
    }

    if (tipoAtual === "cadastro" && perfilAtual === "usuario") {
      return (
        <form id="form-cadastro-usuario" className="formulario">
          <input type="text" placeholder="Nome" className="form-control mb-2" />
          <input type="email" placeholder="Email" className="form-control mb-2" />
          <input type="password" placeholder="Senha" className="form-control mb-2" />
          <input type="number" placeholder="Idade" className="form-control mb-2" />
          <input type="tel" placeholder="Telefone" className="form-control mb-2" />
          <select className="form-control mb-2">
            <option value="">Escolaridade...</option>
            <option value="fundamental_incompleto">Fundamental Incompleto</option>
            <option value="fundamental_completo">Fundamental Completo</option>
            <option value="medio_incompleto">Ensino Médio Incompleto</option>
            <option value="medio_completo">Ensino Médio Completo</option>
          </select>
          <button type="submit" className="btn btn-dark w-100">Cadastrar</button>
        </form>
      );
    }

    if (tipoAtual === "cadastro" && perfilAtual === "empresa") {
      return (
        <form id="form-cadastro-empresa" className="formulario">
          <input type="text" placeholder="Nome da Empresa" className="form-control mb-2" />
          <input type="text" placeholder="CNPJ" className="form-control mb-2" />
          <input type="text" placeholder="Área de Atuação" className="form-control mb-2" />
          <textarea className="form-control mb-2" placeholder="Descrição da Empresa"></textarea>
          <input type="email" placeholder="Email do Representante" className="form-control mb-2" />
          <input type="tel" placeholder="Telefone/WhatsApp" className="form-control mb-2" />
          <input type="text" placeholder="Cargo" className="form-control mb-2" />
          <input type="password" placeholder="Senha" className="form-control mb-2" />
          <button type="submit" className="btn btn-dark w-100">Cadastrar</button>
        </form>
      );
    }
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-custom">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="logo" width="80" height="45" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link active" href="/">Início</a></li>
                <li className="nav-item"><a className="nav-link" href="/oportunidades">Oportunidades</a></li>
                <li className="nav-item"><a className="nav-link" href="/sobre">Sobre</a></li>
              </ul>

              <button
                type="button"
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Cadastro / Login
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Cadastro ou login</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <h2>{tipoAtual === "login" ? "Login" : "Cadastro"}</h2>
              <p>{tipoAtual === "login" ? "Entre com suas credenciais" : "Preencha para se cadastrar"}</p>

              {/* Botões Login/Cadastro */}
              <div className="cin">
                <button
                  type="button"
                  className={`btn-custom ${tipoAtual === "login" ? "ativo" : ""}`}
                  onClick={() => mudarTipo("login")}
                >
                  Login
                </button>
                <button
                  type="button"
                  className={`btn-custom ${tipoAtual === "cadastro" ? "ativo" : ""}`}
                  onClick={() => mudarTipo("cadastro")}
                >
                  Cadastro
                </button>
              </div>

              {/* Escolher perfil */}
              <div className="img-cin-sup">
                <div className="img-cin-1">
                  <img
                    src={usuario}
                    alt="Usuário"
                    className={perfilAtual === "usuario" ? "ative" : ""}
                    onClick={() => mudarPerfil("usuario")}
                  />
                </div>
                <div className="img-cin-2">
                  <img
                    src={emprego}
                    alt="Empresa"
                    className={perfilAtual === "empresa" ? "ative" : ""}
                    onClick={() => mudarPerfil("empresa")}
                  />
                </div>
              </div>

              {/* Formulário dinâmico */}
              <div className={`formulario-container ${tipoAtual}`}>
                {renderFormulario()}
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              <button type="button" className="btn btn-primary">Salvar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

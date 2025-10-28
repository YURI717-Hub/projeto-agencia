import logo from '../assets/img/banner-logo.png'



function Header() {
  return (
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
              <li className="nav-item">
                <a className="nav-link active" href="/">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/oportunidades">Oportunidades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sobre">Sobre</a>
              </li>
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
  );
}

export default Header;

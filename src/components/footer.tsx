function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <h5>FuturoTrabalho</h5>
            <p>Conectando talentos às oportunidades do futuro.</p>
          </div>

          <div className="col-md-4">
            <h5>Links úteis</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Início</a></li>
              <li><a href="/oportunidades" className="text-white text-decoration-none">Oportunidades</a></li>
              <li><a href="/sobre" className="text-white text-decoration-none">Sobre</a></li>
              <li><a href="#" className="text-white text-decoration-none">Cadastro/Login</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Contato</h5>
            <p>Email: contato@futurotrabalho.com</p>
            <p>Telefone: (11) 99999-9999</p>
            <div>
              <a href="#" className="text-white me-2"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white me-2"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <p className="text-center mb-0">&copy; 2025 FuturoTrabalho. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;

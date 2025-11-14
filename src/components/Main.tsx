import '../assets/css/style.css'
import pessoa from '../assets/img/pessoa.png'
import { Link } from "react-router-dom";

function Main() {
  return (
    <main>
      <div className="container py-5">

        {/* Seção 1 */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h2 className="fw-bold">
              Sua primeira <br /> vaga profissional <br /> te espera!
            </h2>
            <div className="mt-4">
              <button
                className="aproxi btn btn-dark me-2"
                data-bs-toggle="modal"
                data-bs-target="#authModal"
              >
                Cadastrar
              </button>
              
             
                <Link to={"/Oportunidades"}><button className='btn btn-dark me-2 btn-custom apro'>Ver Vagas</button> </Link>
              
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img src={pessoa} alt="Jovem profissional" className="img-fluid" />
          </div>
        </div>

        <div className="my-5"></div>

        {/* Seção 2 */}
        <div className="row text-center bg-light py-4 rounded">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="bg-dark text-white p-4 rounded"><span className='aume'>71%</span> <br />  Se sentem perdidos na hora de entrar no mercado <br />  <span className='preto'>.</span></div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="bg-dark text-white p-4 rounded"> <span className='aume'>78%</span> <br /> dos Jovens não conseguem o primeiro emprego por falta de experiência71% <br /> </div>
          </div>
          <div className="col-md-4">
            <div className="bg-dark text-white p-4 rounded"><span className='aume'>63%</span> <br /> não têm portfólio para mostrar o própio potencial <br /> <span className='preto'> .</span></div>
          </div>
        </div>

        <div className="my-5"></div>

        {/* Seção 3 */}
        <div className="text-center mb-4">
          <h3 className="fw-bold">Um motivo do por que nos escolher</h3>
        </div>
        <div className="row text-center">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="border p-4 rounded">Nós guiamos você em cada passo</div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="border p-4 rounded">Nós ajudamos a você a quebrar esse ciclo</div>
          </div>
          <div className="col-md-4">
            <div className="border p-4 rounded">Criamos sua presença profissonal</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;

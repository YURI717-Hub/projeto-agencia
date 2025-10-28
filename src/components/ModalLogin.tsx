import '../assets/css/style.css'
import usuario from '../assets/img/usuario.png';
import emprego from '../assets/img/emprego.png'
function ModalLogin() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Cadastro ou login de usuários e empresas
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <h2>Login</h2>
            <p>Entre com suas credenciais</p>



            <div className="cin">
              <button id="btn-1" className="btn-1 active" >
                <i className="fas fa-login"></i>
                Login
              </button>
              <button id="btn-2" className="btn-2">
                <i className="fas fa-cadastro"></i>
                Cadastro
              </button>
            </div>
            <div className="img-cin-sup">
              <div className="img-cin-1"><img src={usuario} alt="" className='ative' /></div>
              <div className="img-cin-2"><img src={emprego} alt="" /></div>

            </div>
          </div>

          <form id='form-login-usuario' className='formulario'>
            <input type="email" placeholder=" Email" className="form-control mb-2" />
            <input type="password" placeholder=" Senha" className="form-control mb-2" />
  <br />
            <button type="submit" className="btn btn-dark w-100">Entrar</button>
            <p className="mt-3 text-center">
              Caso não lembre da senha <a href="#">clique aqui</a>
            </p>

          </form>



          <form className='formulario ' id='form-login-empresa' >
            <input type="email" placeholder=' Email' className='form-control mb-2' />
            <input type="password" placeholder=' Senha' className='form-control mb-2'/>
      
            <input type="text" placeholder=' CNPJ' className='form-control mb-2'/>
            <br /><br />

            <input type="submit" className="btn btn-dark w-100" value='Entrar '/>
            <p className="mt-3 text-center">
              Caso não lembre da senha <a href="#">clique aqui</a>
            </p>
          </form>



          <form className='formulario ' id='form-cadastro-usuario'>
            <input type="text" name='' id='' placeholder='  Nome' className='form-control mb-2' />
            
            <input type="email" name='' id='' placeholder='  Email' className='form-control mb-2'/>
            
            <input type="password" name="" id="" placeholder='  Senha' className='form-control mb-2'/>
            
            <input type="number" name='' id='' className='ida' placeholder='  Idade'  />
            <input type="tel" name='' id='' className='ida' placeholder='  Telefone' />
          <br />
            <label htmlFor="escolaridade" ></label>
            <select name="escolaridade" id="escolaridade" className='escola form-control mb-2' >
              <option value="nada">...</option>
               <option value="fundamental_incompleto">Fundamental Incompleto</option>
               <option value="fundamental_completo">Fundamental Completo</option>
               <option value="Medio_incompleto">Médio Incompleto </option>
               <option value="Medio_completo">Médio Completo </option>
               <option value="superior_incompleto">Superior Incompleto</option>
               <option value="superior_completo">Superior Completo</option>
               <option value="pos_graduacao">Pós-Graduação</option>
               <option value="mestrado">Mestrado</option>
               <option value="doutorado">Doutorado</option>
            </select>

             <button type="submit" className="btn btn-dark w-100">Entrar</button>
            <p className="mt-3 text-center">
              Caso não lembre da senha <a href="#">clique aqui</a>
            </p>
          </form>



          <form className='formulario ' id='form-cadastro-empresa'>
                <input type="text" name='' id='' placeholder='  Nome'/>
                <br /><br />
                <input type="text" name='' id='' placeholder='  CNPJ' />
                <br /><br />
                <input type="text"  name='' id='' placeholder='  Senha'/>
                <br /> <br />
                <input type="text" />
                <input type="text" />
                <br /><br />
                <textarea name="" id="">

                </textarea>
                <br /><br />

           <button type="submit" className="btn btn-dark w-100">Entrar</button>
            <p className="mt-3 text-center">
              Caso não lembre da senha <a href="#">clique aqui</a>
            </p>
          </form>



          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Fechar
            </button>
            <button type="button" className="btn btn-primary">Salvar</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ModalLogin;

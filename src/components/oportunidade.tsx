import '../assets/css/style.css'
import '../assets/css/oportunidades.css'
import Banner from '../assets/img/img-banner-busca 1.jpg'

function Oportunidade(){
   


  return (
    <main className="conteudo">
      <div className="imagem-topo">
        <img
          src={Banner}
          alt="Ilustração de busca de vagas"
        />
      </div>

      <h2>Filtrar Vagas</h2>

      {/* FILTROS */}
      <section className="filtros">
        <form>
          <input type="text" placeholder="Buscar vaga..." name="busca" />

          <select name="tipo">
            <option value="">Tipo de vaga</option>
            <option value="aprendiz">Jovem Aprendiz</option>
            <option value="estagio">Estágio</option>
          </select>

          <select name="area">
            <option value="">Área</option>
            <option value="administracao">Administração</option>
            <option value="ti">Tecnologia da Informação</option>
            <option value="atendimento">Atendimento</option>
            <option value="marketing">Marketing</option>
            <option value="vendas">Vendas</option>
            <option value="rh">Recursos Humanos</option>
          </select>

          <select name="cidade">
            <option value="">Cidade</option>
            <option value="sp">São Paulo</option>
            <option value="rj">Rio de Janeiro</option>
            <option value="bh">Belo Horizonte</option>
            <option value="curitiba">Curitiba</option>
          </select>

          <button type="submit">Filtrar</button>
        </form>
      </section>

      {/* LISTA DE VAGAS */}
      <section className="lista-vagas">
        <div className="vaga-card" data-area="marketing" data-tipo="estagio" data-cidade="bh">
          <h3>Estágio em Marketing</h3>
          <p><strong>Empresa:</strong> Comunicação Criativa</p>
          <p><strong>Cidade:</strong> Belo Horizonte</p>
          <p><strong>Tipo:</strong> Estágio</p>
          <button>Candidatar-se</button>
        </div>

        <div className="vaga-card" data-area="ti" data-tipo="estagio" data-cidade="sp">
          <h3>Estágio em TI</h3>
          <p><strong>Empresa:</strong> Tech Solutions</p>
          <p><strong>Cidade:</strong> São Paulo</p>
          <p><strong>Tipo:</strong> Estágio</p>
          <button>Candidatar-se</button>
        </div>

        <div className="vaga-card" data-area="atendimento" data-tipo="aprendiz" data-cidade="rj">
          <h3>Jovem Aprendiz em Atendimento</h3>
          <p><strong>Empresa:</strong> Supermercados Alfa</p>
          <p><strong>Cidade:</strong> Rio de Janeiro</p>
          <p><strong>Tipo:</strong> Jovem Aprendiz</p>
          <button>Candidatar-se</button>
        </div>

        <div className="vaga-card" data-area="administracao" data-tipo="aprendiz" data-cidade="sp">
          <h3>Jovem Aprendiz em Administração</h3>
          <p><strong>Empresa:</strong> Empresa X</p>
          <p><strong>Cidade:</strong> São Paulo</p>
          <p><strong>Tipo:</strong> Jovem Aprendiz</p>
          <button>Candidatar-se</button>
        </div>

        <div className="vaga-card" data-area="ti" data-tipo="estagio" data-cidade="sp">
          <h3>Estágio em Desenvolvimento Web</h3>
          <p><strong>Empresa:</strong> DevWorks</p>
          <p><strong>Cidade:</strong> Rio de Janeiro</p>
          <p><strong>Tipo:</strong> Estágio</p>
          <button>Candidatar-se</button>
        </div>

        <div className="vaga-card" data-area="rh" data-tipo="aprendiz" data-cidade="bh">
          <h3>Jovem Aprendiz em Recursos Humanos</h3>
          <p><strong>Empresa:</strong> RH Solutions</p>
          <p><strong>Cidade:</strong> Belo Horizonte</p>
          <p><strong>Tipo:</strong> Jovem Aprendiz</p>
          <button>Candidatar-se</button>
        </div>

        <div className="vaga-card" data-area="vendas" data-tipo="estagio" data-cidade="sp">
          <h3>Estágio em Vendas</h3>
          <p><strong>Empresa:</strong> Comercial Global</p>
          <p><strong>Cidade:</strong> São Paulo</p>
          <p><strong>Tipo:</strong> Estágio</p>
          <button>Candidatar-se</button>
        </div>
      </section>
    </main>
  );
}


export default Oportunidade;
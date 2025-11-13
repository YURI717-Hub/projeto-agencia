import { useEffect, useState } from "react";
import { ref, onValue, push, set, get } from "firebase/database";
import { db } from "../firebaseConfig";
import { getAuth } from "firebase/auth";

import "../assets/css/style.css";
import "../assets/css/oportunidades.css";
import Banner from "../assets/img/img-banner-busca 1.jpg";

interface Vaga {
  titulo: string;
  area: string;
  tipo: string;
  cidade: string;
  descricao: string;
  empresa: string;
  publicador: string;
}

function Oportunidade() {
  const [vagas, setVagas] = useState<Vaga[]>([]);
  const [filtro, setFiltro] = useState({
    busca: "",
    tipo: "",
    area: "",
    cidade: "",
  });
  const [expandidaIndex, setExpandidaIndex] = useState<number | null>(null);
  const auth = getAuth();

  // 🔹 Busca as vagas do Firebase
  useEffect(() => {
    const vagasRef = ref(db, "vagas/");
    onValue(vagasRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const lista = Object.values(data) as Vaga[];
        setVagas(lista);
      } else {
        setVagas([]);
      }
    });
  }, []);

  // 🔹 Filtro de busca
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFiltro({ ...filtro, [e.target.name]: e.target.value.toLowerCase() });
  };

  const vagasFiltradas = vagas.filter((vaga) => {
    const titulo = vaga.titulo?.toLowerCase() || "";
    const area = vaga.area?.toLowerCase() || "";
    const tipo = vaga.tipo?.toLowerCase() || "";
    const cidade = vaga.cidade?.toLowerCase() || "";

    const matchBusca = titulo.includes(filtro.busca);
    const matchTipo = !filtro.tipo || tipo === filtro.tipo;
    const matchArea = !filtro.area || area === filtro.area;
    const matchCidade = !filtro.cidade || cidade === filtro.cidade;

    return matchBusca && matchTipo && matchArea && matchCidade;
  });

  // 🔹 Função para registrar candidatura
  async function handleCandidatar(vaga: Vaga) {
    const user = auth.currentUser;

    if (!user) {
      alert("Você precisa estar logado para se candidatar.");
      return;
    }

    try {
      const candidaturasRef = ref(db, "candidaturas/");
      const snapshot = await get(candidaturasRef);
      let jaCandidatou = false;

      if (snapshot.exists()) {
        const candidaturas = snapshot.val();
        for (const id in candidaturas) {
          const c = candidaturas[id];
          if (c.usuarioId === user.uid && c.vagaTitulo === vaga.titulo) {
            jaCandidatou = true;
            break;
          }
        }
      }

      if (jaCandidatou) {
        alert("Você já se candidatou a esta vaga!");
        return;
      }

      const novaCandidatura = {
        vagaTitulo: vaga.titulo,
        vagaEmpresa: vaga.empresa || "Empresa confidencial",
        usuarioId: user.uid,
        nomeUsuario: user.displayName || "Usuário",
        emailUsuario: user.email,
        dataCandidatura: new Date().toISOString(),
        status: "enviado",
      };

      const novaRef = push(ref(db, "candidaturas"));
      await set(novaRef, novaCandidatura);

      alert("Candidatura enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar candidatura:", error);
      alert("Ocorreu um erro ao se candidatar. Tente novamente.");
    }
  }

  return (
    <main className="conteudo">
      <div className="imagem-topo">
        <img src={Banner} alt="Ilustração de busca de vagas" />
      </div>

      <h2>Filtrar Vagas</h2>

      <section className="filtros">
        <form>
          <input
            type="text"
            placeholder="Buscar vaga..."
            name="busca"
            value={filtro.busca}
            onChange={handleChange}
          />

          <select name="tipo" value={filtro.tipo} onChange={handleChange}>
            <option value="">Tipo de vaga</option>
            <option value="aprendiz">Jovem Aprendiz</option>
            <option value="estagio">Estágio</option>
            <option value="clt">CLT</option>
            <option value="pj">PJ</option>
            <option value="freelancer">Freelancer</option>
          </select>

          <select name="area" value={filtro.area} onChange={handleChange}>
            <option value="">Área</option>
            <option value="administracao">Administração</option>
            <option value="ti">Tecnologia da Informação</option>
            <option value="atendimento">Atendimento</option>
            <option value="marketing">Marketing</option>
            <option value="vendas">Vendas</option>
            <option value="rh">Recursos Humanos</option>
          </select>

          <select name="cidade" value={filtro.cidade} onChange={handleChange}>
            <option value="">Cidade</option>
            <option value="sp">São Paulo</option>
            <option value="rj">Rio de Janeiro</option>
            <option value="bh">Belo Horizonte</option>
            <option value="curitiba">Curitiba</option>
          </select>
        </form>
      </section>

      <section className="lista-vagas">
        {vagasFiltradas.length > 0 ? (
          vagasFiltradas.map((vaga, index) => {
            const expandida = expandidaIndex === index;
            const descricaoCurta =
              vaga.descricao.length > 180
                ? vaga.descricao.slice(0, 180) + "..."
                : vaga.descricao;

            return (
              <div key={index} className="vaga-card-catho">
                <span className="tag">CANDIDATURA FÁCIL</span>
                <h3 className="titulo">{vaga.titulo}</h3>

                <p className="empresa">
                  {vaga.empresa || "Empresa confidencial"} • Publicado por{" "}
                  <strong>{vaga.publicador || "Anônimo"}</strong>
                </p>

                <div className="info">
                  <p>💼 {vaga.tipo}</p>
                  <p>📍 {vaga.cidade}</p>
                  <p>🧭 {vaga.area}</p>
                </div>

                <p className="descricao">
                  {expandida ? vaga.descricao : descricaoCurta}
                </p>

                <button
                  className="btn-candidatar"
                  onClick={() => handleCandidatar(vaga)}
                >
                  Candidatar-se
                </button>
                <br />

                {vaga.descricao.length > 180 && (
                  <button
                    className="btn-leia-mais"
                    onClick={() =>
                      setExpandidaIndex(expandida ? null : index)
                    }
                  >
                    {expandida ? "Ler menos" : "Ler mais"}
                  </button>
                )}
              </div>
            );
          })
        ) : (
          <p>Nenhuma vaga encontrada.</p>
        )}
      </section>
    </main>
  );
}

export default Oportunidade;

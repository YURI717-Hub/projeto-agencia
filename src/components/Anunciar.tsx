import { useState, useEffect } from "react";
import { ref, push, onValue } from "firebase/database";
import { db } from "../firebaseConfig";
import "../assets/css/anunciar.css";
import "../assets/css/oportunidades.css";
import empresaLogo from "../assets/img/empresa2.png";

function Anuncia() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [vagas, setVagas] = useState([]); // <-- Armazena vagas vindas do Firebase
  const [vaga, setVaga] = useState({
    titulo: "",
    area: "",
    tipo: "",
    cidade: "",
    descricao: "",
  });

  // Abrir e fechar modal
  const abrirModal = () => setMostrarModal(true);
  const fecharModal = () => setMostrarModal(false);

  // Atualizar inputs
  const handleChange = (e) => {
    setVaga({ ...vaga, [e.target.name]: e.target.value });
  };

  // Enviar vaga para o Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const vagaRef = ref(db, "vagas/");
      await push(vagaRef, vaga);

      alert("✅ Vaga publicada com sucesso!");
      setVaga({ titulo: "", area: "", tipo: "", cidade: "", descricao: "" });
      fecharModal();
    } catch (error) {
      console.error("Erro ao salvar vaga:", error);
      alert("❌ Ocorreu um erro ao publicar a vaga.");
    }
  };

  // Ler vagas do Firebase em tempo real
  useEffect(() => {
    const vagasRef = ref(db, "vagas/");
    onValue(vagasRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Transforma o objeto em array
        const listaVagas = Object.entries(data).map(([id, value]) => ({
          id,
          ...value,
        }));
        setVagas(listaVagas);
      } else {
        setVagas([]);
      }
    });
  }, []);

  return (
    <>
      <div className="aprese">
        <img src={empresaLogo} alt="" className="fi" />
        <h1>Olá, [Nome da empresa]</h1>
      </div>

      {/* LISTA DE VAGAS ANUNCIADAS */}
      <div className="vaga-anuciadas">
        <h2>Vagas que já anunciou</h2>

        <div className="anunciada">
          {vagas.length > 0 ? (
            vagas.map((v) => (
              <div key={v.id} className="vaga-card">
                <h3>{v.titulo}</h3>
                <p><strong>Área:</strong> {v.area}</p>
                <p><strong>Cidade:</strong> {v.cidade}</p>
                <p><strong>Tipo:</strong> {v.tipo}</p>
                <p><strong>Descrição:</strong> {v.descricao}</p>
              </div>
            ))
          ) : (
            <p>Nenhuma vaga publicada ainda.</p>
          )}
        </div>
      </div>

      {/* BOTÃO NOVA VAGA */}
      <div className="butom-espaço">
        <button className="NV" onClick={abrirModal}>
          + Anunciar Nova Vaga
        </button>
      </div>

      {/* MODAL */}
      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="fechar-modal" onClick={fecharModal}>
              ✕
            </button>
            <h2>Anunciar Nova Vaga</h2>
            <form className="form-vaga" onSubmit={handleSubmit}>
              <label>Título da Vaga:</label>
              <input
                type="text"
                name="titulo"
                value={vaga.titulo}
                onChange={handleChange}
                placeholder="Ex: Desenvolvedor Front-End"
                required
              />

              <label>Área:</label>
              <input
                type="text"
                name="area"
                value={vaga.area}
                onChange={handleChange}
                placeholder="Ex: Tecnologia da Informação"
                required
              />

              <label>Tipo de Contrato:</label>
              <select
                name="tipo"
                value={vaga.tipo}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="Estágio">Estágio</option>
                <option value="Jovem Aprendiz">Jovem Aprendiz</option>
              </select>

              <label>Cidade:</label>
              <input
                type="text"
                name="cidade"
                value={vaga.cidade}
                onChange={handleChange}
                placeholder="Ex: São Paulo"
                required
              />

              <label>Descrição:</label>
              <textarea
                name="descricao"
                rows="4"
                value={vaga.descricao}
                onChange={handleChange}
                placeholder="Descreva a vaga..."
                required
              ></textarea>

              <button type="submit" className="btn-enviar">
                Publicar Vaga
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Anuncia;

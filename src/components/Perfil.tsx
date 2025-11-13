import { useState, useEffect } from "react";
import { ref, get, update } from "firebase/database";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // 🚀 para redirecionar
import { db } from "../firebaseConfig";
import "../assets/css/perfil.css";

function DadosPessoais() {
  const [userId, setUserId] = useState<string | null>(null);
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    telefone: "",
    outroTelefone: "",
    cep: "",
    rua: "",
    cidade: "",
    bairro: "",
    numero: "",
    complemento: "",
    dataNascimento: "",
    genero: "",
    estadoCivil: "Solteiro",
    escolaridade: "",
    idade: "",
    senha: "",
    tipo: "",
  });

  const auth = getAuth();
  const navigate = useNavigate(); // 🚀 para redirecionar o usuário

  // 🔹 Detecta o usuário logado e busca seus dados
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);

        try {
          const userRef = ref(db, `usuarios/${user.uid}`);
          const snapshot = await get(userRef);

          if (snapshot.exists()) {
            const dadosDoBanco = snapshot.val();
            console.log("📦 Dados encontrados:", dadosDoBanco);
            setDados((prev) => ({
              ...prev,
              ...dadosDoBanco,
              email: user.email || prev.email,
            }));
          } else {
            console.log("⚠️ Nenhum dado encontrado para este usuário.");
            setDados((prev) => ({
              ...prev,
              email: user.email || prev.email,
            }));
          }
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        }
      } else {
        console.log("Usuário não logado.");
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // 🔹 Atualiza os valores dos inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDados((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Salva/atualiza dados no Realtime Database
  const handleSalvar = async () => {
    if (!userId) {
      alert("❌ Nenhum usuário logado!");
      return;
    }

    try {
      const userRef = ref(db, `usuarios/${userId}`);
      await update(userRef, dados);
      alert("✅ Dados salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("❌ Erro ao salvar os dados!");
    }
  };

  // 🔹 Função para sair da conta
  const handleSair = async () => {
    try {
      await signOut(auth);
      alert("👋 Você saiu da conta!");
      navigate("/"); // 🚀 redireciona para home
    } catch (error) {
      console.error("Erro ao sair:", error);
      alert("❌ Erro ao sair da conta!");
    }
  };

  if (!userId) {
    return <p style={{ textAlign: "center", marginTop: "40px" }}>Carregando perfil do usuário...</p>;
  }

  return (
    <main>
      <h2 className="Title">Dados pessoais</h2>
      <br />
      <div className="main">
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          value={dados.nome}
          onChange={handleChange}
          className="form-control mb-2 rounded-2"
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          value={dados.email}
          onChange={handleChange}
          className="form-control mb-2 rounded-2"
          readOnly
        />

        <label htmlFor="telefone">Telefone</label>
        <input
          type="tel"
          name="telefone"
          value={dados.telefone}
          onChange={handleChange}
          className="form-control mb-2 rounded-2"
        />

        <label htmlFor="outroTelefone">Outro Telefone</label>
        <input
          type="tel"
          name="outroTelefone"
          value={dados.outroTelefone}
          onChange={handleChange}
          className="form-control mb-2 rounded-2"
        />

        <label htmlFor="cep">CEP</label>
        <input
          type="text"
          name="cep"
          value={dados.cep}
          onChange={handleChange}
          className="form-control mb-2 rounded-2"
        />

        <label htmlFor="rua">Logradouro (Rua, Avenida)</label>
        <input
          type="text"
          name="rua"
          value={dados.rua}
          onChange={handleChange}
          className="form-control mb-2 rounded-2"
        />

        <label htmlFor="cidade">Cidade</label>
        <input
          type="text"
          name="cidade"
          value={dados.cidade}
          onChange={handleChange}
          className="form-control mb-2 rounded-2"
        />

        <label htmlFor="bairro">Bairro</label>
        <input
          type="text"
          name="bairro"
          value={dados.bairro}
          onChange={handleChange}
          className="form-control mb-2 rounded-2"
        />

        <label htmlFor="numero">Número</label>
        <input
          type="text"
          name="numero"
          value={dados.numero}
          onChange={handleChange}
          className="form-control mb-2 rounded-2"
        />

        <label htmlFor="complemento">Complemento</label>
        <input
          type="text"
          name="complemento"
          value={dados.complemento}
          onChange={handleChange}
          className="form-control mb-2 rounded-2"
        />

        <label htmlFor="dataNascimento">Data de nascimento</label>
        <input
          type="text"
          name="dataNascimento"
          value={dados.dataNascimento}
          onChange={handleChange}
          className="form-control mb-2 rounded-2"
        />

        <label htmlFor="genero">Gênero</label>
        <div className="d-flex gap-2 mb-3">
          <button
            type="button"
            className={`btn ${dados.genero === "Feminino" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => setDados((prev) => ({ ...prev, genero: "Feminino" }))}
          >
            Feminino
          </button>
          <button
            type="button"
            className={`btn ${dados.genero === "Masculino" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => setDados((prev) => ({ ...prev, genero: "Masculino" }))}
          >
            Masculino
          </button>
        </div>

        <label htmlFor="estadoCivil">Estado Civil</label>
        <select
          name="estadoCivil"
          value={dados.estadoCivil}
          onChange={handleChange}
          className="form-control mb-2 rounded-2"
        >
          <option value="Solteiro">Solteiro</option>
          <option value="Casado">Casado</option>
          <option value="Viúvo">Viúvo</option>
          <option value="Separado">Separado</option>
          <option value="Divorciado">Divorciado</option>
        </select>

        <button onClick={handleSalvar} className="btn btn-dark w-100 mb-2">
          Salvar
        </button>

        <button onClick={handleSair} className="btn btn-outline-dark w-100">
          Sair da Conta
        </button>
      </div>
    </main>
  );
}

export default DadosPessoais;

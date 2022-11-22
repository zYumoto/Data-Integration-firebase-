import Layout from "../components/Layout";
import { useState } from "react";

export default function Integracao() {
  const [cliente, setCliente] = useState({});
  const [codigo, setCodigo] = useState(1);

  async function getApi() {
    const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`);
    const dados = await resp.json();
    setCliente(dados);

    /*  
    Utilizando promises
    fetch(`http://localhost:3000/api/clientes/${codigo}`)
      .then((resp) => resp.json())
      .then((dados) => setCliente(dados)); */
  }

  return (
    <Layout titulo="Integração com API #01">
      <div>
        <input
          type="number"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <button onClick={getApi}>Obter Clientes</button>
      </div>
      <ul>
        <li>Codigo: {cliente.id}</li>
        <li>Nome: {cliente.nome}</li>
        <li>Email: {cliente.email}</li>
      </ul>
    </Layout>
  );
}
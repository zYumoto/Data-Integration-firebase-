import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {
  const [numero, setNumero] = useState(1); //Hooks

  return (
    <Layout titulo="Componente com Estado">
      <div>{numero}</div>
      <button onClick={() => setNumero(numero + 1)}>
        Incrementar um numero
      </button>
    </Layout>
  );
}
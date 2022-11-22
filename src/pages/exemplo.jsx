import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo() {
  return (
    <Layout titulo="Usando componentes">
      <Cabecalho titulo="Next.js & React" />
      <Cabecalho titulo="Aprender Next na pratica" />
    </Layout>
  );
}
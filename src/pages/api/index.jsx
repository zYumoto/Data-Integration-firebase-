import Navegador from "../components/Navegador";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexWrap: "wrap",
      }}
    >
      <Navegador texto="Estiloso" destino="/estiloso" />
      <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3" />
      <Navegador texto="JSX" destino="/jsx" cor="crimson" />
      <Navegador texto="Navegacao #01" destino="/navegacao" cor="green" />
      <Navegador texto="Navegacao #02" destino="/cliente/sp/321" cor="blue" />
      <Navegador texto="Componente com estado " destino="/estado" cor="pink" />
      <Navegador texto="Componente com estado" destino="/estado" cor="pink" />
      <Navegador texto="Integração com API #01" destino="/integracao_1" cor="yellow" />
      <Navegador texto="Conteudo Estatico" destino="/estatico" cor="#E82042" />
    </div>
  );
}
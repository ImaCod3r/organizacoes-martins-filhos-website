import CustomDynamicHero from '../components/CustomDynamicHero.jsx';

// StyleSheet
import "../styles/Home.css";

function Home() {
  return (
    <>
      <CustomDynamicHero />
      <section className="home">
        <div className="text-wrapper">
          <h2>Bem-vindo à M.C. Martins & Filhos</h2>
          <p>Especialistas em higiene, limpeza, jardinagem e desinfestação.
            Com mais de uma década de experiência, oferecemos serviços personalizados para atender às suas necessidades...
            <a href='/sobre' style={{ fontWeight: 500, fontSize: 14 }} >Saber mais.</a></p>
        </div>

        <img src={new URL("../assets/20.jpg", import.meta.url)} alt="Homem fazendo desifestação." style={{ width: "80%", borderRadius: 8, marginBlock: 32 }} />

        <div className="text-wrapp">
          <p>Na M.C. Martins & Filhos, Lda, acreditamos que cada espaço merece estar limpo, cuidado e preparado para proporcionar bem-estar, conforto e produtividade.
            Com mais de uma década de experiência no mercado angolano e uma equipa de profissionais certificados, oferecemos soluções completas de higiene, limpeza, jardinagem, desinfestação e serviços personalizados, sempre adaptados às necessidades de cada cliente.</p>
          <p>Sabemos que cada empresa, instituição ou residência tem desafios únicos. Por isso, desenvolvemos planos de serviços flexíveis, desde limpezas ocasionais a contratos de manutenção regular, garantindo sempre qualidade, segurança e pontualidade.
            Utilizamos produtos de limpeza testados e certificados, respeitando o meio ambiente e assegurando ambientes mais saudáveis e livres de riscos...<a href='/servicos' style={{ fontWeight: 500, fontSize: 14 }} >Saber mais.</a></p>
        </div>
      </section>
    </>
  );
}

export default Home;
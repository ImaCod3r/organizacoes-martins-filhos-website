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
                    Com mais de uma década de experiência, oferecemos serviços personalizados para atender às suas necessidades.</p>
            </div>
        </section>
    </>
  );
}

export default Home;
import Carousel from '../components/Carousel.jsx';
import ScrollAnimRepeat from '../components/ScrollAnim.jsx';

function Portfolio() {
    return (
        <>
            <section className="portfolio">
                <Carousel autoplay={true} pauseOnHover={true} />
            </section>

            <section className="costumers">
                <h2>Clientes Satisfeitos</h2>
                <ScrollAnimRepeat>
                    <div>
                        <img src={new URL("../assets/cabship.jpg", import.meta.url)} alt="Cabship" />
                        <img src={new URL("../assets/apolonia-complexus.jpg", import.meta.url)} alt="Apolonia Complexus" />
                        <img src={new URL("../assets/petro-ngoio.jpg", import.meta.url)} alt="Petro Ngoio" />
                        <img src={new URL("../assets/porto-de-cabinda.jpg", import.meta.url)} alt="Porto de Cabinda" />
                    </div>
                </ScrollAnimRepeat>
            </section>
        </>
    );
}

export default Portfolio;
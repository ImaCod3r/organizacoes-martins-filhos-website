import "../styles/Services.css";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
import ScrollAnimRepeat from "../components/ScrollAnim.jsx";

function Services() {
    return (
        <div className="services">
            <ScrollAnimRepeat>
                <h2>Nossos Serviços</h2>
                <p>Na M.C. Martins & Filhos, Lda, acreditamos que cada espaço merece estar limpo, cuidado e preparado para proporcionar bem-estar, conforto e produtividade.
                    Com mais de uma década de experiência no mercado angolano e uma equipa de profissionais certificados, oferecemos soluções completas de higiene, limpeza, jardinagem, desinfestação e serviços personalizados, sempre adaptados às necessidades de cada cliente.</p>
                <p>Sabemos que cada empresa, instituição ou residência tem desafios únicos. Por isso, desenvolvemos planos de serviços flexíveis, desde limpezas ocasionais a contratos de manutenção regular, garantindo sempre qualidade, segurança e pontualidade.
                    Utilizamos produtos de limpeza testados e certificados, respeitando o meio ambiente e assegurando ambientes mais saudáveis e livres de riscos.</p>
                <p>O nosso compromisso é superar expectativas: não se trata apenas de limpar ou conservar espaços, mas de criar um ambiente que valoriza a sua imagem, protege a saúde de todos e transmite confiança.
                    Explore abaixo os nossos principais serviços e descubra como podemos ajudá-lo a transformar o seu espaço.</p>
            </ScrollAnimRepeat>
            <ScrollAnimRepeat>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </ScrollAnimRepeat>
        </div>
    )
}

export default Services;
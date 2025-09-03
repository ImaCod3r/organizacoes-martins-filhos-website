import CustomInfoCard from '../components/CustomInfoCard.jsx';
import Counter from '../components/Counter.jsx';
import ScrollAnimRepeat from '../components/ScrollAnim.jsx';

// StyleSheet
import "../styles/About.css";

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

function About() {
    return (
        <section className="about" id="about">
            <ScrollAnimRepeat>
                <h2>Sobre Nós</h2>

                <p>A M.C. Martins & Filhos, Lda é uma empresa angolana especializada em higiene, limpeza, jardinagem, desinfestação e serviços personalizados.
                    Com mais de uma década de experiência e mais de 1.500 trabalhos realizados, atendemos clientes corporativos, instituições públicas e residências em Cabinda e outras regiões do país.
                    Nossa história começou em 2011 como empresa individual Organizações MCM. Em 2018, ampliamos nossas operações e, em 2023, passamos para o regime coletivo com a nova denominação actual. Essa evolução representa nosso compromisso contínuo com a qualidade, inovação e profissionalismo.</p>
            </ScrollAnimRepeat>

            <ScrollAnimRepeat>
                <div className="card-wrapper">
                    <CustomInfoCard
                        title="Missão"
                        body="Liderança, meritocracia, desenvolvimento, inovação e excelência."
                    />

                    <CustomInfoCard
                        title="Valores"
                        body="Pontualidade, assiduidade, qualidade, inovação, profissionalismo, atenção ao cliente e prontidão."
                    />

                    <CustomInfoCard
                        title="Objectivos"
                        body="Atender as reais necessidades dos clientes, oferecendo soluções viáveis e de qualidade superior"
                    />
                </div>
            </ScrollAnimRepeat>

            <div className="diffs">
                <div className="diffs-wrapper">

                    <div className="diff">
                        <span>
                            + <Counter limit={1500} speed={10} step={10} />
                        </span>

                        <p>Trabalhos de
                            <br /> limpeza realizados</p>
                    </div>

                    <div className="diff">
                        <span>
                            + <Counter limit={50} speed={10} step={1} />
                        </span>

                        <p>Operadores certificados e experientes.</p>
                    </div>

                    <div className="diff">
                        <span>
                            <FontAwesomeIcon icon={faBuilding} color='#0958ac' />
                        </span>

                        <p>Atuação em ambientes onshore e offshore.</p>
                    </div>

                </div>
            </div>  

            <div className="location-wrapper">
                <div className="text-wrapper">
                    <h3>Visite-nos</h3>
                    <p>Estamos localizados em Cabinda, Urbanização 4 de Abril - Chibodo Bloco C11 Apart. C103 Rés do Chão.</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.9706842971277!2d12.278558971488795!3d-5.558787840806751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5dcd0012b8a311%3A0x8182372136d581bd!2sEscrit%C3%B3rio%20da%20Empresa%20M.C.%20Martins%20%26%20Filhos%2C%20LDA!5e1!3m2!1spt-PT!2sao!4v1755045020609!5m2!1spt-PT!2sao"
                    loading="lazy"
                    className="map-iframe">
                </iframe>
            </div>
        </section>
    );
}

export default About;
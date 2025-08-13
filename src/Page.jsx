import { useState } from 'react';
import './styles/thirty-party-components.css';
import './styles/mobile.css';

// Components
import CustomHeader from './components/CustomHeader.jsx';
import CustomDynamicHero from './components/CustomDynamicHero.jsx';
import CustomInfoCard from './components/CustomInfoCard.jsx';
import Counter from './components/Counter.jsx';
import CustomContactForm from "./components/CustomContactForm.jsx";
import CustomFooter from './components/CustomFooter.jsx';
import ScrollAnimRepeat from './components/ScrollAnim.jsx';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import Carousel from './components/Carousel.jsx';

function App() {
  return (
    <>
      <CustomHeader />
      <main>

        <CustomDynamicHero />

        <section className="about" id="about">
          <ScrollAnimRepeat>
            <h2>Sobre Nós</h2>

            <p>A M.C. Martins & Filhos, Lda é uma empresa angolana especializada em higiene, limpeza, jardinagem, desinfestação e serviços personalizados.
              Com mais de uma década de experiência e mais de 1.500 trabalhos realizados, atendemos clientes corporativos, instituições públicas e residências em Cabinda e outras regiões do país.
              Nossa história começou em 2011 como empresa individual Organizações MCM. Em 2018, ampliamos nossas operações e, em 2023, passamos para o regime coletivo com a nova denominação atual. Essa evolução representa nosso compromisso contínuo com a qualidade, inovação e profissionalismo.</p>
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
                title="Objetivos"
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
        </section>

        <section className="portfolio" id="portfolio">
          <Carousel autoplay={true} pauseOnHover={true} />
        </section>

        <section className="costumers">
          <h2>Clientes Satisfeitos</h2>
          <ScrollAnimRepeat>
            <div>
              <img src="src/assets/cabship.jpg" alt="Cabship" />
              <img src="src/assets/apolonia-complexus.jpg" alt="Apolonia Complexus" />
              <img src="src/assets/petro-ngoio.jpg" alt="Petro Ngoio" />
              <img src="src/assets/porto-de-cabinda.jpg" alt="Porto de Cabinda" />
            </div>
          </ScrollAnimRepeat>
        </section>

        <section className="contact" id="contacts">

          <div>
            <ScrollAnimRepeat>
              <div className="text-wrapper">

                <h2>Fale conosco</h2>
                <p>Estamos prontos para atender você, solicite um orçamento. Basta preencher os campos abaixo para receber mais informações.</p>
              </div>
              <CustomContactForm />
            </ScrollAnimRepeat>

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
      </main>

      <CustomFooter />
    </>
  )
}

export default App;
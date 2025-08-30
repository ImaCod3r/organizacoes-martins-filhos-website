import ScrollAnimRepeat from '../components/ScrollAnim.jsx';
import CustomContactForm from "../components/CustomContactForm.jsx";

// StyleSheet
import "../styles/Contacts.css";

function Contacts() {
    return (
        <section className="contact">
            <div>
                <ScrollAnimRepeat>
                    <div className="text-wrapper">
                        <h2>Fale conosco</h2>
                        <p>Estamos prontos para o atender. Diga-nos do que precisa e teremos todo o gosto em ajudar!
                            Preencha os campos abaixo e a nossa equipa entrará em contacto consigo com todas as informações necessárias.</p>
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
    )
}

export default Contacts;
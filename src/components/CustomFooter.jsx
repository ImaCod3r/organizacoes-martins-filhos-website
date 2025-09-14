import { Link } from "react-router-dom";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";

const CustomFooter = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div>
                    <img src={new URL("../assets/logo.jpg", import.meta.url)} alt="logo" />
                    <p>Cuidamos do presente para garantir o futuro.</p>

                    <button className="get-order-button">
                        <Link to="/contactos" onClick={() => window.scrollTo(0, 0)}>
                            Entre em contacto →
                        </Link>
                    </button>
                </div>

                <div>
                    <h3>Informações de contacto</h3>

                    <ul>
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=244924241280&text=Olá!" target="_blank">
                                <FontAwesomeIcon icon={faPhone} size="2x" />
                                +244 924241280
                            </a>
                        </li>
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=244924241280&text=Olá!" target="_blank">
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                                +244 924241280
                            </a>
                        </li>
                        <li>
                            <a href="mailto:organizacoes.mcm@gmail.com" target="_blank">
                                <FontAwesomeIcon icon={faMailBulk} size="2x" />
                                organizacoes.mcm@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/share/19dnp948kL/" target="_blank">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                                M.C Martins & Filhos, Lda
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/mc_martins_filhoslda?igsh=OTZncmV2cWFvejVm" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                                @mc_martins_filhoslda
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>Links rápidos</h3>

                    <ul>
                        <li>
                            <Link to="/">Página Inicial</Link>
                        </li>

                        <li>
                            <Link to="/servicos">Serviços</Link>
                        </li>

                        <li>
                            <Link to="/sobre">Sobre nós</Link>
                        </li>

                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>

                        <li>
                            <Link to="/contactos">Contactos</Link>
                        </li>

                    </ul>
                </div>
            </div>

            <p>&copy; M.C Martins & Filhos, Lda {new Date().getFullYear()}</p>
        </footer>
    )
}

export default CustomFooter;
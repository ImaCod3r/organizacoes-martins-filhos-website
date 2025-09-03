import React from "react";
import { Link } from "react-router-dom";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";

const CustomFooter = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div>
                    <img src={new URL("../assets/logo.jpg", import.meta.url)} alt="logo" />
                    <p>Cuidamos do presente para garantir o futuro.</p>

                    <button className="get-order-button">
                        <Link to="contactos">
                            Solicitar orçamento →
                        </Link>
                    </button>
                </div>

                <div>
                    <h3>Informações de contato</h3>

                    <ul>
                        <li>
                            <a href="wa.me/244924241280">
                                <FontAwesomeIcon icon={faPhone} size="2x" />
                                +244 924241280
                            </a>
                        </li>
                        <li>
                            <a href="wa.me/+244924241280" target="_blank">
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
                    </ul>
                </div>

                <div>
                    <h3>Links rápidos</h3>

                    <ul>
                        <li>
                            <a href="/">Página Inicial</a>
                        </li>

                        <li>
                            <a href="/servicos">Serviços</a>
                        </li>

                        <li>
                            <a href="/sobre">Sobre nós</a>
                        </li>

                        <li>
                            <a href="/portfolio">Portfolio</a>
                        </li>

                        <li>
                            <a href="/contactos">Contactos</a>
                        </li>

                    </ul>
                </div>
            </div>

            <p>&copy; M.C Martins & Filhos, Lda {new Date().getFullYear()}</p>
        </footer>
    )
}

export default CustomFooter;
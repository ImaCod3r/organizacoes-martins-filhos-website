import React from "react";
import { Link } from "react-scroll";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";

const CustomFooter = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div>
                    <img src={new URL("../assets/logo.jpg", import.meta.url)} alt="logo" />
                    <p>Cuidando do presente para garantir o futuro.</p>

                    <button className="get-order-button">
                        <Link to="contacts" smooth={true} duration={500}>
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
                    </ul>
                </div>

                <div>
                    <h3>Links rápidos</h3>

                    <ul>
                        <li>
                            <a href="#home">Página Inicial</a>
                        </li>

                        <li>
                            <a href="#services">Serviços</a>
                        </li>

                        <li>
                            <a href="#about">Sobre nós</a>
                        </li>

                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>

                        <li>
                            <a href="#contacts">Contacto</a>
                        </li>

                    </ul>
                </div>
            </div>

            <p>&copy; M.C Martins & Filhos, Lda {new Date().getFullYear()}</p>
        </footer>
    )
}

export default CustomFooter;
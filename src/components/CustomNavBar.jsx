import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const CustomNavBar = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <nav className="menu" id="home">

                {/* Botão hambúrguer */}
                <button className="hamburger" onClick={() => setOpen(!open)}>
                    ☰
                </button>

                {/* Links do menu */}
                <ul className={`menu-links ${open ? "open" : ""}`}>
                    {open && (
                        <div className="menu-header">
                            <img src={new URL("../assets/logo.jpg", import.meta.url)} alt="logo" />
                            <button onClick={() => setOpen(false)}>
                                <FontAwesomeIcon icon={faClose} />
                            </button>
                        </div>
                    )}

                    <li>
                        <Link to="/" onClick={() => setOpen(false)}>Início</Link>
                    </li>
                    <li>
                        <Link to="/servicos">Serviços</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfólio</Link>
                    </li>
                    <li>
                        <Link to="/contactos">Contacto</Link>
                    </li>
                </ul>
            </nav>
            {open && (
                <div className={`overlay ${open ? "show" : ""}`} onClick={() => setOpen(false)}></div>
            )}
        </>
    );
}

export default CustomNavBar;
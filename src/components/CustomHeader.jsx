import React from "react";
import CustomNavBar from "./CustomNavBar.jsx";

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhone, faAddressCard} from '@fortawesome/free-solid-svg-icons';

const CustomHeader = () => {
    return (
        <>
            <div className="contacts-bar">
                <span>
                    <FontAwesomeIcon icon={faSquarePhone} color="#fff" />
                    +244 924241280</span>
                <span>
                    <FontAwesomeIcon icon={faAddressCard} />
                    organizacoes.mcm@gmail.com</span>
            </div>
            <header className="custom-header">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="./favicon.png" alt="Logo" style={{ width: 50, height: 50}} />
                    <a href="/">M.C Martins & Filhos</a>
                </div>

                <CustomNavBar platform="desktop" />
            </header>
        </>
    )
}

export default CustomHeader;
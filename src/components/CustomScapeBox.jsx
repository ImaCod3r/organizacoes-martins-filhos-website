import React from "react";
import CustomBoxCard from "./CustomBoxCard.jsx";

// Icons
import { faBroom, faLeaf, faSprayCan } from "@fortawesome/free-solid-svg-icons";

const CustomScapeBox = () => {
    return (
        <div className="scape-box">
            <CustomBoxCard 
                title="Limpeza" 
                body="De escritórios a residencias, limpeza impecável com equipe certificada." 
                icon={faBroom}
            />
            <CustomBoxCard 
                title="Jardinagem" 
                body="Cuidamos de jardins e áreas verdes, garantindo beleza e conservação." 
                icon={faLeaf}
            />
            <CustomBoxCard
                title="Desinfestação"
                body="Eliminamos pragas com métodos seguros e eficazes."
                icon={faSprayCan}
            />
        </div>
    )
}

export default CustomScapeBox;
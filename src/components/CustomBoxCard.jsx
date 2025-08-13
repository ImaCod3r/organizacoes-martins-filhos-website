import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomBoxCard = ({ title, body, icon }) => {
    return (
        <div className="box-card">
            <div className="title">
                <FontAwesomeIcon icon={icon} size="2x" />
                <h2>{title}</h2>
            </div>

            <p>{body}</p>
        </div>
    )
}

export default CustomBoxCard;
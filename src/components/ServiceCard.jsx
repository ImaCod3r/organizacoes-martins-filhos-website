import { useState } from "react";

const ServiceCard = ({ title, description }) => {
    const [expanded, setExpanded] = useState(false);

    const shortText =
        description.length > 100
            ? description.substring(0, 100) + "..."
            : description;

    return (
        <div className="service-card">
            <h3 className="service-title">{title}</h3>

            <p className="service-desc">
                {expanded ? description : shortText}
            </p>

            <button
                className="service-btn"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? "Ver menos" : "Ver mais"}
            </button>
        </div>
    );
};

export default ServiceCard;

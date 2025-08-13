import React from "react";

const CustomInfoCard = ({ title, body }) => {
    return (
        <div className="info-card">
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
    )
}

export default CustomInfoCard;
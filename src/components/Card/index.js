import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <input
                className="inputCard"
                type="image"
                alt={props.name}
                src={props.image} 
                onClick={props.onClick}
            />
        </div>
    );
}

export default Card;

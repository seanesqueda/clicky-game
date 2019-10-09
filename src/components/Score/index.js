import React from "react";
import "./style.css";

function Score(props) {
    return (
        <div className="score">
            Current Score: {props.currentScore} | Top Score: {props.topScore}
        </div>

    )
}

export default Score;
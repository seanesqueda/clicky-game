import React from "react";
import "./style.css";

function Correct(props) {
    return (
      <div className="correct">
          {props.message}
      </div>  
    );
}

export default Correct;
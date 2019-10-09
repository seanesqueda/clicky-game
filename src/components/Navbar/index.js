import React from "react";
import "./style.css";
import Correct from "../Correct";
import Score from "../Score"

function Navbar(props) {
  return (
    <nav className="navbar">
      <a href="/" style={{color: "white", fontWeight: "bold"}}>Clicky Game</a>
      <Correct message={props.message}/>
      <Score 
      currentScore={props.currentScore}
      topScore={props.topScore}
      />
    </nav>
  );
}


export default Navbar;
import React from "react";
import "./style.css";
import Correct from "../Correct";
import Score from "../Score"

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" style={{color: "white", fontWeight: "bold"}}>Clicky Game</a>
      <Correct />
      <Score />
    </nav>
  );
}


export default Navbar;
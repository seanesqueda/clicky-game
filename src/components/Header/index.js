import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="header">
      Clicky Game!
      <div style={{fontSize: "30px", fontWeight: "500", padding: "35px"}}>Click on an image to earn points, but don't click on any more than once!</div>
    </div>
  );
}

export default Header;
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>GreenHouse</h1>
      <p>Las mejores plantas de interior para tu hogar.</p>
      <Link to="/products"><button>Empezar</button></Link>
    </div>
  );
};

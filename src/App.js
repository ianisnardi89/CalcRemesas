import React from "react";
import "./App.css";
import norte from "./assets/img/logo-big.png";
import Formulario from "./Components/Formulario";

function App() {
  return (
    <body className="body">
      <div>
        <div className="imagen">
          <img src={norte} alt="Norte" />
        </div>
        <Formulario />
      </div>

      <p className="para">
        Isnardi Bieber Ian - &copy; {new Date().getFullYear()}
      </p>
    </body>
  );
}

export default App;

import React, { useState } from "react";

const Formulario = () => {
  const [Mil, setMil] = useState(0);

  const handleChangeMil = (e) => {
    const suma = parseInt(e.target.value);

    setMil(suma);
  };

  const [Qui, setQui] = useState(0);

  const handleChangeQui = (e) => {
    const suma = parseInt(e.target.value);

    setQui(suma);
  };

  const [Dos, setDos] = useState(0);

  const handleChangeDos = (e) => {
    const suma = parseInt(e.target.value);

    setDos(suma);
  };

  const [Cien, setCien] = useState(0);

  const handleChangeCien = (e) => {
    const suma = parseInt(e.target.value);

    setCien(suma);
  };

  const [Cin, setCin] = useState(0);

  const handleChangeCin = (e) => {
    const suma = parseInt(e.target.value);

    setCin(suma);
  };

  const [Vein, setVein] = useState(0);

  const handleChangeVein = (e) => {
    const suma = parseInt(e.target.value);

    setVein(suma);
  };

  const [Diez, setDiez] = useState(0);

  const handleChangeDiez = (e) => {
    const suma = parseInt(e.target.value);

    setDiez(suma);
  };

  const [Picos, setPicos] = useState(0);

  const handleChangePicos = (e) => {
    const suma = parseFloat(e.target.value);

    setPicos(suma);
  };

  var remesa =
    Mil * 1000 +
    Qui * 500 +
    Dos * 200 +
    Cien * 100 +
    Cin * 50 +
    Vein * 20 +
    Diez * 10 +
    Picos;

  function formatNumber(numero) {
    if (isNaN(numero)) {
      return "¡Ingrese todos los valores!";
    } else {
      return new Intl.NumberFormat("ES-AR", {
        style: "currency",
        currency: "ARS",
      }).format(numero);
    }
  }

  return (
    <div
      className="container"
      style={{
        backgroundColor: "#ffffff10",
        width: "70vw",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "solid gray",
        borderRadius: "10px",
      }}
    >
      <div className="contenedor">
        <form style={{ justifyContent: "center", display: "flex" }}>
          <div
            className="mb-3 pb-0"
            style={{
              width: "400px",
              display: "flex",
              padding: "20px",
              margin: "0px 0px 0px 0px",
              justifyContent: "center",
            }}
          >
            <label
              className="form-label"
              style={{
                color: "white",
                padding: "15px",
                margin: "0px 0px 0px 0px",
              }}
            >
              X1000
            </label>
            <input
              type="number"
              class="form-control"
              style={{ margin: "0px" }}
              value={Mil}
              onChange={handleChangeMil}
            />
          </div>
        </form>
      </div>
      <div className="contenedor">
        <form style={{ justifyContent: "center", display: "flex" }}>
          <div
            className="mb-3 pb-0"
            style={{
              width: "400px",
              display: "flex",
              padding: "20px",
              margin: "0px 0px 0px 0px",
              justifyContent: "center",
            }}
          >
            <label
              className="form-label"
              style={{
                color: "white",
                padding: "15px",
                margin: "0px 4.5px",
              }}
            >
              X500
            </label>
            <input
              type="number"
              class="form-control"
              style={{ margin: "0px" }}
              value={Qui}
              onChange={handleChangeQui}
            />
          </div>
        </form>
      </div>
      <div className="contenedor">
        <form style={{ justifyContent: "center", display: "flex" }}>
          <div
            className="mb-3 pb-0"
            style={{
              width: "400px",
              display: "flex",
              padding: "20px",
              margin: "0px 0px 0px 0px",
              justifyContent: "center",
            }}
          >
            <label
              className="form-label"
              style={{
                color: "white",
                padding: "15px",
                margin: "0px 4.5px",
              }}
            >
              X200
            </label>
            <input
              type="number"
              class="form-control"
              style={{ margin: "0px" }}
              value={Dos}
              onChange={handleChangeDos}
            />
          </div>
        </form>
      </div>
      <div className="contenedor">
        <form style={{ justifyContent: "center", display: "flex" }}>
          <div
            className="mb-3 pb-0"
            style={{
              width: "400px",
              display: "flex",
              padding: "20px",
              margin: "0px 0px 0px 0px",
              justifyContent: "center",
            }}
          >
            <label
              className="form-label"
              style={{
                color: "white",
                padding: "15px",
                margin: "0px 4.5px",
              }}
            >
              X100
            </label>
            <input
              type="number"
              class="form-control"
              style={{ margin: "0px" }}
              value={Cien}
              onChange={handleChangeCien}
            />
          </div>
        </form>
      </div>
      <div className="contenedor">
        <form style={{ justifyContent: "center", display: "flex" }}>
          <div
            className="mb-3 pb-0"
            style={{
              width: "400px",
              display: "flex",
              padding: "20px",
              margin: "0px 0px 0px 0px",
              justifyContent: "center",
            }}
          >
            <label
              className="form-label"
              style={{
                color: "white",
                padding: "15px",
                margin: "0px 8.2px",
              }}
            >
              X50
            </label>
            <input
              type="number"
              class="form-control"
              style={{ margin: "0px" }}
              value={Cin}
              onChange={handleChangeCin}
            />
          </div>
        </form>
      </div>
      <div className="contenedor">
        <form style={{ justifyContent: "center", display: "flex" }}>
          <div
            className="mb-3 pb-0"
            style={{
              width: "400px",
              display: "flex",
              padding: "20px",
              margin: "0px 0px 0px 0px",
              justifyContent: "center",
            }}
          >
            <label
              className="form-label"
              style={{
                color: "white",
                padding: "15px",
                margin: "0px 8.2px",
              }}
            >
              X20
            </label>
            <input
              type="number"
              class="form-control"
              style={{ margin: "0px" }}
              value={Vein}
              onChange={handleChangeVein}
            />
          </div>
        </form>
      </div>
      <div className="contenedor">
        <form style={{ justifyContent: "center", display: "flex" }}>
          <div
            className="mb-3 pb-0"
            style={{
              width: "400px",
              display: "flex",
              padding: "20px",
              margin: "0px 0px 0px 0px",
              justifyContent: "center",
            }}
          >
            <label
              className="form-label"
              style={{
                color: "white",
                padding: "15px",
                margin: "0px 8.2px",
              }}
            >
              X10
            </label>
            <input
              type="number"
              class="form-control"
              style={{ margin: "0px" }}
              value={Diez}
              onChange={handleChangeDiez}
            />
          </div>
        </form>
      </div>
      <div className="contenedor">
        <form style={{ justifyContent: "center", display: "flex" }}>
          <div
            className="mb-3 pb-0"
            style={{
              width: "400px",
              display: "flex",
              padding: "20px",
              margin: "0px 0px 0px 0px",
              justifyContent: "center",
            }}
          >
            <label
              className="form-label"
              style={{
                color: "white",
                padding: "15px",
                margin: "0px 3px",
              }}
            >
              Picos
            </label>
            <input
              type="number"
              class="form-control"
              style={{ margin: "0px" }}
              value={Picos}
              onChange={handleChangePicos}
            />
          </div>
        </form>
      </div>
      <div>
        <h2
          className="m-3"
          style={{ justifyContent: "center", display: "flex", color: "white" }}
        >
          Total Remesa: {formatNumber(remesa)}
        </h2>
      </div>
    </div>
  );
};

export default Formulario;

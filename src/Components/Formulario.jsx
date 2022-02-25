import React, { useState } from "react";

const Formulario = () => {
  const [Mil, setResultado] = useState(0);

  const handleChangeMil = (e) => {
    setResultado(parseFloat(e.target.value) * 1000);
  };

  const remesa = Mil + 10;

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
              for="exampleInputEmail1"
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
              for="exampleInputEmail1"
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
              for="exampleInputEmail1"
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
              for="exampleInputEmail1"
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
              for="exampleInputEmail1"
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
              for="exampleInputEmail1"
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
              for="exampleInputEmail1"
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
              for="exampleInputEmail1"
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
            />
          </div>
        </form>
      </div>
      <div>
        <h2
          className="m-3"
          style={{ justifyContent: "center", display: "flex", color: "white" }}
        >
          TOTAL REMESA: {remesa}
        </h2>
      </div>
    </div>
  );
};

export default Formulario;

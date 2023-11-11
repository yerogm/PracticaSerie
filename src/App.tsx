import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AppPrincipal from "./components/appPrincipal/AppPrincipal";
import CrearSerie from "./components/CrearSerie/CrearSerie";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PerfilSerie from "./components/PerfilSerie/PerfilSerie";

function App() {
    return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<AppPrincipal />} />
                        <Route path="/crearSerie" element={<CrearSerie />} />
                        <Route path="/perfilSerie/:id" element={<PerfilSerie descriptionApp={""} />} />
                    </Routes>
                </BrowserRouter>
        </div>
    );
}

export default App;

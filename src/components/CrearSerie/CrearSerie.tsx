import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebaseConfig/firebase";
import { PracticaHooks } from "../appPrincipal/AppPrincipal";
import "./styles.scss";
interface PerfilProps {
    descriptionApp: string
}


const CrearSerie = () => {
    const [serie, setSerie] = useState<PracticaHooks>({
        image: "",
        imagePerfil: "",
        name: "",
        description: "",
        id: "",
    });
    const practicaHooksCollection = collection(db, "practicaHooks");

    const crearPortada = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        addDoc(practicaHooksCollection, serie);
    };

    return (
        <div className="contenedorPadre">
            <h1>Crear Serie</h1>
            <div className="contenedorInput">
                <input
                    type="text"
                    placeholder="Escribe la URL de la imagen de portada"
                    onChange={(e) => {
                        setSerie({ ...serie, image: e.target.value });
                    }}
                />
            </div>
            <div className="contenedorInput">
                <input
                    type="text"
                    placeholder="Escribe el nombre de titulo"
                    onChange={(e) => {
                        setSerie({ ...serie, name: e.target.value });
                    }}
                />
                <input
                    type="text"
                    placeholder="Escribe la descripcion de la serie"
                    onChange={(e) => {
                        setSerie({ ...serie, description: e.target.value });
                    }}
                />
            </div>
            <div className="contenedorInput">
                <input
                    type="text"
                    placeholder="Escribe la URL de la imagen de perfil"
                    onChange={(e) => {
                        setSerie({ ...serie, imagePerfil: e.target.value });
                    }}
                />
            </div>
            <form onSubmit={crearPortada}>
                <button style={{ cursor: "pointer" }}>Crear Serie</button>
            </form>
        </div>
    );
};

export default CrearSerie;

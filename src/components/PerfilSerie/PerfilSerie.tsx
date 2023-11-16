import React, { useEffect, useState } from "react";
import "./styles.scss";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { PracticaHooks } from "../appPrincipal/AppPrincipal";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

type Params = {
    id: string;
};

interface PerfilProps {
    descriptionApp: string;
}

const PerfilSerie = (props: PerfilProps) => {
    const [serie, setSerie] = useState<PracticaHooks>();

    const params = useParams<Params>();

    const obtenerSeriePorId = async () => {
        const docRef = doc(collection(db, "practicaHooks"), params.id);
        try {
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const serieObtenida = docSnap.data() as PracticaHooks;
                setSerie(serieObtenida);
            }
        } catch {}
    };

    useEffect(() => {
        obtenerSeriePorId();
    }, []);

    return (
        <div>
            <div>
                {serie ? (
                    <div>
                        <div>
                            <img src={serie?.imagePerfil} alt="" />
                            <h1>{serie?.name}</h1>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap:"20px"
                                }}
                            >
                                <div className="contenedorVerAhora">
                                    <FontAwesomeIcon icon={faPlay} />
                                    <button
                                        style={{
                                            background: "none",
                                            border: "none",
                                        }}
                                    >
                                        <span style={{ fontSize: "17px" }}>
                                            Ver Ahora
                                        </span>
                                    </button>
                                </div>
                                <button className="botonTrailer">
                                    Trailer
                                </button>
                            </div>
                            <span>{serie?.description}</span>
                        </div>
                    </div>
                ) : (
                    <h1>No Se Encuentra La Serie</h1>
                )}
            </div>
        </div>
    );
};

export default PerfilSerie;

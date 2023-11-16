import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig/firebase";
import { collection, getDocs } from "firebase/firestore";
import "./styles.scss";
import { Link } from "react-router-dom";
import {
    faHouse,
    faPlus,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PerfilSerie from "../PerfilSerie/PerfilSerie";
import CrearSerie from "../CrearSerie/CrearSerie";

export interface PracticaHooks {
    image: string;
    imagePerfil: string;
    name: string;
    description: string;
    id: string;
}
const AppPrincipal = () => {
    const logo =
        "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esES/Images/disney-FW20-general-plp-iw-tiles-Desktop-400x248px_marvel_tcm190-512217.jpg";
    const practicaHooksCollection = collection(db, "practicaHooks");

    const [serie, setSerie] = useState<PracticaHooks[]>([
        { image: "", imagePerfil: "", name: "", description: "", id: "" },
    ]);

    const obtenerPracticaHooks = () => {
        getDocs(practicaHooksCollection)
            .then((data) => {
                const values = data.docs.map((doc) => ({
                    ...(doc.data() as PracticaHooks),
                    id: doc.id,
                }));
                setSerie(values);
            })
            .catch((error) => {
            });
    };
    useEffect(() => {
        obtenerPracticaHooks();
    }, []);

    return (
        <div>
            <div className="barraPrincipal">
                <img src={logo} alt="" />
                <div className="items">
                    <Link to="/">
                        <span style={{ color: "white" }}>
                            <FontAwesomeIcon icon={faHouse} />
                        </span>
                    </Link>
                    <span style={{ color: "white" }}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <Link to="/crearSerie">
                        <span style={{ color: "white" }}>
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                    </Link>
                </div>
            </div>
   
            <div className="contenedorPrincipal">
                {serie.map((item) => (
                    <div>
                        <Link to={"/perfilSerie/" + item.id}>
                            <img
                                src={item.image}
                                alt=""
                                className="imgSeries"
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppPrincipal;

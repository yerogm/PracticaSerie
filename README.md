en este proyecto estoy haciendo una practica de firebase y sass en el que el app fue de series, practique typescript css/sass en otros proyectos practique PROPS Y RESPONSIVE DESIGN en este fue algo de responsive por que se adapta el perfil y el app principal un ejemplo:

- aca use responsive design en el app principal, en el app me inspire de disney plus:

.contenedorPrincipal {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 3fr));
    gap: 20px;
    align-items: center;
    margin: 5px;

    .imgSeries {
        border-radius: 10px;
        object-fit: cover;
        width: 100%;
        max-width: 320px;
        box-shadow: 0px 6px 15px;
        color: black;
        &:hover {
            border: 3px solid white;
            transition: 0.2s;
            padding: 3px;
            cursor: pointer;
        }
    }
}
@media (max-width: 600px) {
    .contenedorPrincipal {
        width: 100%;
    }
    img {
        width: 100%;
    }
} 

-esta app fue mas una practica de firebase y typescript sin ayuda de IA y otros proyectos
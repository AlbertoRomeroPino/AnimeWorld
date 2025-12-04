import type { Personaje } from "../../../types/personage"

interface PintarPersonajeProps{
    personaje : Personaje
}

function PintarPersonaje({personaje} : PintarPersonajeProps){
    return(
        <figure className="anime-detail-card__character-figure">
        <img
          className="anime-detail-card__character-image"
          src={personaje.Imagen_url}
          alt={`Imagen de ${personaje.nombre}`}
        />
        <figcaption className="anime-detail-card__character-name">
          {personaje.nombre}
        </figcaption>
      </figure>
    )
}

export  default PintarPersonaje
import type { Personaje } from "../../../types/personage";
import "./PintarPersonaje.css"

interface PintarPersonajeProps {
  personaje: Personaje;
}

function PintarPersonaje({ personaje }: PintarPersonajeProps) {
  return (
    <article className="character-card">
      {/* Sección de la imagen */}
      <div className="character-card__image-container">
        <img
          className="character-card__image"
          src={personaje.Imagen_url}
          alt={`Imagen de ${personaje.nombre}`}
        />
      </div>

      {/* Sección de la información */}
      <div className="character-card__content">
        <h3 className="character-card__name">{personaje.nombre}</h3>

        <div className="character-card__details">
          <span className="character-card__badge">
            {personaje.genero + " "}
          </span>
          <span className="character-card__badge">{personaje.edad} años</span>
        </div>

        <p className="character-card__description">{personaje.descripcion}</p>
      </div>
    </article>
  );
}

export default PintarPersonaje;

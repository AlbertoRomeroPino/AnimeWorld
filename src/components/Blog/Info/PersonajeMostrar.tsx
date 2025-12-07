import type { Personaje } from "../../../types/personage";
import PintarPersonaje from "../Reutilizacion/PintarPersonaje";

interface PersonajeMostrarProps {
  personaje: Personaje;
}

function PersonajeMostrar({ personaje }: PersonajeMostrarProps) {
  return (
    <section className="anime-detail-card__characters part-3">
      <h3>{personaje.rol}</h3>
      <PintarPersonaje personaje={personaje}/>
    </section>
  );
}

export default PersonajeMostrar

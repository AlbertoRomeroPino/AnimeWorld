import { useState } from "react";
import "./BarraDeBusqueda.css";

interface BarraDeBusquedaProps {
  setAnimeActual: React.Dispatch<React.SetStateAction<number>>;
  listaNombres: { id: number; titulo: string }[];
}

function BarraDeBusqueda({
  setAnimeActual,
  listaNombres,
}: BarraDeBusquedaProps) {
  // Lo utilizo para saber el estado de la busqueda
  const [nombreBusqueda, setNombreBusqueda] = useState("");

  // Lo utilizo para meter en el buscador y comprobar
  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e significa evento
    // e.target.value texto que se intenta escribir
    setNombreBusqueda(e.target.value);
  };

  const animesFiltrados = listaNombres.filter((anime) => {
    // Prohibo que busque por caracter vacio
    if (nombreBusqueda === "") return false;
    return anime.titulo
      .toLocaleLowerCase()
      .includes(nombreBusqueda.toLocaleLowerCase());
  });

  const manejarSelleccion = (id: number) => {
    id -= 1
    setAnimeActual(id);
    setNombreBusqueda("");
  };

  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="Buscar anime ..."
        className="search-input"
        value={nombreBusqueda}
        // Escucha por teclado
        onChange={manejarCambio}
      />
      {animesFiltrados.length > 0 && (
        <ul className="search-results">
          {animesFiltrados.map((anime) => (
            <li key={anime.id} onClick={() => manejarSelleccion(anime.id)}>
              {anime.titulo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BarraDeBusqueda;

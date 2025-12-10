// BotonMegusta.tsx
import { useState } from "react";
import "./BotonMegusta.css";
import type { Comentario } from "../../../../types/comentario";

interface BotonMegustaProps {
  comentario: Comentario;
}

export default function BotonMegusta({ comentario }: BotonMegustaProps) {
  // Inicializamos el estado con los datos que llegan.
  // Al usar la "key" correcta en el padre, esto se reiniciará solo.
  const [esMeGusta, setEsMeGusta] = useState(false);
  const [likesCount, setLikesCount] = useState(comentario.meGustas);

  function alternarSeguimiento() {
    if (esMeGusta) {
      setEsMeGusta(false);
      setLikesCount(comentario => comentario - 1);
    } else {
      setEsMeGusta(true);
      setLikesCount(comentario => comentario + 1);
    }
  }

  return (
    <button
      className={`boton-like ${esMeGusta ? "activo" : ""}`}
      onClick={alternarSeguimiento}
      title={`${likesCount} personas les gusta este comentario`}
    >
      <span>{esMeGusta ? "❤️" : "♡"}</span>
      <span>{likesCount}</span>
    </button>
  );
}
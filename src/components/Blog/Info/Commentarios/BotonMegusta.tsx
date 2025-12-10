// BotonMegusta.tsx
import { useState } from "react";
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
    >
      {esMeGusta ? "❤️" : "♡"}
      <span style={{ marginLeft: '5px' }}>{likesCount}</span>
    </button>
  );
}
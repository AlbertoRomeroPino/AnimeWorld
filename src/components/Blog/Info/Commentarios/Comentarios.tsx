import { useState } from "react";
import type { Comentario } from "../../../../types/comentario";
import FormularioComentarios from "./FormularioComentarios";
import "./Comentarios.css"

interface ComentariosProps {
  listacomentarios: Comentario[];
}

function Comentarios({ listacomentarios }: ComentariosProps) {
  const [comentarios, setComentarios] = useState(listacomentarios);

  function insertarComentario(usuario: string, texto: string) {
    const nuevoComentario: Comentario = {
      id: Date.now(),
      usuario,
      texto,
      meGustas: 0,
      fecha: new Date().toLocaleDateString(),
    };
    setComentarios([...comentarios, nuevoComentario])
  }
  return (
    <>
      <h3>Comentarios ({comentarios.length})</h3>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario.id}>
            <strong>{comentario.usuario}: </strong>
            {comentario.texto}
          </li>
        ))}
      </ul>

      {/* Pasamos la función al hijo */}
      {<FormularioComentarios insertarComentario={insertarComentario} />}
    </>
  );
}

export default Comentarios;

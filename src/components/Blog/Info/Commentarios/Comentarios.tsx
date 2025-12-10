import { useEffect, useState } from "react";
import type { Comentario } from "../../../../types/comentario";
import FormularioComentarios from "./FormularioComentarios";
import "./Comentarios.css";
import BotonMegusta from "./BotonMegusta";

interface ComentariosProps {
  listacomentarios: Comentario[];
}

function Comentarios({ listacomentarios }: ComentariosProps) {
  // Inicializamos el estado con las props
  const [comentarios, setComentarios] =
    useState<Comentario[]>(listacomentarios);

  // ✅ SOLUCIÓN CRÍTICA: Sincronizar estado cuando cambian las props
  // Si cambias de serie, 'listacomentarios' cambia, y este efecto actualiza el estado local.
  useEffect(() => {
    setComentarios(listacomentarios);
  }, [listacomentarios]);

  function insertarComentario(usuario: string, texto: string) {
    const nuevoComentario: Comentario = {
      id: listacomentarios.length + 1,
      usuario,
      texto,
      meGustas: 0,
      fecha: new Date().toLocaleDateString(),
    };
    setComentarios([...comentarios, nuevoComentario]);
  }

  return (
    <>
      <div className="comments-section">
        <h3>Comentarios ({comentarios.length})</h3>
        <ul>
          {comentarios.map((comentario) => (
            <li key={comentario.id}>
              <div className="comment-header">
                <strong>{comentario.usuario}</strong>
                <small className="comment-meta">{comentario.fecha}</small>
              </div>
              <div className="comment-body">{comentario.texto}</div>
              <div className="comment-actions">
                <BotonMegusta key={comentario.id} comentario={comentario} />
              </div>
            </li>
          ))}
        </ul>

        {/* Pasamos la función al hijo */}
        {
          <FormularioComentarios
            insertarComentario={insertarComentario}
            colorBotón="#2e86de"
            mostrarTitulo={false}
          />
        }
      </div>
    </>
  );
}

export default Comentarios;

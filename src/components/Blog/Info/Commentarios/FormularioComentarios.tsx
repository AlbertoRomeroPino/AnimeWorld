import { useState, type ChangeEvent, type FormEvent } from "react";
import "./FormularioComentario.css";

interface FormularioComentariosProps {
  insertarComentario: (usuario: string, texto: string) => void;
  colorBotón?: string; // NUEVO: personaliza color del botón
  mostrarTitulo?: boolean; // NUEVO: mostrar o ocultar el h4
}

function FormularioComentarios({insertarComentario, colorBotón = "#2e86de", mostrarTitulo = true}: FormularioComentariosProps) {
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (nombre.trim().length > 0 && comentario.trim().length > 0) {
      insertarComentario(nombre.trim(), comentario.trim());
      setNombre("");
      setComentario("");
    }
  }

  function handleTextoChange(e: ChangeEvent<HTMLInputElement>) {
    setNombre(e.currentTarget.value);
  }

  function handleComentarioChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setComentario(e.currentTarget.value);
  }

  return (
    <>
      {mostrarTitulo && <h4>Dejanos tu comentario</h4>}
      <form onSubmit={handleSubmit} className="comment-form" style={{"--boton-color": colorBotón} as React.CSSProperties}>
        <input
          type="text"
          placeholder="Nombre"
          onChange={handleTextoChange}
          required
          value={nombre}
        ></input>
        <textarea
          value={comentario}
          placeholder="Escribe tu comentario"
          onChange={handleComentarioChange}
        />
        <button type="submit">Añadir comentario</button>
      </form>
    </>
  );
}

export default FormularioComentarios;

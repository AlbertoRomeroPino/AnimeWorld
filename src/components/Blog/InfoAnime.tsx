import type { Anime } from "../../types/anime";
import AnimeMetadato from "./Info/AnimeMetadato";
import AnimeDetail from "./Info/HeaderInfo";
import AnimeSinopsis from "./Info/Sinopsis";
import "./InfoAnime.css";
import PersonajeMostrar from "./Info/PersonajeMostrar";
import Comentarios from "./Info/Commentarios/Comentarios";

interface InfoAnimeProps {
  animeMostrado: Anime;
  // listadoAnime: Anime[];
}

function InfoAnime({ animeMostrado /*listadoAnime*/ }: InfoAnimeProps) {
  return (
    <article className="anime-detail-card">
      {/* Header Info - Arriba del todo */}
      <AnimeDetail animeMostrado={animeMostrado} />

      {/* Contenido en 2 columnas: Izquierda (metadata+comentarios) | Derecha (sinopsis+personajes) */}
      <div className="anime-detail-card__content">
        {/* Columna izquierda */}
        <div className="anime-detail-card__left">
          {/* 1. Bloque: Imagen y Metadatos */}
          <AnimeMetadato animeMostrado={animeMostrado} />

          {/* 3. Bloque comentarios*/}
          <Comentarios listacomentarios={animeMostrado.comentarios}/>
        </div>

        {/* Columna derecha */}
        <div className="anime-detail-card__right">
          {/* 2. Bloque: Sinopsis */}
          <AnimeSinopsis sinopsis={animeMostrado.sinopsis} />

          {/* 4. Bloque: Personajes */}
          <PersonajeMostrar personaje={animeMostrado.personajes[0]} />
        </div>
      </div>
    </article>
  );
}

export default InfoAnime;

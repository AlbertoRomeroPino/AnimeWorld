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
      <AnimeDetail animeMostrado={animeMostrado} />

      {/* Contenido principal, dividido en secciones */}
      <div className="anime-detail-card__content three-part-layout">
        {/* 1. Bloque: Imagen y Metadatos */}
        <AnimeMetadato animeMostrado={animeMostrado} />

        {/* 2. Bloque: Sinopsis */}
        <AnimeSinopsis sinopsis={animeMostrado.sinopsis} />

        {/* 3. Bloque comentarios*/}
        <Comentarios listacomentarios={animeMostrado.comentarios}/>

        {/* 4. Bloque: Personajes */}
        <PersonajeMostrar personaje={animeMostrado.personajes[0]} />
      </div>
    </article>
  );
}

export default InfoAnime;

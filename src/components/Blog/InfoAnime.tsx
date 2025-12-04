import type { Anime } from "../../types/anime";
import AnimeMetadato from "./Info/AnimeMetadato";
import AnimeDetail from "./Info/HeaderInfo";
import AnimeSinopsis from "./Info/Sinopsis";
import "./InfoAnime.css";
import PersonajeMostrar from "./Info/PersonajeMostrar";

interface InfoAnimeProps {
  animeMostrado: Anime;
  // listadoAnime: Anime[];
}

function InfoAnime({ animeMostrado /*listadoAnime*/ }: InfoAnimeProps) {
  return (
    // Utilizamos <article> para un contenido independiente y autocontenido
    <article className="anime-detail-card">
      <AnimeDetail animeMostrado={animeMostrado} />

      {/* Contenido principal, dividido en secciones */}
      <div className="anime-detail-card__content three-part-layout">
        {/* 1. Bloque: Imagen y Metadatos */}
        <AnimeMetadato animeMostrado={animeMostrado} />

        {/* 2. Bloque: Sinopsis */}
        <AnimeSinopsis sinopsis={animeMostrado.sinopsis} />

        {/* 3. Bloque: Personajes */}
        <PersonajeMostrar personaje={animeMostrado.personajes[0]} />
      </div>
    </article>
  );
}

export default InfoAnime;

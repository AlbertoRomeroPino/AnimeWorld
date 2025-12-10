import type { Anime } from "../../../types/anime";
import "./HeaderInfo.css";

interface AnimeDetailProps {
  animeMostrado: Anime;
}

function AnimeDetail({ animeMostrado }: AnimeDetailProps) {
  return (
    <header className="anime-detail-card__header">
      {/* Título principal del anime */}
      <h1 className="anime-detail-card__title">{animeMostrado.titulo}</h1>
      {/* Título original, si existe */}
      {animeMostrado.titulo_original && (
        <h2 className="anime-detail-card__subtitle">
          Título original: {animeMostrado.titulo_original}
        </h2>
      )}
    </header>
  );
}

export default AnimeDetail;
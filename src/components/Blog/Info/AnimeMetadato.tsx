import type { Anime } from "../../../types/anime"

interface AnimeMetadatoProps{
    animeMostrado: Anime
}

function AnimeMetadato({animeMostrado} : AnimeMetadatoProps){
    return(
        <section className="anime-detail-card__media-info part-1">
          <figure className="anime-detail-card__poster">
            <img
              className="anime-detail-card__image"
              alt={`Póster de ${animeMostrado.titulo}`}
              src={animeMostrado.imagen_url}
            />
            <figcaption className="sr-only">
              Póster principal del anime: {animeMostrado.titulo}
            </figcaption>
          </figure>

          {/* Lista de metadatos (<ul>) */}
          <ul className="anime-detail-card__metadata">
            <li className="anime-detail-card__meta-item">
              <span className="anime-detail-card__meta-label">Episodios:</span>
              <span className="anime-detail-card__meta-value">
                {animeMostrado.episodios}
              </span>
            </li>
            <li className="anime-detail-card__meta-item">
              <span className="anime-detail-card__meta-label">Género:</span>
              <span className="anime-detail-card__meta-value">
                {animeMostrado.genero}
              </span>
            </li>
            <li className="anime-detail-card__meta-item">
              <span className="anime-detail-card__meta-label">Estado:</span>
              <span className="anime-detail-card__meta-value">
                {animeMostrado.estado}
              </span>
            </li>
            <li className="anime-detail-card__meta-item">
              <span className="anime-detail-card__meta-label">Estreno:</span>
              <time
                className="anime-detail-card__meta-value"
                dateTime={animeMostrado.fecha_estreno}
              >
                {animeMostrado.fecha_estreno}
              </time>
            </li>
          </ul>
        </section>
    )
}

export default AnimeMetadato
import type { Anime } from "../../../types/anime"
import TagGenero from "./TagGenero"

interface ListaMetadatosProps{
    animeMostrado : Anime
}

function ListaMetadatos({animeMostrado} : ListaMetadatosProps){
    return(
        <ul className="anime-detail-card__metadata">
            <li className="anime-detail-card__meta-item">
              <span className="anime-detail-card__meta-label">Episodios:</span>
              <span className="anime-detail-card__meta-value">
                {animeMostrado.episodios}
              </span>
            </li>
            <TagGenero generos={animeMostrado.genero}/>
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
    )
}

export default ListaMetadatos
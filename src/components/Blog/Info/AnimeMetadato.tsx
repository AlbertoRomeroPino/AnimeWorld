import type { Anime } from "../../../types/anime"
import AnimePoster from "../Reutilizacion/AnimePoster"
import ListaMetadatos from "./ListaMetadatos"
import "./AnimeMetadato.css"

interface AnimeMetadatoProps{
    animeMostrado: Anime
}

function AnimeMetadato({animeMostrado} : AnimeMetadatoProps){
    return(
        <section className="anime-detail-card__media-info part-1">
          <AnimePoster 
            titulo={animeMostrado.titulo} 
            imagen_url={animeMostrado.imagen_url}
            tamaño="grande"
            redondeado={true}
          />

          {/* Lista de metadatos (<ul>) */}
          <ListaMetadatos animeMostrado={animeMostrado}/>
        </section>
    )
}

export default AnimeMetadato
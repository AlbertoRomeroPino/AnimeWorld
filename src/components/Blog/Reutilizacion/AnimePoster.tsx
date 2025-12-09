interface AnimePosterProps{
    titulo: string
    imagen_url: string
}

function AnimePoster({titulo, imagen_url} : AnimePosterProps){
    return(
        <figure className="anime-detail-card__poster">
            <img
              className="anime-detail-card__image"
              alt={`Póster de ${titulo}`}
              src={imagen_url}
            />
            <figcaption className="sr-only">
              Póster principal del anime: {titulo}
            </figcaption>
          </figure>
    )
}

export default AnimePoster
import "./AnimePoster.css";

type TamañoPoster = "pequeño" | "mediano" | "grande";

interface AnimePosterProps{
    titulo: string
    imagen_url: string
    tamaño?: TamañoPoster // NUEVO: personaliza tamaño visual
    redondeado?: boolean // NUEVO: personaliza bordes
}

function AnimePoster({titulo, imagen_url, tamaño = "mediano", redondeado = true} : AnimePosterProps){
    const posterClass = `anime-detail-card__poster anime-detail-card__poster--${tamaño} ${redondeado ? "rounded" : "sharp"}`;
    
    return(
        <figure className={posterClass}>
            <img
              className="anime-detail-card__image"
              alt={`Póster de ${titulo}`}
              src={imagen_url}
            />
            <figcaption className="anime-poster__title">
              {titulo}
            </figcaption>
          </figure>
    )
}

export default AnimePoster
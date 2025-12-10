import "./Sinopsis.css";

interface AnimeSinopsisProps{
    sinopsis: string
}

function AnimeSinopsis({sinopsis}: AnimeSinopsisProps){
    return (<section className="anime-detail-card__synopsis part-2">
          <h3>Sinopsis</h3>
          <p className="anime-detail-card__text">{sinopsis}</p>
        </section>)
}

export default AnimeSinopsis
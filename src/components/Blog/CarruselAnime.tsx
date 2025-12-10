import "./CarruselAnime.css";
import AnimePoster from "./Reutilizacion/AnimePoster";

interface CarruselAnimeProps {
  listaCarrusel: {
    imagen_url: string;
    titulo: string;
  }[];
}

function CarruselAnime({ listaCarrusel }: CarruselAnimeProps) {
  return (
  <section className="carousel-container">
      <h2 className="carousel-title">Tendencias</h2>
      
      {/* Riel con scroll horizontal */}
      <div className="carousel-track">
        {listaCarrusel.map((anime, index) => (
           
           <AnimePoster 
                key={index}
                titulo={anime.titulo} 
                imagen_url={anime.imagen_url}
                tamaño="pequeño"
                redondeado={true}
             />
        ))}
      </div>
    </section>

  )
}

export default CarruselAnime;

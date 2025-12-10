import "./App.css";
import { animes } from "./data/animes";
import Header from "./components/layout/Header";
import InfoAnime from "./components/Blog/InfoAnime";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/Blog/Sidebar";
import { useState } from "react";
import CarruselAnime from "./components/Blog/CarruselAnime";

function App() {
  const listaNombres = animes.map((anime) => ({
    id: anime.id,
    titulo: anime.titulo,
  }));

  const listaCarrusel = animes.map((anime) => ({
    imagen_url: anime.imagen_url,
    titulo: anime.titulo,
  }));

  // Le decimos que es un 'number' y lo inicializamos en (0)
  const [AnimeActual, setAnimeActual] = useState<number>(0);
  // Tu variable para obtener el objeto actual
  const anime = animes[AnimeActual];

  return (
    <div className="app-container">
      {/* Header - No se toca */}
      <Header setAnimeActual={setAnimeActual} listaNombres={listaNombres} />

      <main className="main-content">
        {animes == undefined ? (
          <p>La serie no existe</p>
        ) : (
          <>
            {/* InfoAnime con layout de 2 columnas (izq: metadata+comentarios, der: sinopsis+personajes) */}
            <div className="main-content__left">
              <InfoAnime animeMostrado={anime} />
            </div>
            {/* Sidebar en el lado derecho */}
            <aside className="main-content__sidebar">
              <Sidebar ListPersonajes={anime.personajes} />
            </aside>
          </>
        )}
      </main>

      {/* Carrusel - Full width */}
      <section className="carousel-section">
        <CarruselAnime listaCarrusel={listaCarrusel}/>
      </section>

      {/* Footer - No se toca */}
      <Footer />
    </div>
  );
}

export default App;

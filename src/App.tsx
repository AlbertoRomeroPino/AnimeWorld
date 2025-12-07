import "./App.css";
import { animes} from "./data/animes";
import Header from "./components/layout/Header";
import InfoAnime from "./components/Blog/InfoAnime";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/Blog/Sidebar";
import { useState } from "react";

function App() {

  const listaNombres = animes.map(anime => ({
  id: anime.id,
  titulo: anime.titulo
}));

// Le decimos que es un 'number' y lo inicializamos en (0)
const [AnimeActual, setAnimeActual] = useState<number>(0);

// Tu variable para obtener el objeto actual
const anime = animes[AnimeActual];

  return (
    <div className="app-container">
      <Header setAnimeActual={setAnimeActual} listaNombres={listaNombres}/>
      <main className="main-content">
        {animes == undefined ? (
          <p>La serie no existe</p>
        ) : (
          <>
            <InfoAnime animeMostrado={anime} />
            <Sidebar ListPersonajes={anime.personajes} />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;

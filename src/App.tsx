import "./App.css";
import { animes } from "./data/animes";
import Header from "./components/layout/Header";
import type { Anime } from "./types/anime";
import InfoAnime from "./components/Blog/InfoAnime";
import Footer from "./components/layout/Footer";

function App() {
  const anime: Anime = animes[0];

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {animes == undefined ? <p>La serie no existe</p> : 
        <>
        <InfoAnime animeMostrado={anime} />

        </>}
      </main>

      <Footer />
    </div>
  );
}

export default App;

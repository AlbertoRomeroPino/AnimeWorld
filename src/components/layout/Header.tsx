import BarraDeBusqueda from "./BarraDeBusqueda";
import "./Header.css"

interface HeaderProps{
  setAnimeActual: React.Dispatch<React.SetStateAction<number>>
  listaNombres: { id: number; titulo: string }[];
}

function Header({setAnimeActual, listaNombres} : HeaderProps) {

  return (
    <header className="header">
      <h1 className="header__title">Anime World</h1>
      <nav className="header__nav">
        <ul>
          <BarraDeBusqueda setAnimeActual={setAnimeActual} listaNombres={listaNombres}/>
        </ul>
      </nav>
    </header>
  );
}

export default Header

import "./Header.css"

export default function Header() {
  const secciones: string[] = ["Inicio", "Series", "Peliculas", "Manga"];

  return (
    <header className="header">
      <h1 className="header__title">Anime World</h1>
      <nav className="header__nav">
        <ul>
          {secciones.map((seccion) => (
            <li key={seccion}>{seccion}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

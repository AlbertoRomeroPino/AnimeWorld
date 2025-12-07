// Footer.jsx
import "./Footer.css"

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Usa la clase principal del footer
    <footer className="simple-footer"> 
      {/* Usa la clase para centrar y manejar el contenido */}
      <div className="simple-footer__content"> 
        {/* Clase para el nombre de la marca/sitio */}
        <p className="simple-footer__brand">Anime World</p> 
        {/* Clase para el texto de copyright */}
        <p className="simple-footer__copy"> 
          &copy; {currentYear} Anime World.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
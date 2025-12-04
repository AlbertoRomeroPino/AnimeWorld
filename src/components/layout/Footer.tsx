import "./Footer.css"

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="simple-footer">
      <div className="simple-footer__content">
        <p className="simple-footer__brand">Anime World</p>
        <p className="simple-footer__copy">
          &copy; {currentYear} Anime World.
        </p>
      </div>
    </footer>
  );
}

export default Footer
import logoUrl from "../../assets/sprite.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="header-logo" href="#hero" aria-label="Go to hero">
          <svg width="104" height="26" aria-hidden="true">
            <use href={`${logoUrl}#icon-logo`} />
          </svg>
        </a>

        <nav className="header-nav">
          <a className="header-link" href="#users">
            Users
          </a>
          <a className="header-link" href="#signup">
            Sign up
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import logoUrl from "../../assets/sprite.svg";
import Button from "../Button/Button";

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
          <Button href="#users">Users</Button>
          <Button href="#signup">Sign up</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

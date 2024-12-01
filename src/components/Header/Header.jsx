import { NavLink } from "react-router-dom";
import clsx from "clsx";
import sprite from "../../img/icons.svg";
import s from "./Header.module.css";

const Header = () => {
  const buildLinkClassName = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <header className={clsx(s.wrapper, "container")}>
      <svg height="16" width="130">
        <use href={`${sprite}#icon-logo`} />
      </svg>
      <nav className={s.nav}>
        <NavLink to="/" className={buildLinkClassName}>
          {" "}
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClassName}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

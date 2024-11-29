import clsx from "clsx";
import s from "./Header.module.css";
import sprite from "../../img/icons.svg";
import { NavLink } from "react-router-dom";

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

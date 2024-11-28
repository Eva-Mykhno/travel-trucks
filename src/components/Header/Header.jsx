import clsx from "clsx";
import s from "./Header.module.css";
import sprite from "../../img/icons.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={clsx(s.wrapper, "container")}>
      <svg height="16" width="130">
        <use href={`${sprite}#icon-logo`} />
      </svg>
      <div className={s.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.active : s.button)}>
          {" "}
          Home
        </NavLink>
        <NavLink
          to="/campers"
          className={({ isActive }) => (isActive ? s.active : s.button)}>
          Catalog
        </NavLink>
      </div>
    </div>
  );
};

export default Header;

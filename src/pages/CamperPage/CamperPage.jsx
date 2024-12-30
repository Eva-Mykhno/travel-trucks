import { NavLink, Outlet, useParams } from "react-router-dom";
import clsx from "clsx";
import RentForm from "../../components/RentForm/RentForm";
import CamperCard from "../../components/CamperCard/CamperCard";
import s from "./CamperPage.module.css";

const CamperPage = () => {
  const { id } = useParams();

  return (
    <main className={clsx(s.wrapper, "container")}>
      <CamperCard id={id} />

      <div className={s.links}>
        <NavLink
          to="features"
          className={({ isActive }) =>
            isActive ? `${s.link} ${s.active}` : s.navLink
          }>
          <p className={s.text}>Features</p>
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive ? `${s.link} ${s.active}` : s.navLink
          }>
          <p className={s.text}>Reviews</p>
        </NavLink>
      </div>

      <div className={s.divider}></div>

      <div className={s.wrap}>
        <div className={s.content}>
          <Outlet />
        </div>
        <div className={s.wrapForm}>
          <RentForm />
        </div>
      </div>
    </main>
  );
};

export default CamperPage;

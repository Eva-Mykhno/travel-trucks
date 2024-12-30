import { NavLink } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <main className={s.wrapper}>
      <p className={s.text}>
        Sorry... The page is not found. You can go to the camper catalog.
      </p>
      <div className={s.back}>
        <NavLink to="/catalog">
          <p className={s.backText}>Catalog</p>
        </NavLink>
      </div>
    </main>
  );
};
export default NotFoundPage;

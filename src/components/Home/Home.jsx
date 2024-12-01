import { Link } from "react-router-dom";
import clsx from "clsx";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.background}>
      <div className={clsx(s.wrapper, "container")}>
        <h1 className={s.title}>Campers of your dreams</h1>
        <p className={s.text}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog">
          <button type="button">View Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

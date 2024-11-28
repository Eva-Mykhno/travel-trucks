import Header from "../../components/Header/Header";
import Home from "../../components/Home/Home";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <Home />
    </div>
  );
};

export default HomePage;

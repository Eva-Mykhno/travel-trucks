import clsx from "clsx";
import CamperList from "../../components/CamperList/CamperList";
import SearchBox from "../../components/SearchBox/SearchBox";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <main className={clsx(s.wrapper, "container")}>
      <SearchBox />
      <CamperList />
    </main>
  );
};
export default CatalogPage;

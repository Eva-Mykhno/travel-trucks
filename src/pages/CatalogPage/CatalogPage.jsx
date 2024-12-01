import clsx from "clsx";
import CamperList from "../../components/CamperList/CamperList";
import SearchBox from "../../components/SearchBox/SearchBox";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={clsx(s.wrapper, "container")}>
      <SearchBox />
      <CamperList />
    </div>
  );
};
export default CatalogPage;

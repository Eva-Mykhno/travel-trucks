import CamperList from "../../components/CamperList/CamperList";
import SearchBox from "../../components/SearchBox/SearchBox";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={s.wrapper}>
      <SearchBox />
      <CamperList />
    </div>
  );
};
export default CatalogPage;

import CamperList from "../../components/CamperList/CamperList";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={s.wrapper}>
      <CamperList />
    </div>
  );
};
export default CatalogPage;

import { Outlet } from "react-router-dom";
import CamperList from "../../components/CamperList/CamperList";
import s from "./CamperPage.module.css";

const CamperPage = () => {
  return (
    <div className={s.wrapper}>
      <CamperList />
      <Outlet />
    </div>
  );
};

export default CamperPage;

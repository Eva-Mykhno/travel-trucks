import { Outlet } from "react-router-dom";

import s from "./CamperPage.module.css";

const CamperPage = () => {
  return (
    <div className={s.wrapper}>
      <Outlet />
    </div>
  );
};

export default CamperPage;

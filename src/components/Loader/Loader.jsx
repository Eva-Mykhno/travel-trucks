import { RingLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <RingLoader color="#d84343" size={100} speedMultiplier={1} />
    </div>
  );
};
export default Loader;

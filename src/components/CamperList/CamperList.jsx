import { useDispatch, useSelector } from "react-redux";
import s from "./CamperList.module.css";
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from "../../redux/selectors";
import { getCampers } from "../../redux/operations";
import Loader from "../Loader/Loader";
import sprite from "../../img/icons.svg";
import { useEffect } from "react";

const CamperList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  console.log("Campers data: ", campers);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      {isLoading && <Loader />}
      {isError && <h3 className={s.errorMessage}>Something went wrong... </h3>}
      <ul className={s.list}>
        {campers.map((camper) => (
          <li key={camper.id} className={s.item}>
            <img src={camper.gallery[0]?.thumb} alt={camper.name} />
            <div className={s.info}>
              <h2 className={s.title}>{camper.name}</h2>
              <h2 className={s.title}>€{camper.price}.00</h2>

              <div className={s.rating}>
                <svg className={s.star} height="16" width="16">
                  <use href={`${sprite}#icon-star`} />
                </svg>
                <span className={s.span}>
                  {camper.rating} ({camper.reviews.length || 0})Reviews
                </span>
                <svg className={s.map} height="16" width="16">
                  <use href={`${sprite}#icon-map`} />
                </svg>
                <span className={s.span}>{camper.location}</span>
              </div>
              <p className={s.text}>{camper.description}</p>

              <div className={s.features}>
                <div className={s.feature}>
                  {" "}
                  <svg className={s.featureIcon} height="20" width="20">
                    <use href={`${sprite}#icon-automatic`} />
                  </svg>
                  <span className={s.featureText}>{camper.transmission}</span>
                </div>

                <div className={s.feature}>
                  {" "}
                  <svg className={s.featureIcon} height="20" width="20">
                    <use href={`${sprite}#icon-petrol`} />
                  </svg>
                  <span className={s.featureText}>{camper.engine}</span>
                </div>

                {camper.kitchen && (
                  <div className={s.feature}>
                    <svg className={s.featureIcon} height="20" width="20">
                      <use href={`${sprite}#icon-kitchen`} />
                    </svg>
                    <span className={s.featureText}>Kitchen</span>
                  </div>
                )}

                {camper.AC && (
                  <div className={s.feature}>
                    <svg className={s.featureIcon} height="20" width="20">
                      <use href={`${sprite}#icon-ac`} />
                    </svg>
                    <span className={s.featureText}>AC</span>
                  </div>
                )}
              </div>

              <Link to={`/catalog/${camper.id}`}>
                <button type="button">Show more</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperList;

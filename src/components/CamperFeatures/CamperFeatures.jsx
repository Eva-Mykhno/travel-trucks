import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCamperById } from "../../redux/operations";
import {
  selectCamperById,
  selectError,
  selectIsLoading,
} from "../../redux/selectors";
import Loader from "../Loader/Loader";
import sprite from "../../img/icons.svg";
import s from "./CamperFeatures.module.css";

const CamperFeatures = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector((state) => selectCamperById(state, id));
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    if (!camper) {
      dispatch(getCamperById(id));
    }
  }, [dispatch, id, camper]);

  const features = [
    "AC",
    "bathroom",
    "kitchen",
    "TV",
    "radio",
    "refrigerator",
    "microwave",
    "gas",
    "water",
  ];

  return (
    <div className={s.wrapper}>
      {isLoading && <Loader />}
      {isError && <h3 className={s.errorMessage}>Something went wrong...</h3>}
      <ul className={s.list}>
        <li key="transmission" className={s.feature}>
          <svg className={s.icon} height="20" width="20">
            <use href={`${sprite}#icon-automatic`} />
          </svg>
          <span className={s.featureText}>{camper.transmission}</span>
        </li>
        <li key="engine" className={s.feature}>
          <svg className={s.icon} height="20" width="20">
            <use href={`${sprite}#icon-petrol`} />
          </svg>
          <span className={s.featureText}>{camper.engine}</span>
        </li>
        {features.map(
          (feature) =>
            camper[feature] && (
              <li key={feature} className={s.feature}>
                <svg className={s.icon} height="20" width="20">
                  <use href={`${sprite}#icon-${feature.toLowerCase()}`} />
                </svg>
                <span className={s.featureText}>{feature}</span>
              </li>
            )
        )}
      </ul>
      <div className={s.wrap}>
        <h3 className={s.subtitle}>Vehicle details</h3>

        <div className={s.divider}></div>

        <div className={s.wrapInfo}>
          <div className={s.wrapText}>
            <span className={s.text}>Form</span>
            <span className={s.text}>{camper.form}</span>
          </div>
          <div className={s.wrapText}>
            <span className={s.text}>Length</span>
            <span className={s.text}>{camper.length}</span>
          </div>

          <div className={s.wrapText}>
            <span className={s.text}>Width</span>
            <span className={s.text}>{camper.width}</span>
          </div>
          <div className={s.wrapText}>
            <span className={s.text}>Height</span>
            <span className={s.text}>{camper.height}</span>
          </div>
          <div className={s.wrapText}>
            <span className={s.text}>Tank</span>
            <span className={s.text}>{camper.tank}</span>
          </div>
          <div className={s.wrapText}>
            <span className={s.text}>Consumption</span>
            <span className={s.text}>{camper.consumption}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamperFeatures;

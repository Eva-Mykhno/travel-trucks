import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCamperById } from "../../redux/operations";
import {
  selectCamperById,
  selectError,
  selectIsLoading,
} from "../../redux/selectors";
import Loader from "../Loader/Loader";
import sprite from "../../img/icons.svg";
import s from "./CamperCard.module.css";

const CamperCard = ({ id }) => {
  const dispatch = useDispatch();
  const camper = useSelector((state) => selectCamperById(state, id));
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    if (!camper) {
      dispatch(getCamperById(id));
    }
  }, [dispatch, id, camper]);

  return (
    <div className={s.wrapper}>
      {isLoading && <Loader />}
      {isError && <h3 className={s.errorMessage}>Something went wrong...</h3>}

      <div className={s.info}>
        <h2 className={s.title}>{camper.name}</h2>
        <div className={s.rating}>
          <div className={s.wrapRating}>
            <svg className={s.star} height="16" width="16">
              <use href={`${sprite}#icon-star`} />
            </svg>
            <span className={s.spanRating}>
              {camper.rating} ({camper.reviews.length || 0} Reviews)
            </span>
          </div>
          <div className={s.wrapRating}>
            <svg className={s.map} height="16" width="16">
              <use href={`${sprite}#icon-map`} />
            </svg>
            <span className={s.spanLocation}>{camper.location}</span>
          </div>
        </div>
        <h2 className={s.title}>€{camper.price}.00</h2>
      </div>

      <div className={s.gallery}>
        {camper.gallery.map((image, index) => (
          <img
            key={index}
            src={image.original}
            alt={`Camper image ${index + 1}`}
            className={s.img}
          />
        ))}
      </div>
      <p className={s.text}>{camper.description}</p>
    </div>
  );
};

export default CamperCard;

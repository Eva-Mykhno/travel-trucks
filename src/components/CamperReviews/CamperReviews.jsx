import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectCamperById,
  selectError,
  selectIsLoading,
} from "../../redux/selectors";
import { getCamperById } from "../../redux/operations";
import Loader from "../Loader/Loader";
import s from "./CamperReviews.module.css";
import sprite from "../../img/icons.svg";

const CamperReviews = () => {
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

  const starCount = 5;

  const getReviewerName = (reviewer_name) => {
    const firstLetter = reviewer_name.charAt(0).toUpperCase();
    return { firstLetter };
  };

  const getStars = (reviewer_rating) => {
    return Array.from({ length: starCount }, (_, index) => (
      <svg key={index} className={s.star} height="16" width="16">
        <use
          href={`${sprite}#icon-star`}
          className={index < reviewer_rating ? s.filled : s.empty}
        />
      </svg>
    ));
  };

  return (
    <div className={s.wrapper}>
      {isLoading && <Loader />}
      {isError && <h3 className={s.errorMessage}>Something went wrong...</h3>}
      <ul className={s.list}>
        {camper.reviews.map(({ reviewer_name, reviewer_rating, comment }) => {
          const { firstLetter } = getReviewerName(reviewer_name);
          const stars = getStars(reviewer_rating);

          return (
            <li key={reviewer_name} className={s.review}>
              <div className={s.reviewer}>
                <span className={s.firstLetter}>{firstLetter}</span>
                <div>
                  <span className={s.name}>{reviewer_name}</span>
                  <div>{stars}</div>
                </div>
              </div>
              <p className={s.text}>{comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CamperReviews;

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  selectCampers,
  selectFavorites,
  selectFilteredCampers,
  selectError,
  selectIsLoading,
} from "../../redux/selectors";
import { getCampers } from "../../redux/operations";
import { toggleFavorite } from "../../redux/slice";
import Loader from "../Loader/Loader";
import sprite from "../../img/icons.svg";
import s from "./CamperList.module.css";

const CamperList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const filteredCampers = useSelector(selectFilteredCampers);
  const favorite = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  const [visible, setVisible] = useState(4);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  useEffect(() => {
    setIsFiltered(filteredCampers.length > 0);
  }, [filteredCampers]);

  const handleFavorite = (camperId) => {
    dispatch(toggleFavorite(camperId));
  };

  const handleLoadMore = () => {
    setVisible((prev) => prev + 4);
  };

  const shownCampers = isFiltered ? filteredCampers : campers;

  return (
    <div className={s.wrapper}>
      {isLoading && <Loader />}
      {isError && (
        <h3 className={s.errorMessage}>
          Something went wrong... It looks like no campers were found for your
          request. Change filter options or view the full list of available
          campers.
        </h3>
      )}

      {shownCampers.length > 0 && (
        <>
          <ul className={s.list}>
            {shownCampers.slice(0, visible).map((camper) => {
              const isFavorite = favorite.includes(camper.id);
              return (
                <li key={camper.id} className={s.item}>
                  <img
                    src={camper.gallery[0]?.thumb}
                    alt={camper.name}
                    className={s.img}
                  />
                  <div className={s.info}>
                    <div className={s.mainInfo}>
                      <div className={s.titles}>
                        <h2 className={s.title}>{camper.name}</h2>
                        <div className={s.wrapPrice}>
                          <h2 className={s.title}>€{camper.price}.00</h2>
                          <svg
                            className={`${s.heart} ${
                              isFavorite ? s.favorite : ""
                            }`}
                            height="24"
                            width="24"
                            onClick={() => handleFavorite(camper.id)}>
                            <use href={`${sprite}#icon-heart`} />
                          </svg>
                        </div>
                      </div>
                      <div className={s.rating}>
                        <div className={s.wrapRating}>
                          <svg className={s.star} height="16" width="16">
                            <use href={`${sprite}#icon-star`} />
                          </svg>
                          <span className={s.spanRating}>
                            {camper.rating} ({camper.reviews.length || 0}{" "}
                            Reviews)
                          </span>
                        </div>
                        <div className={s.wrapRating}>
                          <svg className={s.map} height="16" width="16">
                            <use href={`${sprite}#icon-map`} />
                          </svg>
                          <span className={s.spanLocation}>
                            {camper.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className={s.text}>{camper.description}</p>

                    <div className={s.features}>
                      <div className={s.feature}>
                        <svg className={s.featureIcon} height="20" width="20">
                          <use href={`${sprite}#icon-automatic`} />
                        </svg>
                        <span className={s.featureText}>
                          {camper.transmission}
                        </span>
                      </div>

                      <div className={s.feature}>
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
                      <button type="button" className={s.buttonShow}>
                        Show more
                      </button>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
          {visible < shownCampers.length && (
            <button
              type="button"
              onClick={handleLoadMore}
              className={s.buttonLoad}>
              Load More
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default CamperList;

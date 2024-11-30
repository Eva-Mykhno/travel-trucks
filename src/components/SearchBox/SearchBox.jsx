import s from "./SearchBox.module.css";
import { Formik, Form, Field } from "formik";
import { getFilteredCampers } from "../../redux/operations";
import { resetFilteredCampers } from "../../redux/slice";
import sprite from "../../img/icons.svg";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();

  const initialFormValues = {
    location: "",
    form: "",
    AC: false,
    transmission: false,
    bathroom: false,
    kitchen: false,
    TV: false,
    radio: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: false,
  };

  const normalizeLocation = (location) => {
    if (!location) return location;

    const normalizedLocation = location.toLowerCase().trim();
    return normalizedLocation;
  };

  const buildQueryParams = (values) => {
    let queryParams = "";

    if (values.location) {
      const normalizedLocation = normalizeLocation(values.location);
      queryParams += `location=${normalizedLocation}&`;
    }

    if (values.form) {
      queryParams += `form=${values.form}&`;
    }

    const features = [
      "AC",
      "transmission",
      "bathroom",
      "kitchen",
      "TV",
      "radio",
      "refrigerator",
      "microwave",
      "gas",
      "water",
    ];
    features.forEach((feature) => {
      if (values[feature]) {
        if (feature === "transmission") {
          queryParams += `transmission=automatic&`;
        } else {
          queryParams += `${feature}=true&`;
        }
      }
    });

    return queryParams.slice(0, -1);
  };

  const handleSubmit = (values) => {
    dispatch(resetFilteredCampers());
    const queryParams = buildQueryParams(values);
    dispatch(getFilteredCampers(queryParams));
  };

  return (
    <Formik initialValues={initialFormValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <label>
          <Field
            type="text"
            name="location"
            placeholder="City"
            className={s.input}
          />
          Location
        </label>

        <p className={s.filters}>Filters</p>

        <div className={s.divider}></div>

        <h3 className={s.title}>Vehicle equipment</h3>

        <div className={s.features}>
          <label>
            <Field type="checkbox" name="AC" />
            <div className={s.feature}>
              <svg className={s.featureIcon} height="32" width="32">
                <use href={`${sprite}#icon-ac`} />
              </svg>
              <span className={s.featureText}>AC</span>
            </div>
          </label>

          <label>
            <Field type="checkbox" name="transmission" />
            <div className={s.feature}>
              <svg className={s.featureIcon} height="32" width="32">
                <use href={`${sprite}#icon-automatic`} />
              </svg>
              <span className={s.featureText}>Automatic</span>
            </div>
          </label>

          <label>
            <Field type="checkbox" name="kitchen" />
            <div className={s.feature}>
              <svg className={s.featureIcon} height="32" width="32">
                <use href={`${sprite}#icon-kitchen`} />
              </svg>
              <span className={s.featureText}>Kitchen</span>
            </div>
          </label>

          <label>
            <Field type="checkbox" name="TV" />
            <div className={s.feature}>
              <svg className={s.featureIcon} height="32" width="32">
                <use href={`${sprite}#icon-tv`} />
              </svg>
              <span className={s.featureText}>TV</span>
            </div>
          </label>

          <label>
            <Field type="checkbox" name="bathroom" />
            <div className={s.feature}>
              <svg className={s.featureIcon} height="32" width="32">
                <use href={`${sprite}#icon-bathroom`} />
              </svg>
              <span className={s.featureText}>Bathroom</span>
            </div>
          </label>

          <label>
            <Field type="checkbox" name="radio" />
            <div className={s.feature}>
              <svg className={s.featureIcon} height="32" width="32">
                <use href={`${sprite}#icon-radio`} />
              </svg>
              <span className={s.featureText}>Radio</span>
            </div>
          </label>

          <label>
            <Field type="checkbox" name="refrigerator" />
            <div className={s.feature}>
              <svg className={s.featureIcon} height="32" width="32">
                <use href={`${sprite}#icon-refrigerator`} />
              </svg>
              <span className={s.featureText}>Refrigerator</span>
            </div>
          </label>

          <label>
            <Field type="checkbox" name="microwave" />
            <div className={s.feature}>
              <svg className={s.featureIcon} height="32" width="32">
                <use href={`${sprite}#icon-microwave`} />
              </svg>
              <span className={s.featureText}>microwave</span>
            </div>
          </label>

          <label>
            <Field type="checkbox" name="gas" />
            <div className={s.feature}>
              <svg className={s.featureIcon} height="32" width="32">
                <use href={`${sprite}#icon-gas-stove`} />
              </svg>
              <span className={s.featureText}>Gas</span>
            </div>
          </label>

          <label>
            <Field type="checkbox" name="water" />
            <div className={s.feature}>
              <svg className={s.featureIcon} height="32" width="32">
                <use href={`${sprite}#icon-water`} />
              </svg>
              <span className={s.featureText}>Water</span>
            </div>
          </label>
        </div>

        <h3 className={s.title}>Vehicle type</h3>

        <div className={s.divider}></div>

        <div className={s.type}>
          <label>
            <Field
              type="radio"
              name="form"
              value="panelTruck"
              id="panelTruck"
            />
            <div className={s.feature}>
              <svg className={s.featureIcon} height="32" width="32">
                <use href={`${sprite}#icon-van`} />
              </svg>
              <span className={s.featureText}>Panel Truck</span>
            </div>
          </label>

          <label>
            <Field
              type="radio"
              name="form"
              value="fullyIntegrated"
              id="fully"
            />
            <div className={s.feature}>
              <svg className={s.featureIcon} height="32" width="32">
                <use href={`${sprite}#icon-fully`} />
              </svg>
              <span className={s.featureText}>Fully Integrated</span>
            </div>
          </label>

          <label>
            <Field type="radio" name="form" value="alcove" id="alcove" />
            <div className={s.feature}>
              <svg className={s.featureIcon} height="32" width="32">
                <use href={`${sprite}#icon-alcove`} />
              </svg>
              <span className={s.featureText}>Alcove</span>
            </div>
          </label>
        </div>

        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchBox;

import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import s from "./RentForm.module.css";

const RentForm = () => {
  const rentFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("This field is required!"),
    email: Yup.string()
      .email("Invalid email format")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Email must have a one "@" and a "."'
      )
      .required("This field is required"),
    date: Yup.date()
      .min(new Date(), "Booking date cannot be in the past")
      .required("Booking date is required")
      .transform((originalValue, originalObject) => {
        return new Date(originalValue);
      })
      .typeError("Invalid date format"),
    comment: Yup.string().min(3, "Too short").max(500, "Too long"),
  });

  const initialFormValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const handleSubmit = (value, actions) => {
    const message = {
      name: value.name,
      email: value.email,
      date: value.date,
      comment: value.comment,
    };
    iziToast.show({
      title: "Success!",
      message: "Your camper rental request has been successfully sent!",
      position: "center",
      color: "green",
      timeout: 6000,
    });
    actions.resetForm();
  };

  return (
    <section className={s.wrapper}>
      <h3 className={s.title}>Book your campervan now</h3>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>
      <Formik
        validationSchema={rentFormSchema}
        initialValues={initialFormValues}
        onSubmit={handleSubmit}>
        <Form>
          <div className={s.form}>
            <div>
              <Field
                type="text"
                name="name"
                placeholder="Name*"
                className={s.input}
              />
              <ErrorMessage name="name" component="span" className={s.error} />
            </div>

            <div>
              <Field
                type="text"
                name="email"
                placeholder="Email*"
                className={s.input}
              />
              <ErrorMessage name="email" component="span" className={s.error} />
            </div>
            <div>
              <Field
                type="date"
                name="date"
                placeholder="Booking date*"
                className={s.input}
              />
              <ErrorMessage name="date" component="span" className={s.error} />
            </div>
            <div>
              <Field
                type="text"
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={s.input}
              />
              <ErrorMessage
                name="comment"
                component="span"
                className={s.error}
              />
            </div>
          </div>
          <button type="submit" className={s.button}>
            Send
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default RentForm;

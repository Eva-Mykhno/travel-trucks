import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
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
    date: Yup.string()
      .matches(
        /^\d{4}-\d{2}-\d{2}$/,
        "Booking date must be in format YYYY-MM-DD"
      )
      .required("Booking date is required"),
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
    actions.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Book your campervan now</h3>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>
      <Formik
        validationSchema={rentFormSchema}
        initialValues={initialFormValues}>
        onSubmit={handleSubmit}
        <Form>
          <div className={s.form}>
            <Field
              type="text"
              name="name"
              placeholder="Name*"
              className={s.input}></Field>
            <Field
              type="text"
              name="email"
              placeholder="Email*"
              className={s.input}></Field>
            <Field
              type="text"
              name="date"
              placeholder="Booking date*"
              className={s.input}></Field>
            <Field
              type="text"
              as="textarea"
              name="comment"
              placeholder="Comment"
              className={s.input}></Field>
          </div>
          <button type="submit" className={s.button}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RentForm;

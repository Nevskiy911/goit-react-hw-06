import { nanoid } from "nanoid";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import s from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9\-]+$/, "Phone number must contain only numbers and dashes")
    .min(3, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
});

function ContactForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <div className={s.wrapper}>
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name="name" component="div" className={s.error} />

            <label htmlFor="number">Phone number</label>
            <Field
              type="text"
              name="number"
              id="phone-number"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name="number" component="div" className={s.error} />
            <button type="submit" id="submit-button">
              Add contact
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;

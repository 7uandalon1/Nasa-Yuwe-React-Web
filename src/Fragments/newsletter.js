import React from "react";
import { Formik, Form, useField } from "formik";
import { ReactComponent as Illustration } from "./assets/svg/undraw_newsletter_re_wrob.svg";
import * as yup from "yup";


const CustomInputText = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="field" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props, "checkbox");
  return (
    <>
      <label className="checkbox ">
        <input type="checkbox" className="form-check-input" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};


function NewsletterFragment() {
  return (
    <React.Fragment>
      <section id="contact-us-section">
        <div className="contact-us-container">
        <h1 className="form-title">Unete a nuestro <h1 className='Newsletter-word'>Newsletter</h1> <p className="Newsletter-title-p">¡para conocer más ofertas! </p></h1>
          <Formik
            initialValues={{
              name: "",
              email: "",
              TermsAcepted: false
            }}
            validationSchema={yup.object({
              name: yup
                .string()
                .min(3, "¡Muy corto!")
                .max(40, "¡Demasiado Largo!")
                .required("¡Queremos recordarte, dime tu nombre!"),
              email: yup
                .string()
                .email("Esto no parece un correo")
                .required("¡Queremos contactarte, dime tu correo!"),
              TermsAcepted: yup
                .boolean()
                .required("¡Dale a la cajita no te cuesta nada!")
                .oneOf([true], "¡Dale a la cajita no te cuesta nada!")
            })}
            onSubmit={(values, { setSumbitting, resetForm }) => {
              setTimeout(() => {
                /* alert(JSON.stringify(values, null, 2)); */
                alert('Email Send')
                resetForm();
                setSumbitting(false);
              }, 300);
            }}
          >
            {(props) => (
              <div className="form-container">
                <Form >
                  
                  <h3>
                    ¡Llename!
                  </h3>

                  <CustomInputText
                    label="¿Cuál es tu nombre?"
                    name="name"
                    type="text"
                    placeholder="Juan David Gamboa"
                  ></CustomInputText>
                  <CustomInputText
                    label="¿Cuál es tu E-mail?"
                    name="email"
                    type="email"
                    placeholder="example@test.div"
                  ></CustomInputText>
                  <CustomCheckbox name="TermsAcepted">
                    Acepto los <a href="https://www.nasayuwe.com.co">Terminos y Condiciones</a>
                  </CustomCheckbox>
                  <button type="sumbit" className="sumbit-button">
                    {" "}
                    {props.isSubmitting ? "Cargando..." : "Enviar"}
                  </button>
                </Form>
                <div className="custom-img-holder">
                  <Illustration className="newsletter-svg" />

                </div>
              </div>
            )}
          </Formik>
        </div>
      </section>
    </React.Fragment>
  );
}
export { NewsletterFragment };

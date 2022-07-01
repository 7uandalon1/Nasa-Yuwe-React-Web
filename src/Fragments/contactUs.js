import React from 'react';
import {Formik, Form, useField } from 'formik';
import {ReactComponent as Illustration} from '../assets/svg/undraw_newsletter_re_wrob.svg'
import {Link} from 'react-scroll'
import * as yup from 'yup';
import {BsBoxArrowUp} from 'react-icons/bs'


const CustomInputText = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return(
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='field' {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ): null}
        </>
    )
}

const CustomCheckbox = ({children, ...props}) => {
    const [field, meta] = useField(props, 'checkbox');
    return(
        <>
            <label className='checkbox'>
                <input type='checkbox' {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ): null}
        </>
    )
}

const CustomSelect = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return(
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ): null}
        </>
    )
}

function ContactUsFragment(){
   
    return(
        <React.Fragment>
          
           <section id='contact-us-section'>
             
             <div className='contact-us-container'>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            TermsAcepted: false
                        }}
                        validationSchema={yup.object({
                            name: yup.string()
                                .min(3, '¡Muy corto!')
                                .max(40, '¡Demasiado Largo!')
                                .required('¡Queremos recordarte, dime tu nombre!'),
                            email: yup.string()
                                .email('Esto no parece un correo')
                                .required('¡Queremos contactarte, dime tu correo!'),
                            TermsAcepted: yup.boolean()
                                .required('¡Dale a la cajita no te cuesta nada!')
                                .oneOf([true], '¡Dale a la cajita no te cuesta nada!')
                        })
                        }
                        onSubmit={(values, {setSumbitting, resetForm}) => {
                            setTimeout(() =>{
                                alert(JSON.stringify(values, null, 2));
                                resetForm();
                                setSumbitting(false)
                            }, 300 )
                        }}
                    >
                        {props => (
                            <div className='form-container'>
                                <Form>
                                    <h1>Conoce más ofertas y exclusivas oportunidades</h1>
                                        
                                    <CustomInputText label='Nombre' name='name' type='text' placeholder='Juan David Gamboa'></CustomInputText>
                                    <CustomInputText label='Email' name='email' type='email' placeholder='example@test.div'></CustomInputText>
                                    <CustomCheckbox name='TermsAcepted'>
                                        Acepto los <a href=''>Terminos y Condiciones</a> 
                                    </CustomCheckbox>
                                    <button type='sumbit' className='sumbit-button'> {props.isSubmitting ? 'Cargando...' : 'Enviar'}</button>
                                </Form>
                                <div className='custom-img-holder'>
                                    <Illustration className='newsletter-svg'/>
                                    <Link type='button' className='btn a-button home-button' to='relleno'><BsBoxArrowUp size='calc(20% + 3vw)'> </BsBoxArrowUp> Volver al inicio</Link>
                                </div>
                            </div>
                        )}
                    </Formik>
             </div>
           </section>
        </React.Fragment>
    )
} 
export {ContactUsFragment}
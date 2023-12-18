import React, { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import "./contact-form.scss"

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const form = useRef<HTMLFormElement>(null); // Ajout du type HTMLFormElement

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_ps81aj1', 'template_ns946ew', form.current, '4O6AK-IT-LgclSKA4')
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
          },
          (error: EmailJSResponseStatus) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <label htmlFor="user_name" className='label-username'>
        Nom :
        </label>
        <input type="text" {...register('name', { required: 'Ce champ est requis' })} name="user_name" className='username' placeholder='name'/>
      {errors.name && <p>{errors.name.message}</p>}

      <label htmlFor="user_email" className='label-email'>
        E-mail :
        </label>
        <input type="email" {...register('email', { required: 'Ce champ est requis' })} name='user_email' className='email' placeholder='E-mail'/>
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor='message' className='label-message'>
        Message :
        </label>
        <textarea {...register('message', { required: 'Ce champ est requis' })} name='message' className='message' placeholder='Message'/>
      {errors.message && <p>{errors.message.message}</p>}
        <div className="g-recaptcha" data-sitekey="6LfcXy0pAAAAAMMJgP1wF58WyP-FepPdxquZwD8M"></div>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default ContactForm;


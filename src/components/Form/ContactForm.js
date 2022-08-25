// Import FormSpree hooks for form submission
import { useForm, ValidationError } from "@formspree/react";

// Import CSS
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("mrgjpkbl");

  if (state.succeeded) {
    return <p className={styles.succeeded_text}>Thanks, message received!</p>;
  }

  return (
    <form className={styles.ContactForm} onSubmit={handleSubmit}>
      <div>
        <label htmlFor='email'>Email Address:</label>
        <br />
        <input
          className={styles.email_input}
          id='email'
          type='email'
          name='email'
          placeholder='person@place.com'
          required
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
      </div>
      <div>
        <label htmlFor='message'>Message:</label>
        <br />
        <textarea
          className={styles.message_input}
          id='message'
          name='message'
          placeholder='What can I help you with?'
          required
        />
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
      </div>
      <button type='submit' disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;

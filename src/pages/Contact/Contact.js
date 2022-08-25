// Import Components
import ContactForm from "../../components/Form/ContactForm";

// Import CSS
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <hr className={styles.contact_divider} />
      <section className={styles.section_container}>
        <h2>Get in Touch</h2>
        <div className={styles.text_section}>
          <p>
            If you are a recruiter or simply someone with an idea hoping to be
            made manifest, I’d love to hear about what you’re working on and how
            I could help. I’m currently looking to transition into a
            professional role with a company as a frontend web developer, but I
            am also open to a wide range of opportunities. I am currently
            location agnostic and willing to relocate for the right position.
          </p>

          <p>
            As proven by my drive and success in teaching myself HTML, CSS, and
            JavaScript, I’m capable of independent work and study for all
            technologies needed. I am hard-working and a positive person who
            will always approach each task with a sense of purpose and attention
            to detail.
          </p>
        </div>
      </section>
      <hr className={styles.contact_divider} />
      <section className={styles.section_container}>
        <h2>Contact Me</h2>
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;

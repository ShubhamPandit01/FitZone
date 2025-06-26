import { useRef, useState } from "react";

const ContactForm = () => {
  const [thankyou, setThankyou] = useState(true);
  const [submittedData, setSubmittedData] = useState({ name: "", email: "" });

  const input = {
    name: useRef(null),
    email: useRef(null),
    message: useRef(null),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = input.name.current.value;
    const email = input.email.current.value;
    const message = input.message.current.value;

    setSubmittedData({ name, email });
    setThankyou(false);

    input.name.current.value = "";
    input.email.current.value = "";
    input.message.current.value = "";
  };

  return (
    <>
      <div className="contact_form_container">
        {thankyou ? (
          <form className="contact_form" onSubmit={handleSubmit}>

            <h1> Contact <span style={{ color: "rgb(240, 209, 75)" }}>FitZone</span></h1>

            <input type="text" name="name" placeholder="Your Name" ref={input.name} required />
            <input type="email" name="email" placeholder="Your Email" ref={input.email} required />
            <textarea name="message" placeholder="Your Message" ref={input.message} requird />

            <button type="submit">Send Message</button>
          </form>
        ) : (
          <div className="thankyou_message">
            <h1>Thank you <span style={{ color: "rgb(240, 209, 75)" }}>{submittedData.name}</span> for contacting us!</h1>
            <p>Our team will get in touch with you within 24 hours. You’ll receive an update at: <strong>{submittedData.email}</strong>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactForm;

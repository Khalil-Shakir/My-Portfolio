import { useState } from "react";
import "./Contact.css";
import {
  RiMap2Fill,
  RiUser2Fill,
  RiMailOpenFill,
  RiPhoneFill,
  RiSendPlaneFill,
} from "react-icons/ri";
import emailjs from '@emailjs/browser';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [feedbackMessage, setFeedbackMessage] = useState('')
  const [messageColor, setMessageColor] = useState('')

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function sendEmail(e) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setMessageColor('color-red')
      setFeedbackMessage('Please fill all the fields')
      setTimeout(() => setFeedbackMessage(''), 3000)

      return;
    }
    emailjs.send('service_v9ix4ua', 'template_pdprp2f', formData, 'nBtAT1ZZDXiKNYODp').then(() => {
      setMessageColor('color-first');
      setFeedbackMessage("Message sent ✓");
      setTimeout(() => setFeedbackMessage(''), 3000);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    },
      (error) => {
        alert("OOPS! Something went wrong", error)
      },
    );

  }

  return (
    <section className="contact section">
      <h2 className="section-title">
        Get in <span>Touch</span>
      </h2>

      <div className="contact-container container grid">
        <div className="contact-content grid">
          <div className="contact-card">
            <span className="contact-icon">
              <RiMap2Fill />
            </span>
            <div>
              <h3 className="contact-title">Adress</h3>
              <p className="contact-data">
                Chashma barrage, Mianwali, Pakistan
              </p>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <RiUser2Fill />
            </span>
            <div>
              <h3 className="contact-title">Freelance</h3>
              <p className="contact-data">Available Right Now</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <RiMailOpenFill />
            </span>
            <div>
              <h3 className="contact-title">Email</h3>
              <p className="contact-data">jastrime@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <RiPhoneFill />
            </span>
            <div>
              <h3 className="contact-title">Phone</h3>
              <p className="contact-data">+92 308 6642639</p>
            </div>
          </div>
        </div>
        <form className="contact-form grid" onSubmit={sendEmail}>
          <div className="contact-form-group grid">
            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-labe;">
                Your full name <b>*</b>
              </label>
              <input type="text" name="name"
                value={formData.name} onChange={handleChange} className="contact-form-input" />
            </div>

            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-labe;">
                Your email Adress <b>*</b>
              </label>
              <input type="email" name="email"
                value={formData.email} onChange={handleChange} className="contact-form-input" />
            </div>

            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-labe;">
                Your Subject <b>*</b>
              </label>
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                value={formData.subject}
                className="contact-form-input"
              />
            </div>
          </div>
          <div className="contact-form-div">
            <label htmlFor="" className="contact-form-labe;">
              Your Message <b>*</b>
            </label>
            <textarea
              name="message"
              onChange={handleChange}
              value={formData.message}
              className="contact-form-textarea contact-form-input"
            ></textarea>
          </div>
          <div className="contact-button">
            <button className="button">
              Send Message
              <span className="button-icon">
                <RiSendPlaneFill />
              </span>
            </button>
          </div>

          {feedbackMessage && (
            <p className={`contact-msg ${messageColor}`}>{feedbackMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;

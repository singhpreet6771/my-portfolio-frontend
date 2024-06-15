import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ContactMeForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios({
      url: `${process.env.REACT_APP_DOWNLINE_URL}${process.env.REACT_APP_SEND_EMAIL}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      data: formData,
    })
      .then((res) => {
        if (res.data.success) {
          toast.success(
            "Thank you! I've received your message and will get back to you shortly. 😊"
          );
          setIsLoading(false);
          setFormData({ name: "", email: "", message: "" });
        }
      })
      .catch((err) => {
        toast.error(
          "It looks like there was a problem. Please try sending your message again shortly."
        );
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleOnSubmit} className="contact-form">
      <div className="name-input">
        <label htmlFor="name" className="contact-form-label">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="contact-form-control"
          id="name"
          placeholder="what's your name?"
          required
        />
      </div>
      <div className="email-input">
        <label htmlFor="email" className="contact-form-label">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="contact-form-control"
          id="email"
          placeholder="what's your email?"
          required
        />
      </div>
      <div className="message-input">
        <label htmlFor="message" className="contact-form-label">
          Your Message
        </label>
        <textarea
          className="contact-form-control"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="what's your message?"
          rows="5"
          required
        ></textarea>
      </div>
      <div className="main-submit-contact">
        <button
          type="submit"
          className="btn btn-lg submit-contact-btn"
          disabled={isLoading}
        >
          {isLoading && (
            <>
              <span className="sending-text">Sending...</span>
              <i className="fa-regular fa-paper-plane fa-beat sending-icon"></i>
            </>
          )}
          {!isLoading && <span>Send</span>}
        </button>
      </div>
    </form>
  );
};

export default ContactMeForm;

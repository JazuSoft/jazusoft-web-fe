import React from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { Button } from "../../index";

import './contact-form.css'

const ContactForm = () => (
  <div className="touch-form">
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="Contact Form" />
      <div className="form-group">
        <input type="text" id="name" name="name" className="form-control" placeholder="Full name" required/>
      </div>
      <div className="form-group">
        <input type="email" id="email" name="email" className="form-control" placeholder="Email" required/>
      </div>
      <div className="form-group">
        <textarea name="message" rows="8" id="message" className="form-control" placeholder="Message" required/>
      </div>
      <div className="form-group text-center">
        <ReCAPTCHA sitekey="6LeYwaIUAAAAAIThG0xEvkhZPgZQ8NqJ8S6jtIiT" />
      </div>
      <Button type="submit">Send</Button>
    </form>
  </div>
)

export default ContactForm

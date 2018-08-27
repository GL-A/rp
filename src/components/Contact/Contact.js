import React from 'react';
import './contact.css'

const Contact = () => {
    return (
        <div id="contacts-anchor" className="contact">
      <div className="contact-div-1">
        <h1>Contact</h1>
        <p>
          "Knowing is not enough; We must apply.<br /> Willing is not enough; We must do."
        </p>
        <p>
          -Bruce Lee
        </p>
      </div>
      <div className="contact-div-2">
        <div className="contact-social-links">
          <a href="https://www.linkedin.com/in/georgelopez-ayala/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i>
          <p>
            linkedin.com/in/georgelopez-ayala
          </p></a>
        </div>
        <div  className="contact-social-links">
          <a href="mailto:georgelopezayala@icloud.com?Subject=Job%20opportunity" target="_top"><i className="fa fa-envelope" aria-hidden="true"></i>
          <p>
            georgelopezayala@icloud.com
          </p></a>
        </div>
        <div className="contact-social-links">
          <a href="https://github.com/swiftcode-design" target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
            <p>
              https://github.com/swiftcode-design & https://github.com/GL-A
            </p></a>
        </div>
      </div>
      <div className="contact-div-3">

      </div>
    </div>
    );
};

export default Contact;
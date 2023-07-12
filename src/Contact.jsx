import React from 'react';
import './css/contact.css';

function Contact() {
  return (
    <>
      <div className="contact-section">
        <h1 className="section-heading"> Contact </h1>
        Email : vignesh@creative.com
        <h2> Available On </h2>
        <div className="contact-profiles">
          <div className="profile-box">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
            <div> GitHub </div>
          </div>
          <div className="profile-box">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" />
            <div> Linkedin </div>
          </div>
          <div className="profile-box">
            <img src="https://i.pinimg.com/originals/81/70/c0/8170c0b0cddec975b7c2553c20c1ab7e.png" />
            <div> Youtube </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

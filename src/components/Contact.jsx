import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="contact_container pt-16 md:pt-32">
      <Helmet>
        <title>Caring Crowd | Contact</title>
        <meta name="description" content="Get in touch with Caring Crowd." />
      </Helmet>
      <h2 className="text-3xl text-center font-bold">CONTACT US</h2>
      <p>
        We want to hear from you! Drop us a note and someone from our team will
        get back to you.
      </p>
      <p className="font-bold mt-4">Call: +91 9876543210</p>
      <p className="font-bold mt-4">Mail: caringcrowd@email.com</p>
    </div>
  );
};

export default Contact;

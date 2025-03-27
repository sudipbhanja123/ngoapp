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
      {/* <div class="g_map mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.483625506544!2d81.0342308!3d21.0932766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2945ab2194c349%3A0xcebf0abdd0677323!2sGaushala%20Rd%2C%20Rajnandgaon%2C%20Chhattisgarh%20491441!5e0!3m2!1sen!2sin!4v1690356247937!5m2!1sen!2sin"
          width="100%"
          height="600"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
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

import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  const MapStyle = {
    width: "100%",
    height: 500,
  };
  return (
    <div className="contact_container pt-16 md:pt-32 py-5">
      <Helmet>
        <title>Caring Crowd | Contact</title>
        <meta name="description" content="Get in touch with Caring Crowd." />
      </Helmet>
      <h2 className="text-3xl text-center font-bold">CONTACT US</h2>
      <div class="g_map mt-8">
        <iframe
          src="https://maps.google.com/maps?q=TCS+Gitanjali+Park&z=10&output=embed"
          width={MapStyle.width}
          height={MapStyle.height}
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="Humanity First Indonesia"
        />
        {/* <div style="position: relative;">
          <div style="position: relative; padding-bottom: 75%; height: 0; overflow: hidden;">
            <iframe
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;"
              loading="lazy"
              allowfullscreen
              src="https://maps.google.com/maps?q=TCS+Gitanjali+Park&z=10&output=embed"
            ></iframe>
          </div>
          <a
            href="https://mapembeds.com"
            rel="noopener"
            target="_blank"
            style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;"
          >
            mapembeds.com
          </a>
        </div> */}
      </div>
      <div className="w-[70%] text-center ml-auto mr-auto py-5">
        <p>
          We want to hear from you! Drop us a note and someone from our team
          will get back to you. Looking to volunteer or support us in any other
          ways? Call +91 6294136450 Have a question that involves Caring Crowd?
          Please head on over to our Locations page to reach our locations.
        </p>

        <p className="font-bold mt-4">Call: +91 6294136450</p>
        <p className="font-bold mt-4">Mail: caringcrowd@email.com</p>
      </div>
    </div>
  );
};

export default Contact;

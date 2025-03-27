import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="main_about bg-blue-100 py-12 md:py-16 text-white">
      <Helmet>
        <title>Caring Crowd | About Us</title>
        <meta
          name="description"
          content="Learn more about Caring Crowd and how we help needy children."
        />
      </Helmet>
      <h2 className="text-3xl font-bold text-center text-white">
        Caring Crowd
        <br />
        Because "WE CARE!"
      </h2>
      <div className="product bg-blue-100 py-12 md:py-16">
        <h2 className="text-3xl text-center font-bold">HOW WE HELP</h2>
        <div className="product_container mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="item">
            <h3 className="text-xl font-semibold">Pure Food & Water</h3>
            <p>
              We supply needy children with basic necessities like pure food and
              water
            </p>
          </div>
          <div className="item">
            <h3 className="text-xl font-semibold">Health and Medicine</h3>
            <p>
              Health being the foremost priority, we aim at giving children
              every medical support
            </p>
          </div>
          <div className="item">
            <h3 className="text-xl font-semibold">Education</h3>
            <p>
              We provide education facilities to children all over the world
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import { Helmet } from "react-helmet";
import HowToHelp from "./HowToHelp";

const About = () => {
  return (
    <>
      <div className="main_about bg-blue-100 py-12 md:py-16 text-white">
        <div class="main_content_about text-center md:text-left">
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
        </div>
      </div>
      {/* How We Help Section */}
      <HowToHelp />
    </>
  );
};

export default About;

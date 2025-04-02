import React from "react";
import { Helmet } from "react-helmet";
import elder from "../assets/images/elder.jpg";
import hospital from "../assets/images/hospital.png";
import side from "../assets/images/side.jpg";
import { Link } from "react-router-dom";
import HowToHelp from "./HowToHelp";

const Home = () => {
  return (
    <div>
      <div className="main bg-blue-100 py-12 text-center">
        <Helmet>
          <title>Caring Crowd | Home</title>
          <meta
            name="description"
            content="Caring Crowd is dedicated to helping needy children worldwide."
          />
        </Helmet>
        <h2 className="text-3xl md:text-4xl font-bold">
          “Giving is not just about making a donation. It is about making a
          difference.”
        </h2>
        <p className="text-lg md:text-xl">
          Give a helping hand to people who NEED it!
        </p>
        <div className="btn mt-8">
          <Link
            href="/donate"
            className="bg-blue-500 !text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
          >
            GIVE NOW
          </Link>
        </div>
      </div>

      {/* Help a Child Today Section */}
      <div className="side md:flex bg-blue-100 py-12 md:py-16">
        <div className="left md:w-1/2">
          <img
            src={side}
            className="w-full md:rounded-lg"
            alt="Help a Child Today"
          />
        </div>
        <div className="right md:w-1/2 mt-4">
          <h2 className="text-3xl font-bold">HELP A CHILD TODAY</h2>
          <p className="mt-4">
            Service to man is service to God. CaringCrowd cares for needy
            children by empowering their caregivers to do their best work, with
            compassion, grace, integrity, and excellence. Our end goal is to
            support children worldwide and see every child reach the potential
            that God has for them.
          </p>
          <div className="side_btn mt-8">
            <Link
              to="/donate"
              className="bg-blue-500 !text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
            >
              JOIN US TODAY
            </Link>
          </div>
        </div>
      </div>

      {/* Help the Fighters Section */}
      <div className="side md:flex bg-blue-100 py-12 md:py-16">
        <div className="left md:w-1/2">
          <img
            src={hospital}
            className="w-full md:rounded-lg"
            alt="Help the Fighters"
          />
        </div>
        <div className="right md:w-1/2 mt-4">
          <h2 className="text-3xl font-bold">
            HELP THE FIGHTERS WHO ARE FIGHTING WITH LIFE AND DEATH IN THE
            HOSPITAL
          </h2>
          <p className="mt-4">
            Support for those facing life's most challenging moments. We
            understand the struggle of individuals fighting for their lives in
            hospitals and their families grappling with uncertainty and fear. We
            can help those battling life and death in hospitals, and together,
            we can be the change that the world needs.
          </p>
          <div className="side_btn mt-8">
            <Link
              to="/donate"
              className="bg-blue-500 !text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
            >
              GIVE TODAY
            </Link>
          </div>
        </div>
      </div>

      {/* Support Vulnerable Elderly Section */}
      <div className="side md:flex bg-blue-100 py-12 md:py-16">
        <div className="left md:w-1/2">
          <img
            src={elder}
            className="w-full md:rounded-lg"
            alt="Support Vulnerable Elderly"
          />
        </div>
        <div className="right md:w-1/2 mt-4 md:mt-0 md:ml-8">
          <h2 className="text-3xl font-bold">
            SUPPORT VULNERABLE ELDERLY, Provide them with respect and care
          </h2>
          <p className="mt-4">
            Studies show over 70% of senior citizens in India face abuse -
            verbal, physical, emotional, and financial. They also live with
            deteriorating health conditions they cannot afford to treat. Help
            them with a better life because #EldersLivesMatter. Ensure they are
            not alone, sick, and hungry. Provide elders with rations,
            toiletries, nutritional supplements, and essential medicines.
            <b>
              <span>"Spread love, Spread Positivity"</span>
            </b>
          </p>
          <div className="side_btn mt-8">
            <Link
              to="/donate"
              className="bg-blue-500 !text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
            >
              Donate NOW
            </Link>
          </div>
        </div>
      </div>

      {/* How We Help Section */}
      <HowToHelp />
    </div>
  );
};

export default Home;

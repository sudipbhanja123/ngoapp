import React from "react";
import { Helmet } from "react-helmet";
import pro1 from "../assets/images/pro1.svg";
import elder from "../assets/images/elder.jpg";
import hospital from "../assets/images/hospital.png";
import side from "../assets/images/side.jpg";
import { Link } from "react-router-dom";

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
            className="bg-blue-500 !text-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
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
            <a
              href="/donate"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
            >
              JOIN US TODAY
            </a>
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
            <a
              href="/donate"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
            >
              GIVE TODAY
            </a>
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
            <a
              href="/donate"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
            >
              Donate NOW
            </a>
          </div>
        </div>
      </div>

      {/* How We Help Section */}
      <div className="product bg-blue-100 py-12 md:py-16">
        <h2 className="text-3xl text-center font-bold">
          <span style={{ color: "black" }}>HOW WE HELP</span>
        </h2>
        <div className="product_container mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="item">
            <div className="item_img">
              <img className="pro" src={pro1} alt="Pure Food & Water" />
            </div>
            <div className="item_content mt-4 text-center md:text-left">
              <h3 className="text-xl font-semibold">Pure Food & Water</h3>
              <p className="mt-4">
                We supply needy children with basic necessities like pure food
                and water
              </p>
            </div>
          </div>

          <div className="item">
            <div className="item_img">
              <img
                className="pro"
                src="images/pro2.svg"
                alt="Health and Medicine"
              />
            </div>
            <div className="item_content mt-4 text-center md:text-left">
              <h3 className="text-xl font-semibold">Health and Medicine</h3>
              <p className="mt-4">
                Health being the foremost priority, we aim at giving children
                every medical support
              </p>
            </div>
          </div>

          <div className="item">
            <div className="item_img">
              <img className="pro" src="images/pro3.svg" alt="Education" />
            </div>
            <div className="item_content mt-4 text-center md:text-left">
              <h3 className="text-xl font-semibold">Education</h3>
              <p className="mt-4">
                We provide education facilities to children all over the world
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

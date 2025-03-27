import React from "react";
import { Helmet } from "react-helmet";
import image1 from "../assets/images/images (1).jpg";
import image2 from "../assets/images/images.jpg";
import pro1 from "../assets/images/pro1.svg";
const Gallery = () => {
  return (
    <>
      <div class="main_about bg-blue-100 py-12 md:py-16">
        <div class="main_content_about text-center md:text-left">
          <h2 class="text-3xl font-bold">What We Do?</h2>
        </div>
      </div>

      <div className="selfie flex py-5 gap-6 px-5">
        <img src={image1} alt="Gallery Image 1" />
        <img src={image2} alt="Gallery Image 2" />
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
    </>
  );
};

export default Gallery;

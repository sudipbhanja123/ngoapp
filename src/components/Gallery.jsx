import React from "react";
import { Helmet } from "react-helmet";
// import image1 from "../assets/images/images (1).jpg";
// import image2 from "../assets/images/images.jpg";

import HowToHelp from "./HowToHelp";
import { FeaturedImageGallery } from "./FeaturedImageGallery";
const Gallery = () => {
  return (
    <>
      <div class="main_about bg-blue-100 py-12 md:py-16">
        <div class="main_content_about text-center md:text-left">
          <h2 class="text-3xl font-bold">What We Do?</h2>
        </div>
      </div>

      {/* <div className="selfie flex py-5 gap-6 px-5">
        <img src={image1} alt="Gallery Image 1" />
        <img src={image2} alt="Gallery Image 2" />
      </div> */}
      <div className="selfie  py-5 w-[70%] ml-auto mr-auto">
        <FeaturedImageGallery />
      </div>
      {/* How We Help Section */}
      <HowToHelp />
    </>
  );
};

export default Gallery;

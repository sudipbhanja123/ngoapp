import React from "react";
import { Helmet } from "react-helmet";
import image1 from "../assets/images/images (1).jpg";
const Gallery = () => {
  return (
    <div className="gallery bg-blue-100 py-12">
      <Helmet>
        <title>Caring Crowd | Gallery</title>
        <meta
          name="description"
          content="View our gallery of images showcasing our work."
        />
      </Helmet>
      <h2 className="text-3xl text-center font-bold">What We Do?</h2>
      <div className="image-container mt-8">
        <img src={image1} alt="Gallery Image 1" />
        <img src="images/image2.jpg" alt="Gallery Image 2" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default Gallery;

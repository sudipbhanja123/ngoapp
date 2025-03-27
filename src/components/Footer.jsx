import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-100 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-12">
        <div className="pages">
          <a href="index.html">
            <img
              className="aimg w-40"
              src="images/Caring Crowd.png"
              alt="Logo"
            />
          </a>
          <p className="mt-4">
            Caring Crowd cares for needy children by empowering their caregivers
            to do their best work, with compassion, grace, integrity, and
            excellence.
          </p>
        </div>
        <div className="doc">
          <h3 className="font-bold text-lg">Navigation</h3>
          <a href="/" className="block my-2">
            Home
          </a>
          <a href="/about" className="block my-2">
            About
          </a>
          <a href="/donate" className="block my-2">
            Donate
          </a>
          <a href="/contact" className="block my-2">
            Contact
          </a>
        </div>
        <div className="contact">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <p className="block my-2">VIT Chennai, Tamil Nadu</p>
          <p className="block my-2">987654321</p>
          <p className="block my-2">caringcrowd@email.com</p>
        </div>
        <div className="social">
          <h3 className="font-bold text-lg">Support</h3>
          <p>Help us shape a better future for children all over the world</p>
          <div className="side_btn mt-4">
            <a
              href="/donate"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
            >
              JOIN US TODAY
            </a>
          </div>
        </div>
      </div>
      <hr className="my-8 md:my-12" />
      <p className="text-center text-gray-600">
        &copy; 2023 CaringCrowd. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

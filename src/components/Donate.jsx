import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <>
      <div className="donate bg-blue-500 text-white">
        <div class="donate_container px-4 py-8 text-center md:px-8 lg:px-16">
          <Helmet>
            <title>Caring Crowd | Donate</title>
            <meta
              name="description"
              content="Make a donation to help needy children worldwide."
            />
          </Helmet>
          <h1 className="text-4xl font-bold text-center">
            Let's Make a Change Together!
          </h1>
          <p class="text-lg my-4">
            The greatest use of a life is to spend it on something that will
            outlast it.
          </p>
          <br />
          <p className="text-lg my-4">
            Any help or donation,
            <br /> no matter how big or small, <br />
            will be whole-heartedly and deeply appreciated.
          </p>
          <div className="side_btn mt-6 text-center">
            <Link
              to="https://payments-test.cashfree.com/forms/thankyou"
              className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100"
            >
              DONATE NOW
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;

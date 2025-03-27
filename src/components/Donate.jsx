import React from "react";
import { Helmet } from "react-helmet";

const Donate = () => {
  return (
    <div className="donate bg-blue-500 text-white">
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
      <p className="text-lg my-4">
        Any help or donation, no matter how big or small, will be
        whole-heartedly and deeply appreciated.
      </p>
      <div className="side_btn mt-6 text-center">
        <a
          href="https://payments-test.cashfree.com/forms/thankyou"
          className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100"
        >
          DONATE NOW
        </a>
      </div>
    </div>
  );
};

export default Donate;

import React from "react";
import { CartState } from "../context/Context";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SingleClass from "../components/SingleClass";

const WebinarClasses = () => {
  const {
    state: { ceus },
  } = CartState();
  console.log(ceus);

  return (
    <>
      <Navigation></Navigation>
      {/* loop class data show each class that is a webinar , do same for other pages but just if on demand or in person */}
      <SingleClass></SingleClass>

      <Footer></Footer>
    </>
  );
};

export default WebinarClasses;

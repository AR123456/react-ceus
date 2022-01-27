import React from "react";
import { Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";
import InPersonClasses from "./pages/InPersonClasses";
import OnDemandClasses from "./pages/OnDemandClasses";
import WebinarClasses from "./pages/WebinarClasses";

const App = () => {
  return (
    <>
      <Navigation></Navigation>
      <Home></Home>
      <Footer></Footer>
    </>
  );
};

export default App;

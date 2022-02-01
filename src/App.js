import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";
import InPersonClasses from "./pages/InPersonClasses";
import OnDemandClasses from "./pages/OnDemandClasses";
import WebinarClasses from "./pages/WebinarClasses";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navigation></Navigation>
              <Home></Home>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route exact path="/inperson" element={<InPersonClasses />} />
        <Route exact path="/ondemand" element={<OnDemandClasses />} />
        <Route exact path="/webinar" element={<WebinarClasses />} />
        <Route exact path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
// import Hero from '../components/Hero'
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="errorPageStyle">
      <div className="defaultHero">
        <Banner title="404" subtitle="page not found">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </div>
    </div>
  );
};

export default Error;

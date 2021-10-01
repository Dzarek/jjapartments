import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import BookRoom from "../components/BookRoom";

import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import videoBg from "../images/my/hotelVideo2.mp4";

class Home extends Component {
  render() {
    return (
      <>
        <div>
          <video
            src={videoBg}
            autoPlay
            muted
            loop
            playsinline
            nocontrols
            type="video/mp4"
          ></video>
          <div className="defaultHero">
            <Banner
              title="luxurious apartments"
              subtitle="deluxe rooms starting at $199"
            >
              <MdKeyboardArrowDown className="arrowDown" />
            </Banner>
          </div>
        </div>
        <BookRoom />
        <Services />
        <FeaturedRooms />
        <div className="gallery-home">
          <h3>Check our full gallery!</h3>
          <Link to="/gallery" className="linkToGallery">
            <FaRegEye className="galleryBtn" />
          </Link>
        </div>
      </>
    );
  }
}
export default Home;

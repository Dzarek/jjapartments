import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Services from "../components/ServicesPL";
import FeaturedRooms from "../components/FeaturedRoomsPL";
import BookRoom from "../components/BookRoomPL";

import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import videoBg from "../images/my/hotelVideo2.mp4";

class HomePL extends Component {
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
              title="luksusowe apartamenty"
              subtitle="pokoje w cenie już od 400 zł"
            >
              <MdKeyboardArrowDown className="arrowDown" />
            </Banner>
          </div>
        </div>
        <BookRoom />
        <Services />
        <FeaturedRooms />
        <div className="gallery-home">
          <h3>Sprawdź naszą galerie zdjęć!</h3>
          <Link to="/gallery" className="linkToGallery">
            <FaRegEye className="galleryBtn" />
          </Link>
        </div>
      </>
    );
  }
}
export default HomePL;

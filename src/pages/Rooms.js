import React from "react";
// import Hero from "../components/Hero";
import Banner from "../components/Banner";
// import { Link } from "react-router-dom";
import RoomContainer from "../components/RoomContainer";

import { MdKeyboardArrowDown } from "react-icons/md";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import rooms1 from "../images/my/rooms1.jpg";
import rooms2 from "../images/my/rooms2.jpg";
import rooms3 from "../images/my/rooms3.jpg";
import rooms4 from "../images/my/rooms4.jpg";
import rooms5 from "../images/my/rooms5.jpeg";
import rooms6 from "../images/my/rooms6.jpg";
import rooms7 from "../images/my/rooms7.jpg";

const Rooms = () => {
  return (
    <>
      {/* <Hero hero="roomsHero" /> */}

      <div className="roomsCarousel">
        <Carousel
          infinite
          autoPlay={3000}
          animationSpeed={2000}
          slidesPerPage={1}
        >
          <img src={rooms1} alt="rooms1" />
          <img src={rooms2} alt="rooms2" />
          <img src={rooms3} alt="rooms3" />
          <img src={rooms4} alt="rooms4" />
          <img src={rooms5} alt="rooms5" />
          <img src={rooms6} alt="rooms6" />
          <img src={rooms7} alt="rooms7" />
        </Carousel>
        <div className="roomsHero">
          <Banner title="our rooms">
            <MdKeyboardArrowDown className="arrowDown" />
          </Banner>
        </div>
      </div>
      <RoomContainer />
    </>
  );
};

export default Rooms;

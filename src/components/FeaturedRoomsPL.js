import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./RoomPL";
import Title from "./Title";

import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="Ulubione pokoje" />
        <div className="featured-rooms-center">
          {loading ? (
            <Loading />
          ) : (
            <Carousel
              infinite
              autoPlay={3000}
              animationSpeed={2000}
              slidesPerPage={3}
              breakpoints={{
                900: {
                  slidesPerPage: 1,
                  itemWidth: 300,
                },
              }}
              arrowLeft={
                <IoIosArrowDropleftCircle className="arrowrRightLeftFeatures" />
              }
              arrowRight={
                <IoIosArrowDroprightCircle className="arrowrRightLeftFeatures" />
              }
              addArrowClickHandler
              stopAutoPlayOnHover
            >
              {rooms}
            </Carousel>
          )}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;

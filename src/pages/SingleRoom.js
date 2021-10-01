import React, { Component } from "react";
import defaultImg from "../images/room-11.jpeg";
// import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
import BookRoom from "../components/BookRoom";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultImg,
    };
  }
  static contextType = RoomContext;
  // componentDidMount(){
  // }

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="errorPageStyle">
          <div className="error">
            <h3>no such room could be found...</h3>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </div>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    return (
      <>
        <StyledHero img={images[0]}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <BookRoom />
        <section className="single-room">
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <br />
            <div className="single-room-wraper">
              <div className="single-room-images">
                <Carousel
                  infinite
                  autoPlay={4000}
                  animationSpeed={2000}
                  slidesPerPage={1}
                  breakpoints={{
                    900: {
                      slidesPerPage: 1,
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
                  {images.map((item, index) => {
                    return <img key={index} src={item} alt={name} />;
                  })}
                </Carousel>
              </div>
              <article className="info">
                <h3>info</h3>
                <h6>
                  price : <span> {price}$</span>
                </h6>
                <h6>
                  size : <span> {size} SQFT</span>
                </h6>
                <h6>
                  max capacity :{" "}
                  <span>
                    {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                  </span>
                </h6>
                <h6>
                  pets :{" "}
                  <span>
                    {pets ? (
                      <p className="infoYes">pets allowed</p>
                    ) : (
                      <p className="infoNo">no pets allowed</p>
                    )}
                  </span>
                </h6>
                <h6>
                  breakfast :{" "}
                  <span>
                    {breakfast ? (
                      <p className="infoYes">included</p>
                    ) : (
                      <p className="infoNo">not included</p>
                    )}
                  </span>
                </h6>
              </article>
            </div>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;

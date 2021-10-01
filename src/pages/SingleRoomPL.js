import React, { Component } from "react";
import defaultImg from "../images/room-11.jpeg";
// import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
import BookRoom from "../components/BookRoomPL";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

class SingleRoomPL extends Component {
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
            <h3>nie można odnaleźć pokoju...</h3>
            <Link to="/pokoje/" className="btn-primary">
              wróć do listy pokoi
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
          <Banner title={`${name}`}>
            <Link to="/pokoje" className="btn-primary">
              wróć do listy pokoi
            </Link>
          </Banner>
        </StyledHero>
        <BookRoom />
        <section className="single-room">
          <div className="single-room-info">
            <article className="desc">
              <h3>szczegóły</h3>
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
                <h3>informacje</h3>
                <h6>
                  cena : <span> {price}zł</span>
                </h6>
                <h6>
                  rozmiar : <span> {size} m2</span>
                </h6>
                <h6>
                  max osób :{" "}
                  <span>{capacity > 1 ? `${capacity}` : `${capacity}`}</span>
                </h6>
                <h6>
                  zwierzęta :{" "}
                  <span>
                    {pets ? (
                      <p className="infoYes">akceptowane</p>
                    ) : (
                      <p className="infoNo">nie akceptowane</p>
                    )}
                  </span>
                </h6>
                <h6>
                  śniadanie :{" "}
                  <span>
                    {breakfast ? (
                      <p className="infoYes">w cenie</p>
                    ) : (
                      <p className="infoNo">za dopłatą</p>
                    )}
                  </span>
                </h6>
              </article>
            </div>
          </div>
        </section>
        <section className="room-extras">
          <h6>dodatki</h6>
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

export default SingleRoomPL;

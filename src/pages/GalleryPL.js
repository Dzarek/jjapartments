import React, { Component } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Title from "../components/Title";

import room1 from "../images/details-1.jpeg";
import room2 from "../images/details-2.jpeg";
import room3 from "../images/details-3.jpeg";
import room4 from "../images/details-4.jpeg";
import img1 from "../images/room-1.jpeg";
import img2 from "../images/room-2.jpeg";
import img3 from "../images/room-3.jpeg";
import img4 from "../images/room-4.jpeg";
import img5 from "../images/room-5.jpeg";
import img6 from "../images/room-6.jpeg";
import img7 from "../images/room-7.jpeg";
import img8 from "../images/room-8.jpeg";
import img9 from "../images/room-9.jpeg";
import img10 from "../images/room-10.jpeg";
import img11 from "../images/room-11.jpeg";
import img12 from "../images/room-12.jpeg";

import rooms1 from "../images/my/rooms1.jpg";
import rooms2 from "../images/my/rooms2.jpg";
import rooms3 from "../images/my/rooms3.jpg";
import rooms4 from "../images/my/rooms4.jpg";
import rooms5 from "../images/my/rooms5.jpeg";
import rooms6 from "../images/my/rooms6.jpg";
import rooms7 from "../images/my/rooms7.jpg";
import rooms8 from "../images/my/rooms8.jpg";
import garden1 from "../images/my/garden1.jpg";
import lobby1 from "../images/my/lobby1.jpg";
import restaurant1 from "../images/my/restaurant1.jpg";
import swimmingPool1 from "../images/my/swimmingPool1.jpg";

const imagesAll = [
  lobby1,
  restaurant1,
  swimmingPool1,
  room1,
  room2,
  room3,
  room4,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  rooms1,
  rooms2,
  rooms3,
  rooms4,
  rooms5,
  rooms6,
  rooms7,
  rooms8,
  garden1,
];

const imagesSingle = [img1, img2, img3, room1, room2, room3, room4];

const imagesDouble = [img4, img5, img6, room1, room2, room3, room4];

const imagesFamily = [
  img7,
  img8,
  img9,
  img10,
  img11,
  room1,
  room2,
  room3,
  room4,
];
const imagesPresidental = [
  img12,
  rooms1,
  rooms2,
  rooms3,
  rooms4,
  rooms5,
  rooms6,
  rooms7,
  rooms8,
];
const imagesOthers = [garden1, lobby1, restaurant1, swimmingPool1];

class GalleryPL extends Component {
  state = {
    all: true,
    single: false,
    double: false,
    family: false,
    presidental: false,
    others: false,
  };

  render() {
    return (
      <div className="galleryPage">
        <div className="titleGallery"></div>
        <Title title="Galeria" />
        <div className="buttonsGallery">
          <button
            onClick={() =>
              this.setState({
                all: true,
                single: false,
                double: false,
                family: false,
                presidental: false,
                others: false,
              })
            }
          >
            Wszystko
          </button>
          <button
            onClick={() =>
              this.setState({
                all: false,
                single: true,
                double: false,
                family: false,
                presidental: false,
                others: false,
              })
            }
          >
            1-osobowe
          </button>
          <button
            onClick={() =>
              this.setState({
                all: false,
                single: false,
                double: true,
                family: false,
                presidental: false,
                others: false,
              })
            }
          >
            2-osobowe
          </button>
          <button
            onClick={() =>
              this.setState({
                all: false,
                single: false,
                double: false,
                family: true,
                presidental: false,
                others: false,
              })
            }
          >
            Rodzinne
          </button>
          <button
            onClick={() =>
              this.setState({
                all: false,
                single: false,
                double: false,
                family: false,
                presidental: true,
                others: false,
              })
            }
          >
            Królewskie
          </button>
          <button
            onClick={() =>
              this.setState({
                all: false,
                single: false,
                double: false,
                family: false,
                presidental: false,
                others: true,
              })
            }
          >
            Inne
          </button>
        </div>
        <SRLWrapper>
          <div className="galleryImg">
            {this.state.all &&
              imagesAll.map((item, index) => {
                return <img key={index} src={item} alt="pokój" />;
              })}
            {this.state.single &&
              imagesSingle.map((item, index) => {
                return <img key={index} src={item} alt="pokój" />;
              })}
            {this.state.double &&
              imagesDouble.map((item, index) => {
                return <img key={index} src={item} alt="pokój" />;
              })}
            {this.state.family &&
              imagesFamily.map((item, index) => {
                return <img key={index} src={item} alt="pokój" />;
              })}
            {this.state.presidental &&
              imagesPresidental.map((item, index) => {
                return <img key={index} src={item} alt="pokój" />;
              })}
            {this.state.others &&
              imagesOthers.map((item, index) => {
                return <img key={index} src={item} alt="pokój" />;
              })}
          </div>
        </SRLWrapper>
      </div>
    );
  }
}
export default GalleryPL;

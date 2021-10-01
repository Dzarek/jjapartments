import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/my/rooms1.jpg";
import PropTypes from "prop-types";

const Room = ({ room }) => {
  const { name, slug, images, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>{price} zł</h6>
          <p>/noc</p>
        </div>
        <Link to={`/pokoje/${slug}`} className="btn-primary room-link">
          Szczegóły
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    img: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Room;

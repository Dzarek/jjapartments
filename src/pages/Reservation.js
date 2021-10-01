import React from "react";

import gif1 from "../images/my/giphy.gif";
import bookingImg from "../images/my/bookingCom.png";

const Reservation = () => {
  return (
    <div className="bookingCom">
      <h1>Redirect to... </h1>
      <img src={gif1} alt="loading" />
      <img src={bookingImg} alt="bookingImg" />
    </div>
  );
};

export default Reservation;

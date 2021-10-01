import React, { Component } from "react";
import Title from "./Title";
import { ImAirplane } from "react-icons/im";
import { FaHiking, FaMapMarkerAlt, FaSwimmer } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

class Services extends Component {
  state = {
    services: [
      {
        icon: <RiMoneyDollarCircleLine />,
        title: "Quality > Price",
        info:
          "The high standard of the apartments goes hand in hand with attractive booking costs. Compare our offer with others!",
      },
      {
        icon: <FaMapMarkerAlt />,
        title: "Location",
        info:
          "A short walk separates our facility from the Old Town. The location in the center of Krakow provides very good communication with the most important points of the city. It allows you to explore the center on foot.",
      },
      {
        icon: <GiMeal />,
        title: "Breakfast - Lunch - Dinner",
        info:
          "Are you hungry? Our kitchen is open 24h/7! We will prepare food like you want.",
      },
      {
        icon: <FaSwimmer />,
        title: "Swimming Pool",
        info:
          "If you are looking for relaxation, we invite you to our swimming pool.",
      },

      {
        icon: <ImAirplane />,
        title: "Airport Shuttle",
        info:
          "Our transfer is a quick, safe and comfortable solution to get from the airport to ours Apartments. Our professional driver will be punctual.",
      },
      {
        icon: <FaHiking />,
        title: "Local Tours",
        info:
          "Organize your stay in Cracow. We will let you know where are the most interesting places and help you to book tickets for them. You can ask us anything about Crakow! We love to help tourists.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services-article">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;

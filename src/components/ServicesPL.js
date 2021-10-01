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
        title: "Jakość > Cena",
        info:
          "Wysoki standard mieszkań idzie w parze z atrakcyjnymi kosztami rezerwacji. Porównaj naszą ofertę z innymi!",
      },
      {
        icon: <FaMapMarkerAlt />,
        title: "Lokalizacja",
        info:
          "Krótki spacer dzieli nasz obiekt od Starego Miasta. Lokalizacja w centrum Krakowa zapewnia bardzo dobrą komunikację z najważniejszymi punktami miasta. Pozwala na zwiedzanie centrum pieszo.",
      },
      {
        icon: <GiMeal />,
        title: "Śniadanie - Obiad - Kolacja",
        info:
          "Czy jesteś głodny? Nasza kuchnia jest otwarta 24h / 7! Przygotujemy jedzenie tak, jak chcesz.",
      },
      {
        icon: <FaSwimmer />,
        title: "Basen",
        info: "Jeśli szukasz relaksu, zapraszamy na nasz basen.",
      },

      {
        icon: <ImAirplane />,
        title: "Transfer z lotniska",
        info:
          "Nasz transfer to szybkie, bezpieczne i wygodne rozwiązanie, aby dostać się z lotniska do naszych Apartamentów. Nasz profesjonalny kierowca będzie punktualny.",
      },
      {
        icon: <FaHiking />,
        title: "Lokalne Wycieczki",
        info:
          "Zorganizuj swój pobyt w Krakowie. Poinformujemy Cię, gdzie są najciekawsze miejsca i pomożemy zarezerwować do nich bilety. Możesz zapytać nas o wszystko o Kraków! Uwielbiamy pomagać turystom.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="usługi" />
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

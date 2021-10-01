import React from "react";
import Banner from "../components/Banner";
import { MdKeyboardArrowDown } from "react-icons/md";

import cracowImg1 from "../images/my/cracowImg1.jpg";
import cracowImg2 from "../images/my/cracowImg2.jpg";
import cracowImg3 from "../images/my/cracowImg3.jpg";

const CracowPL = () => {
  return (
    <>
      <div className="cracowHeader">
        <Banner title="Kraków" subtitle="Miasto Polskich Królów">
          <MdKeyboardArrowDown className="arrowDown" />
        </Banner>
      </div>
      <div className="cracowInfo">
        <section>
          <img src={cracowImg3} alt="cracowImg1" />
          <span>
            <h3>O mieście</h3>
            <p>
              Jedno z najstarszych miast w kraju, siedziba i nekropolia polskich
              władców, niezmiennie ważny przez wieki ośrodek kultura, nauka i
              sztuka - Kraków przyciąga rzesze turystów kraju iz całego świata.
              Odkrywa niezwykła historia niezwykłego państwa i narodu. To
              pozwala poczuć splendor czasów królewskich. Zaskakuje nowoczesność
              oraz bogata oferta biznesowa i turystyczna.{" "}
            </p>
          </span>
        </section>
        <section>
          <span>
            <h3>Musisz zobaczyć w Krakowie</h3>
            <p>
              Od średniowiecza centrum życia mieszkańców Krakowa był na Wawelu.
              To jest u podnóża wzgórza, na którym królewska zamek znajduje się
              na tym, że rozciąga się Stare Miasto. Ten ogromny plac zadziwia
              swoim ogromnym rozmiarem i kształtem niezmienionym od XIII
              stulecie. Znajduje się tu również Kościół Mariacki, Sukiennice
              zabytkowe budynki Uniwersytetu Krakowskiego.{" "}
            </p>
          </span>
          <img src={cracowImg1} alt="cracowImg2" />
        </section>
        <section>
          <img src={cracowImg2} alt="cracowImg3" />
          <span>
            <h3>Dzielnica Żydowska</h3>
            <p>
              Niedaleko Starego Miasta, w centrum Krakowa, znajduje się stara
              dzielnica - Kazimierz, dawniej małe miasteczko. Przesiedlenie
              ludność żydowska na tych terenach w XV wieku odrodziła miasto.
              Rozwijając się wraz z rozwojem samego Krakowa, wkrótce stała się
              jego dzielnicą. Dziś - spacerując po zabytkowym ulice - wciąż
              można zobaczyć wiele zabytków, m.in. liczne synagogi, cmentarze,
              Wielki Mikveh i drób rzeźnia. Podczas pobytu w Krakowie warto go
              odwiedzić tej dzielnicy, a jeszcze ciekawsze znalezienie noclegu
              tutaj.
            </p>
          </span>
        </section>
      </div>
    </>
  );
};

export default CracowPL;

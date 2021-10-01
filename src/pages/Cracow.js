import React from "react";
import Banner from "../components/Banner";
import { MdKeyboardArrowDown } from "react-icons/md";

import cracowImg1 from "../images/my/cracowImg1.jpg";
import cracowImg2 from "../images/my/cracowImg2.jpg";
import cracowImg3 from "../images/my/cracowImg3.jpg";

const Cracow = () => {
  return (
    <>
      <div className="cracowHeader">
        <Banner title="Cracow" subtitle="the city of Polish kings">
          <MdKeyboardArrowDown className="arrowDown" />
        </Banner>
      </div>
      <div className="cracowInfo">
        <section>
          <img src={cracowImg3} alt="cracowImg1" />
          <span>
            <h3>About City</h3>
            <p>
              One of the oldest cities in the country, the seat and necropolis
              of Polish rulers, invariably important for centuries center of
              culture, science and art - Krakow attracts crowds of tourists from
              the country and from around the world. He discovers the
              extraordinary history of an extraordinary state and nation. It
              allows you to feel the splendor of royal times. It surprises with
              modernity and a rich business and tourist offer.{" "}
            </p>
          </span>
        </section>
        <section>
          <span>
            <h3>Must See of Cracow</h3>
            <p>
              Since the Middle Ages, the center of life of Krakow's inhabitants
              has been at Wawel. It is at the foot of the hill where the royal
              castle is located that the Old Town stretches. This vast square
              amazes with its huge size and shape unchanged since the 13th
              century. There are St. Mary's Basilica, the Cloth Hall, as well as
              the historic buildings of the University of Krakow.{" "}
            </p>
          </span>
          <img src={cracowImg1} alt="cracowImg2" />
        </section>
        <section>
          <img src={cracowImg2} alt="cracowImg3" />
          <span>
            <h3>Jewish quarter</h3>
            <p>
              Near the Old Town, in the center of Krakow, there is the old
              district - Kazimierz, formerly a small town. The resettlement of
              the Jewish population to this area in the 15th century revived the
              town. Growing along with the development of Krakow itself, it soon
              became its district. Today - while walking along the historic
              streets - you can still see many relics of history, including
              numerous synagogues, cemeteries, the Great Mikveh, and a poultry
              slaughterhouse. During your stay in Krakow, it is worth visiting
              this district, and even more interesting finding accommodation
              here.
            </p>
          </span>
        </section>
        {/* <section>
          <span>
            <h3></h3>
            <p></p>
          </span>
          <img src="" alt="" />
        </section> */}
      </div>
    </>
  );
};

export default Cracow;

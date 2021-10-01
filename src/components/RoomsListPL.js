import React from "react";
import RoomPL from "./RoomPL";

const RoomsListPL = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>niestety, nie udało się znaleźć pokoju</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item) => {
          return <RoomPL key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomsListPL;

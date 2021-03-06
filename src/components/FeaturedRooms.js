import React, { useContext } from "react";
import { RoomContext } from "../RoomContext";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

const FeaturedRooms = () => {
  let { loading, featuredRooms: rooms } = useContext(RoomContext);

  rooms = rooms.map(room => {
    return <Room key={room.id} room={room} />;
  });

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
    </section>
  );
};

export default FeaturedRooms;

import React, { useContext } from "react";
import Title from "./Title";
import { RoomContext } from "../RoomContext";

const RoomFilter = ({ rooms }) => {
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = useContext(RoomContext);

  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  types = types.map((item, i) => {
    return (
      <option value={item} key={i}>
        {item.toUpperCase()}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
      </form>
    </section>
  );
};

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default RoomFilter;

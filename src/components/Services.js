import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

const Services = () => {
  const services = [
    {
      icon: <FaCocktail />,
      title: "free cocktails",
      info:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsum earum aut odit illum repellat error cum dolore similique!"
    },
    {
      icon: <FaHiking />,
      title: "endless hiking",
      info:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsum earum aut odit illum repellat error cum dolore similique!"
    },
    {
      icon: <FaShuttleVan />,
      title: "free shuttle",
      info:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsum earum aut odit illum repellat error cum dolore similique!"
    },
    {
      icon: <FaBeer />,
      title: "strongest beer",
      info:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsum earum aut odit illum repellat error cum dolore similique!"
    }
  ];

  return (
    <section className="services">
      <Title title="our services" />
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

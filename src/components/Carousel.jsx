import React from "react";
import { Carousel } from "react-bootstrap";
import academia1 from "../assets/academia1.jpg";
import academia2 from "../assets/academia2.jpg";
import academia3 from "../assets/academia3.jpg";

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="carousel-item-img"
          src={academia1}
          alt="Primeira imagem"
        />
        <Carousel.Caption>
          <h3>Primeiro Slide</h3>
          <p>Texto explicativo do primeiro slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel-item-img"
          src={academia2}
          alt="Segunda imagem"
        />
        <Carousel.Caption>
          <h3>Segundo Slide</h3>
          <p>Texto explicativo do segundo slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel-item-img"
          src={academia3}
          alt="Terceira imagem"
        />
        <Carousel.Caption>
          <h3>Terceiro Slide</h3>
          <p>Texto explicativo do terceiro slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;

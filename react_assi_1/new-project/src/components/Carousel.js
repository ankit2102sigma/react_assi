import React from "react";
import { Carousel } from "react-bootstrap";

function AppCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="76.jpeg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="12.webp"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="67.webp"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default AppCarousel;

//https://www.npmjs.com/package/nuka-carousel

import React, { useImperativeHandle, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import NukaCarousel from "nuka-carousel";
import { Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./carousel.scss";
import CategoryCard from "../categoryCard/CategoryCard";
const Carousel = ({ listCategory }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const items = [...listCategory];

  function getResponsiveNumberItems() {
    const size = window.innerWidth;
    switch (true) {
      case size < 700:
        return 3;
      case size < 1224:
        return 4;
      case 1224 < size:
        return 7;
    }
  }

  const numberItemsInSlide = getResponsiveNumberItems();
  const numberOfSlide = Math.ceil(items.length / numberItemsInSlide);
  let slider = [];
  const createSlider = () => {
    while (items.length != 0) slider.push(items.splice(0, numberItemsInSlide));
  };

  createSlider();

  return (
    <div className="carousel--container">
      <NukaCarousel
        style={{
          padding: "0 4rem",
          borderRadius: "5px",
          width:'100%',
          // background: 'none'
        }}
        // width="100%"
        // height="100%"
        slidesToShow={1}
        autoplay={false}
        dragging={false}
        renderBottomCenterControls={false}
        slideIndex={slideIndex}
        afterSlide={(slideIndex) => setSlideIndex(slideIndex)}
        renderCenterLeftControls={({ previousSlide }) =>
          slideIndex ? (
            <Button onClick={previousSlide} style={{color: '#08183c'}}>
              <ArrowBackIos style={{fontSize: '30px'}}/>
            </Button>
          ) : (
            <Button onClick={previousSlide} disabled>
              <ArrowBackIos style={{fontSize: '30px'}}/>
            </Button>
          )
        }
        renderCenterRightControls={({ nextSlide }) =>
          slideIndex == numberOfSlide - 1 ? (
            <Button className="btn-right" onClick={nextSlide} disabled>
              <ArrowForwardIos style={{fontSize: '30px'}} />
            </Button>
          ) : (
            <Button className="btn-right" onClick={nextSlide} style={{color: '#08183c'}}>
              <ArrowForwardIos style={{fontSize: '30px'}}/>
            </Button>
          )
        }
      >
        {slider.map((items) => (
          <div className="slide">
            {items.map((dataTour) => (
              <CategoryCard dataTour={dataTour} />
            ))}
          </div>
        ))}
      </NukaCarousel>
    </div>
  );
};

export default Carousel;

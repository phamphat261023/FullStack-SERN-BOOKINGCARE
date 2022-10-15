import React, { Component } from "react";
import HomeHeader from "./Header/HomeHeader";
import Banner from "./Header/Banner";
import MainSection from "./Section/Section1";
import Specialty from "./Section/Section2";
import MedicalFacility from "./Section/Section3";
import SpecialDoctor from "./Section/Section4";
import HandBook from "./Section/Section5";
import About from "./Footer/About";
import Footer from "./Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <>
        <div>
          <HomeHeader />
          <Banner />
          <MainSection />
          <Specialty settings={settings} />
          <MedicalFacility settings={settings} />
          <SpecialDoctor settings={settings} />
          <HandBook settings={settings} />
          <About />
          <Footer />
        </div>
      </>
    );
  }
}

export default HomePage;

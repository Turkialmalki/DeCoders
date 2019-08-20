import React, { Component } from "react";
import "../App.css";
import Hero from "./Hero";
import Package from "./Package";
import MainCarousel from "./Carousel";
import Footer from "./Footer";
import Video from './Video';
class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <MainCarousel />
        <Package />
        <Video />
        <Footer />
       
      </div>
    );
  }
}

export default Home;

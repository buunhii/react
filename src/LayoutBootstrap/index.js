import React, { Component } from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import ProductList from "./ProductList";

export default class LayoutBootstrap extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Carousel></Carousel>
        <ProductList></ProductList>
        <Footer />
      </div>
    );
  }
}

import React from "react";
import landingImage from "../src/assets/landing-image.jpg";
import "../src/Home.css";
import Product from "./Product";
import Product1Img from "../src/assets/Product1.jpg";
import Product2Img from "../src/assets/Product2.jpg";
import Login from "./Login";

const Home = () => {
  return (
    <>
      {" "}
      <div className="home">
        <img src={landingImage} alt="Landing Image" />

        <div style={{ display: "flex" }}>
          {" "}
          <Product
            id="1"
            title="Example Product 1"
            image={Product1Img}
            price={9.99}
            rating={4}
          />
          <Product
            id="2"
            title="Example Product 2"
            image={Product2Img}
            price={19.99}
            rating={3}
          />
        </div>
      </div>
      {/* <Login /> */}
    </>
  );
};

export default Home;

import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src="images/home.jpg" alt="" className="home__image" />
        <div className="home__row">
          <Product
            title="lean startup"
            price={29.33}
            image='https://images-eu.ssl-images-amazon.com/images/I/41jJOGDStyL._AC_SX184_.jpg'
            rating={5}
          />
          <Product
            title="lean startup"
            price={29.33}
            image='https://images-eu.ssl-images-amazon.com/images/I/41TvI1T+UPL._AC_SX184_.jpg'
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="lean startup"
            price={29.33}
            image="https://images-eu.ssl-images-amazon.com/images/I/310SFmsC9RL._AC_SX184_.jpg"
            rating={5}
          />
          <Product
            title="lean startup"
            price={29.33}
            image="https://images-eu.ssl-images-amazon.com/images/I/41w3+eO6BuL._AC_SX184_.jpg"
            rating={5}
          />
          <Product
            title="lean startup"
            price={29.33}
            image="https://images-eu.ssl-images-amazon.com/images/I/51lUOfAUQ5L._AC_SX184_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="lean startup"
            price={29.33}
            image="https://images-eu.ssl-images-amazon.com/images/I/31JPZAFX5bL._AC_SX184_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

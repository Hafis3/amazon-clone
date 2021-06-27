import React from "react";
import Subtotal from "./Subtotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../StateProvider";
import "./Checkout.css";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="images/banner.jpg" alt="" className="checkOut__ad" />
        <div>
          <h3>Hellow , {user?.email} </h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

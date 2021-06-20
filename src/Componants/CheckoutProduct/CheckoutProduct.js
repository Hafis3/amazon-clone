import React from "react";
import GradeIcon from "@material-ui/icons/Grade";
import {useStateValue} from '../../StateProvider'
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }) {

  const [{basket},dispatch] = useStateValue();

  const removeFromBasket=()=>{
      dispatch({
        type:'REMOVE_FROM_BASKET',
        Id:id,
      });
  }

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <GradeIcon />
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

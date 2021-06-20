import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import {getBasketTotal} from '../../reducer';

function Subtotal() {
  const [{ basket }] = useStateValue();
  let subTotal = basket?.reduce((sum,basket)=> sum+= basket.price,0)
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              this order contain gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"Rs."}
      />
      <button> Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

import React from 'react';
import "./Subtotal.css";
import Currencyformat from "react-currency-format";

function Subtotal() {
    return (
        <div className="subtotal">
            <Currencyformat
            renderText={(value) => (
                <>
                <p>
                    Subtotal (0 items): <strong>0</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
        </div>
    )
}

export default Subtotal

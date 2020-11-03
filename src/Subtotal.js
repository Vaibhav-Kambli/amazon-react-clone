import React, { useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
	const history = useHistory();
	const [{ cart, user }] = useStateValue();
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({cart.length} items) : <strong>{value} </strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getCartTotal(cart)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<button
				disabled={cart.length === 0 || !user}
				onClick={(e) => history.push("/payment")}
			>
				Proceed to Checkout
			</button>
			<span>
				{cart.length === 0 ? <p>Add items to proceed</p> : " "}
				{!user ? <p>Sign in to continue</p> : " "}
			</span>
		</div>
	);
}

export default Subtotal;

import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-na.ssl-images-amazon.com/images/G/15/Events/2020/Dash/updated_Q4_2020_HolidayDash_LandingPage_Desktop_Hero_1500x150.png"
					alt=""
				></img>

				<div>
					<h2 className="checkout__title"> Your shopping cart</h2>
				</div>
			</div>

			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;

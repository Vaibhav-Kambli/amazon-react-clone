import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
	const [{ cart, user }] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-na.ssl-images-amazon.com/images/G/15/Events/2020/Dash/updated_Q4_2020_HolidayDash_LandingPage_Desktop_Hero_1500x150.png"
					alt=""
				></img>

				<div>
					<h3>Hello, {user?.email}</h3>

					<h2 className="checkout__title">
						Your shopping cart
						{<span> {cart.length === 0 ? <h3> is Empty</h3> : " "}</span>}
					</h2>

					{cart.map((item) => (
						<CheckoutProduct
							id={item.id}
							title={item.title}
							image={item.image}
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

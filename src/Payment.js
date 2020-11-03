import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { getCartTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
	const history = useHistory();

	const [{ cart, user }, dispatch] = useStateValue();
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [clientSecret, setClientSecret] = useState(true);

	const stripe = useStripe();
	const elements = useElements();

	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: "post",
				url: `/payments/create?total=${getCartTotal(cart) * 100}`,
			});
			setClientSecret(response.data.clientSecret);
		};

		getClientSecret();
	}, [cart]);

	//console.log("Client secret key is >>", clientSecret);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);

		// Stripe functionality

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				db.collection("users")
					.doc(user?.uid)
					.collection("orders")
					.doc(paymentIntent.id)
					.set({
						cart: cart,
						amount: paymentIntent.amount,
						created: paymentIntent.created,
					});

				setSucceeded(true);
				setError(null);
				setProcessing(false);

				dispatch({
					type: "EMPTY_CART",
				});

				history.replace("/orders");
			});
	};

	const handleChange = (e) => {
		// Change listener for card and display error if any
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	};

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (<Link to="/checkout">{cart?.length} items</Link>)
				</h1>

				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery address</h3>
					</div>

					<div className="payment__address">
						<p>{user?.email}</p>
						<p>621 Brock Lane</p>
						<p>Los Angeles, CA</p>
					</div>

					{/** Address */}
				</div>

				<div className="payment__section">
					{/**Review */}
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__items">
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

				<div className="payment__section">
					{/**Payment method */}
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">
						{/** Stripe functionality*/}

						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />

							<div classname="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => (
										<>
											<h3>Order Total: {value}</h3>
										</>
									)}
									decimalScale={2}
									value={getCartTotal(cart)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>

								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
								</button>
							</div>

							{/**Fail safe error handling */}
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;

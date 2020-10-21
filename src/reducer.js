export const initialState = {
	cart: [],
	price: "",
};

const reducer = (state, action) => {
	console.log(state, action);
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				cart: [...state.cart, action.item],
				price: [(state.price = state.price + action.item.price)],
			};

		default:
			return state;
	}
};

export default reducer;

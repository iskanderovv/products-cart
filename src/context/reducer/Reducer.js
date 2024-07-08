export const initialState = {
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CART_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.product],
      };
    case "REMOVE_CART":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.product.id
        ),
      };
    default:
      return state;
  }
};

export default reducer;

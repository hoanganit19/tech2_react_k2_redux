const initialState = {
  productList: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "product/fetch":
      return { ...state, productList: state.productList };

    default:
      return { state };
  }
};

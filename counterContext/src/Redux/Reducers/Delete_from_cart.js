const initialstate = {products: []};
const Delete = (state = initialstate, action) => {
  switch (action.type) {
      case"Delete_from_cart":
      let index = state.products.indexOf(action.payload);
      state.products.splice(index, 1)
      state.products = [...state.products]
      return{
          products:[...state.products],

      }
    default:
      return state;
  }
};
export default Delete;

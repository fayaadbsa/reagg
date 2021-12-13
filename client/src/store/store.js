import { createStore } from "redux";

// Initial
const initialState = {
  count: 0,
};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.num };
    default:
      return state;
  }
}

// Store
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

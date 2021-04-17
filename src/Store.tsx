import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CharacterReducer from "./reducers/CharacterReducer";

const Store = createStore(CharacterReducer, composeWithDevTools());

export default Store;

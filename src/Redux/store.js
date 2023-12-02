import { createStore ,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk"
import { productReducer } from "./ProductReducer";
import { CartReducer } from "./CartReducer";
import { WishlistReducer } from "./WishlistReducer";

const rootReducer=combineReducers({
productReducer,
CartReducer,
WishlistReducer,
})
export const store= createStore(rootReducer,applyMiddleware(thunk))
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import AdminAuthReducer from "./adminAuth/reducer"
const rootReducer = combineReducers(
    {
        adminAuth: AdminAuthReducer,
    }
);
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(ReduxThunk));
};

export default configureStore;
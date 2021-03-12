import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import songs from '../state/reducers/songs'

// Create Store.
const Store = () => {
    const store = createStore(
        combineReducers({songs}),
        applyMiddleware(thunk)
    );

    return store
};

export default Store;
import {ProductReducers} from './product-reducers'
import {combineReducers} from 'redux';


let combinedPReducers = combineReducers({
    products: ProductReducers.loadProducts,
    isLoading: ProductReducers.isLoading,
    errorOccurred: ProductReducers.errorOccurred
});

export {
    combinedPReducers
};


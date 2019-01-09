import { ProductActionTypes } from "../action-types/product-action-types";

const ProductActionCreator = {
    loadProducts: (products = []) => {
        return {
            type: ProductActionTypes.LOAD_PRODUCTS,
            products
        };
    },
    isLoading: (loadingFlag) => {
        return {
            type: ProductActionTypes.IS_LOADING,
            isLoading: loadingFlag
        };
    },
    errorOccurred: (errorFlag) => {
        return {
            type: ProductActionTypes.ERROR_OCCURRED,
            errorOccurred: errorFlag
        };
    },
    getProductById: (products = []) => {
        return {
            type: ProductActionTypes.GET_PRODUCT_BY_ID,
            products
        };
    },
    addProduct : (products = []) =>{
        return {
            type: ProductActionTypes.ADD_PRODUCT,
            products
        }
    }
};

export {
    ProductActionCreator
};

import { ActionTypes } from "../constants/actionTypes"


export const setProducts =  (products)=>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}


export const selectedProducts = (selectedItem)=>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: selectedItem
    }
}
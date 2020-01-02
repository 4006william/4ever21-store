import { combineReducers } from 'redux'

const user = (state = null) => state

const products = (state = [], action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            return [ ...state, action.value ]
        case 'REMOVE_PRODUCT':
            const products = [ ...state ]
            products.splice(action.value, 1)
            return products
        default:
            return state
    }
}

const cartProducts = (state = [], action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            return [ ...state, action.value ]
        case 'REMOVE_PRODUCT':
            const cartProducts = [ ...state ]
            cartProducts.splice(action.value, 1)
            return cartProducts
        default:
            return state
    }
}

export default combineReducers({ user, products, cartProducts})
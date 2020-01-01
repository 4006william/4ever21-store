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

const makes = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_MAKES':
            return [...state, ...action.value]
        case 'DELETE_MAKE':
            const make = [ ...state ]
            make.splice(action.value, 1)
            return make
        default:
            return state
    }
}

export default combineReducers({ user, products, makes })
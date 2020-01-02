
export const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        value: product
    }
}

export const removeProduct = (index) => {
    return {
        type: 'REMOVE_PRODUCT',
        value: index
    }
}



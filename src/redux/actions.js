// const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

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
export const deleteMake = (index) => {
    return {
        type: 'DELETE_MAKE',
        value: index
    }
}

export const fetchMakes = () => {
    return (dispatch) => {
        fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json")
            .then(res => res.json())
            .then(response => {
                const action = {
                    type: 'FETCH_MAKES',
                    value: response.Results
                }
                dispatch(action)
            })
    }
}


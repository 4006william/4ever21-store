import { connect } from 'react-redux'
import AddToCart from '../components/AddToCart'
import { removeProduct, addProduct } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        cartProducts: state.cartProducts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeProduct: (index) => dispatch(removeProduct(index)),
        addProduct: (product) => dispatch(addProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart)
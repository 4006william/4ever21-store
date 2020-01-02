import { connect } from 'react-redux'
import Product from '../components/Product'

const mapStateToProps = (state) => {
    return {
        products: state.products,
        cartProducts: state.cartProducts
    }
}

export default connect(mapStateToProps)(Product)

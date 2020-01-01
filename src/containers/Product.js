import { connect } from 'react-redux'
import Product from '../components/Product'

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Product)

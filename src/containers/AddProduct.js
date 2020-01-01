import { connect } from 'react-redux'
import AddProduct from '../components/AddProduct'
import { addProduct } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (product) => dispatch(addProduct(product))
    }
}

export default connect(null, mapDispatchToProps)(AddProduct)

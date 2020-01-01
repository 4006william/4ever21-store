import { connect } from 'react-redux'
import AddItem from '../components/AddItem'
import { removeProduct } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeProduct: (index) => dispatch(removeProduct(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)
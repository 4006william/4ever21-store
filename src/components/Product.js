import React from 'react'
import { Container, Paper } from '@material-ui/core';
import Navigation from './Navigation'


const Product = (props) => {
    const id = props.match.params.id
    const product = props.products.find(c => c.id == id)
    const cartProducts = props.cartProducts
    const addCart = () => {
        cartProducts.push(product)
        // console.log(cartProducts)
    }

    return (
        <div>
            <Navigation />
            <Container maxWidth="sm" className="product-container">
                <Paper className="product-paper" style={{ background: 'coral', color: 'white' }}>
                    <h2>{product.name}</h2>
                    <img src={product.image_link} />
                    <h4>Brand: {product.brand}</h4>
                    <h4>{product.price_sign} {product.price}</h4>
                    <p>Description: <br />{product.description}</p>
                    <hr></hr>
                    <button style={{ background: 'white', color: 'coral', fontWeight: 'bolder' }} onClick={addCart}>Add to Cart</button>
                </Paper>
            </Container>
        </div>
    )
}

export default Product
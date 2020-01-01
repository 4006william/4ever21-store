import React from 'react'
import { Container, Paper } from '@material-ui/core';
import Navigation from './Navigation'


const Product = (props) => {
    const id = props.match.params.id
    const product = props.products.find(c => c.id == id)

    return (
        <div>
            <Navigation />
            <Container maxWidth="sm" className="product-container">
                <Paper className="product-paper" style={{ background: 'coral', color: 'white' }}>
                    <h2>{product.name}</h2>
                    <img src={product.image_link} />
                    <h4>Brand: {product.brand}</h4>
                    <p>Description: <br />{product.description}</p>
                    <hr></hr>
                    <a style={{ background: 'white', color: 'coral', fontWeight: 'bolder' }} href={product.product_link} target="blank">BUY NOW!</a>
                </Paper>
            </Container>
        </div>
    )
}

export default Product
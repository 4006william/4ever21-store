import React from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import Navigation from './Navigation'
 
const AddToCart = (props) => {
    const total = props.cartProducts.reduce((a,c)=> (a+c.price*c.quantity), 0)

    return (
        <div>
            <Navigation />
            <Container maxWidth="lg" className="product-container text-gray">
                <h3>Shopping Cart</h3>
                <p style={{ float: 'right', fontWeight: 'bolder', color: 'coral', textDecoration: 'underline'}}>
                     <Link to="/receipt">Checkout: ${total}</Link> 
                 </p>
                <Table>
                    <TableHead className="list-body">
                        <TableRow>
                            <TableCell><h4>Product</h4></TableCell>
                            <TableCell><h4>Price</h4></TableCell>
                            <TableCell><h4>Quantity</h4></TableCell>
                            <TableCell><h4>Total</h4></TableCell>
                            <TableCell><h4>Remove</h4></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.cartProducts.map((cartProduct, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{cartProduct["name"]}</TableCell>
                            <TableCell>{cartProduct["price_sign"]}{cartProduct["price"]}</TableCell>
                            <TableCell>
                                {cartProduct["quantity"]}
                            </TableCell>
                            <TableCell>{cartProduct["price"] * cartProduct["quantity"]}</TableCell>
                            <TableCell>
                                <DeleteIcon
                                    onClick={() => props.removeProduct(idx)}
                                    className="icon text-red" />
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </Container>
        </div>
    )
}

export default AddToCart
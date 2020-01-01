import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import AddProduct from '../containers/AddProduct'
import Navigation from './Navigation'
 
const AddItem = (props) => {
    return (
        <div>
            <Navigation />
            <Container maxWidth="lg" className="product-container text-gray">
                <h4>Expand the catalogue!</h4>
                <div className="flex-container text-gray">
                    <AddProduct />
                </div>
                <Table>
                    <TableHead className="list-body">
                        <TableRow>
                            <TableCell><h4>Product</h4></TableCell>
                            <TableCell><h4>Brand</h4></TableCell>
                            <TableCell><h4>Description</h4></TableCell>
                            <TableCell><h4>Delete</h4></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.products.map((product, idx) => (
                        <TableRow key={product.id}>
                            <TableCell>{product["name"]}</TableCell>
                            <TableCell>{product["brand"]}</TableCell>
                            <TableCell>{product["description"]}</TableCell>
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

export default AddItem
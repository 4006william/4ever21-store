import React from 'react'
import Navigation from '../components/Navigation'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div className="card-container">
            <Navigation />
            {props.products.map((product, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <h4>{product.name.toUpperCase()}</h4>
                        <ul>
                        <img src={product["image_link"]} />
                        <h3>{product["price_sign"]}{product["price"]}</h3>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions className="details" style={{ color: 'white' }}>
                        <Link to={`/product/${product.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {

    const product = props.products.filter(product => {
        return product.name === props.routeProps.match.params.name
    })

    return (
        <div id="product">
            <h3>{product[0].name}</h3>
            <p>{product[0].description}</p>
            <p>{product[0].price}</p>
            <Link to="/Products" >Powrót do listy produktów</Link >
        </div>
    );
}

export default Product;
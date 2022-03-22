import React from 'react'
import { Link } from 'react-router-dom'

const Products = (props) => {
    const productsList = props.products.map(product => {
        return <li key={product.id}><Link exact to={`Products/${product.name}`}>{product.name}</Link></li>
    })

    return (
        <div id="productsList">
            <h2>Zobacz nasze produkty</h2>
            <ul>
                {productsList}
            </ul>
        </div>
    );
}

export default Products;
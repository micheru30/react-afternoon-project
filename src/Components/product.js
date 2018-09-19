import React from 'react';
import PropTypes from 'prop-types';

function Product(props) {
    const { item, addToCart } = props;
    return (
        <div className='product'>
            <img src={item.image} />
            <div className='product-info'>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <button onClick={() => { props.addToCart(item) }}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;
Product.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
    })
}
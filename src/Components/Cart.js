import React from 'react';
import PropTypes from 'prop-types';

function CartItem(props){
    const {item} = props;
    return(
        <div className='product'>
              <img src={item.image} />
              <div className='product-info'>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </div>
            </div>
    )
}

export default CartItem;
CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
    })
}
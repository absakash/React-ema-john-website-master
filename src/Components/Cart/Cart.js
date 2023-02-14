import React from 'react';

const Cart = (props) => {
    const { pushCart } = props;
    return (
        <div>
            <h2>Order Area </h2>
            <h4>Order Items:{pushCart.length}</h4>
        </div>
    );
};

export default Cart;
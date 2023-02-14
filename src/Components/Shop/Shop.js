import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const addToOrderContainer = (products) => {
        console.log("products");
        const newCart = [...cart, products];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='shop'>


                {
                    products.map(product => <Product
                        key={product.id}
                        productContainer={product}
                        pushToOrder={addToOrderContainer}

                    ></Product>)
                }
            </div>
            <div className='order-area'>
                <Cart
                    pushCart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;
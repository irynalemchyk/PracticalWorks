import React, { Component } from 'react';
import DisplayItemsCart from './DisplayItemsCart';

export default class ShoppingCart extends Component {
    render() {
        const { cartItems, handleRemoveFromCart } = this.props;
        return (
            <>
                <div className='shop-cart'>
                    <h3 style={{ fontSize: 'calc(1.1rem + 0.6vw)', paddingLeft: '10px', paddingTop: '5px' }}>Shopping Cart</h3>
                    <ul style={{ overflowY: 'auto', maxHeight: '300px', padding: '10px' }}>
                        {cartItems.map((item, index) => (
                            <li key={index} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>
                                <DisplayItemsCart item={item} index={index} handleRemoveFromCart={handleRemoveFromCart} />
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );
    }
}

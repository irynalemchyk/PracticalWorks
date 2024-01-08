import React, { Component } from 'react';

export default class DisplayItemsCart extends Component {
    render() {
        const { item, index, handleRemoveFromCart } = this.props;

        return (
            <>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={item.imageSrc} alt={item.title} style={{ width: '50px', marginRight: '10px' }} />
                        <div>
                            <p style={{ margin: 0 }}>{item.title}</p>
                            <p style={{ margin: 0, color: '#888' }}>{item.desc}</p>
                            <p style={{ margin: 0, fontWeight: 'bold' }}>{item.price}</p>
                        </div>
                    </div>
                    <button 
                        className='remove'
                        onClick={() => handleRemoveFromCart(index)}
                    >
                        Remove
                    </button>
                </div>
            </>
        );
    }
}


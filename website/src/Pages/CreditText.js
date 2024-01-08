import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class CreditText extends Component {
    render() {
        return (
            <>
                <Container>
                    <h2 className='mt-5 mb-2' style={{ color: "#198754" }}>INSTALMENT CREDIT</h2>
                    <hr/>
                    <h4 className='mt-2 mb-3'>General information on lending terms and conditions</h4>
                    <h3 className='mt-4 mb-4' style={{ color: "#198754" }}>Forming a loan in Montenegro is easy!</h3>
                    <span>
                    <p className='mb-3'>1. Add the products you are interested in to your cart.</p>
                    <p className='mb-3'>2. During checkout, in the payment method section, select "Payment by installments and installments". Complete the order.</p>
                    <p className='mb-3'>3. Expect a call from our operator to clarify the details.</p>
                    <p className='mb-3'>4. Make a payment according to the selected loan program. </p>
                    <p className='mb-4'>5. Pick up the goods in the store or by courier service.</p>
                    <p className='mb-5'>Our credit programs allow you to purchase goods and pay for them in installments (payments) rather than in full at once, which makes shopping more convenient. Our credit program is also available in our physical stores in Kyiv, Lviv, Odesa and Dnipro.</p>
                    </span>
                </Container>
            </>
        );
    }
}
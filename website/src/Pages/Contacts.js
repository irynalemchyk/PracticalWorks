import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default class Contacts extends Component {
    render() {
        return (
            <Container className='mt-4'>
                <h1 className='text-center mb-4' style={{ color: "#198754" }}>Do you have any questions?</h1>
                <Form>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label className='mb-2' style={{ color: "#198754" }}>Email address</Form.Label>
                        <Form.Control className='mb-2' type='email' placeholder='Enter your email' />
                        <Form.Text>We do not spam 😊</Form.Text>
                    </Form.Group>

                    <Form.Group controlId='formBasicPassword'>
                        <Form.Label className='mt-2' style={{ color: "#198754" }}>Your questions:</Form.Label>
                        <Form.Control as='textarea' rows='4' />
                    </Form.Group>

                    <Form.Group controlId='formBasicCheckbox'>
                        <Form.Check
                            className='mt-2'
                            type='checkbox'
                            label='Check me out'
                            style={{ color: "#198754" }}
                        />
                        <Form.Text>We will contact you after receiving your message.</Form.Text>
                    </Form.Group>

                    <div className="d-flex justify-content-end">
                        <Button variant='success' type='submit' className='mb-3'>
                            Submit
                        </Button>
                    </div>
                </Form>
            </Container>
        );
    }
}

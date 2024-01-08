import React, { Component } from 'react';
import { Container, Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col } from 'react-bootstrap';

export default class BackpacksCard extends Component {

    render() {
        const { addToCart } = this.props;

        const products = [
            { id: 1, imageSrc: './imgbox/backpack1.jpg', title: 'Backpack Terra Incognita 60', desc: 'Some text about the backpack.', category: 'backpacks', price: '59.99' },
            { id: 2, imageSrc: './imgbox/backpack2.jpg', title: 'Backpack Terra Incognita 60', desc: 'Some text about the backpack.', category: 'backpacks', price: '79.99' },
            { id: 3, imageSrc: './imgbox/backpack6.jpg', title: 'Backpack Terra Incognita 60', desc: 'Some text about the backpack.', category: 'backpacks', price: '89.99' },
            { id: 4, imageSrc: './imgbox/backpack3.jpg', title: 'Backpack Terra Incognita 60', desc: 'Some text about the backpack.', category: 'backpacks', price: '49.99' },
            { id: 5, imageSrc: './imgbox/backpack4.jpg', title: 'Backpack Terra Incognita 60', desc: 'Some text about the backpack.', category: 'backpacks', price: '69.99' },
            { id: 6, imageSrc: './imgbox/backpack1.jpg', title: 'Backpack Terra Incognita 60', desc: 'Some text about the backpack.', category: 'backpacks', price: '99.99' },
            { id: 7, imageSrc: './imgbox/backpack6.jpg', title: 'Backpack Terra Incognita 60', desc: 'Some text about the backpack.', category: 'backpacks', price: '59.99' },
            { id: 8, imageSrc: './imgbox/backpack2.jpg', title: 'Backpack Terra Incognita 60', desc: 'Some text about the backpack.', category: 'backpacks', price: '79.99' },
            { id: 9, imageSrc: './imgbox/backpack6.jpg', title: 'Backpack Terra Incognita 60', desc: 'Some text about the backpack.', category: 'backpacks', price: '89.99' },
            { id: 10, imageSrc: './imgbox/backpack3.jpg', title: 'Backpack Terra Incognita 60', desc: 'Some text about the backpack.', category: 'backpacks', price: '49.99' },
            { id: 11, imageSrc: './imgbox/backpack4.jpg', title: 'Backpack Terra Incognita 60', desc: 'Some text about the backpack.', category: 'backpacks', price: '69.99' },
            { id: 12, imageSrc: './imgbox/backpack1.jpg', title: 'Backpack Terra Incognita 60', desc: 'Some text about the backpack.', category: 'backpacks', price: '99.99' },
            { id: 13, imageSrc: './imgbox/backpack2.jpg', title: 'Backpack Terra Incognita 60', desc: 'Some text about the backpack.', category: 'backpacks', price: '79.99' },
            { id: 14, imageSrc: './imgbox/backpack6.jpg', title: 'Backpack Terra Incognita 60', desc: 'Some text about the backpack.', category: 'backpacks', price: '59.99' }

        ];

        return (
            <Container>
                <Row className='mb-4 mt-5'>
                    {products.map((product) => (
                        <Col key={product.id}>
                            <Card className='mb-3' bg='light'>
                                <CardImg variant="top" src={product.imageSrc} />
                                <CardBody>
                                    <CardTitle>{product.title}</CardTitle>
                                    <CardText>{product.desc}</CardText>
                                    <CardText>{product.price}</CardText>
                                    <Button variant='success' onClick={() => addToCart(product)}>Order</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}
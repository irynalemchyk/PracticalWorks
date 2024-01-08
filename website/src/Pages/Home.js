import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import BackpacksCard from '../Pages/BackpacksCard';
import CardRows from './CardRows';
import Accordion1 from './Accordions/Accordion1';
import { Container } from 'react-bootstrap';

export default class Home extends Component {

    state = {
        cartOpen: false,
        cartItems: JSON.parse(localStorage.getItem('cartItems')) || [
            {
                id: 1,
                imageSrc: './imgbox/backpack1.jpg',
                title: 'Backpack Terra Incognita 60',
                text: 'Some text about the backpack.'
            },
            {
                id: 2,
                imageSrc: './imgbox/backpack2.jpg',
                title: 'Backpack Terra Incognita 60',
                text: 'Some text about the backpack.'
            },
            {
                id: 3,
                imageSrc: './imgbox/backpack6.jpg',
                title: 'Backpack Terra Incognita 60',
                text: 'Some text about the backpack.'
            },
            {
                id: 4,
                imageSrc: './imgbox/backpack3.jpg',
                title: 'Backpack Terra Incognita 60',
                text: 'Some text about the backpack.'
            },
            {
                id: 5,
                imageSrc: './imgbox/backpack4.jpg',
                title: 'Backpack Terra Incognita 60',
                text: 'Some text about the backpack.'
            },
            {
                id: 6,
                imageSrc: './imgbox/backpack1.jpg',
                title: 'Backpack Terra Incognita 60',
                text: 'Some text about the backpack.'
            },
            {
                id: 7,
                imageSrc: './imgbox/backpack6.jpg',
                title: 'Backpack Terra Incognita 60',
                text: 'Some text about the backpack.'
            },
            {
                id: 8,
                imageSrc: './imgbox/backpack2.jpg',
                title: 'Backpack Terra Incognita 60',
                text: 'Some text about the backpack.'
            },
            {
                id: 9,
                imageSrc: './imgbox/backpack6.jpg',
                title: 'Backpack Terra Incognita 60',
                text: 'Some text about the backpack.'
            },
            {
                id: 10,
                imageSrc: './imgbox/backpack3.jpg',
                title: 'Backpack Terra Incognita 60',
                text: 'Some text about the backpack.'
            },
            {
                id: 11,
                imageSrc: './imgbox/backpack4.jpg',
                title: 'Backpack Terra Incognita 60',
                text: 'Some text about the backpack.'
            },
            {
                id: 12,
                imageSrc: './imgbox/backpack1.jpg',
                title: 'Backpack Terra Incognita 60',
                text: 'Some text about the backpack.'
            },
            {
                id: 13,
                imageSrc: './imgbox/backpack2.jpg',
                title: 'Backpack Terra Incognita 60',
                text: 'Some text about the backpack.'
            },
            {
                id: 14,
                imageSrc: './imgbox/backpack6.jpg',
                title: 'Backpack Terra Incognita 60',
                text: 'Some text about the backpack.'
            },
        ]
    };

    addToCart = (product) => {
        if (!this.state.cartItems.some(item => item.id === product.id)) {
            this.setState(prevState => {
                const updatedCart = [...prevState.cartItems, product];
                localStorage.setItem('cartItems', JSON.stringify(updatedCart));
                return { cartItems: updatedCart };
            });
        }
    };

    render() {
        return (
            <>
                <CarouselBox />
                <BackpacksCard addToCart={this.addToCart} />
                <Container>
                    <h2 className='mt-5 mb-3' style={{ color: "#198754" }}>Montenedro: everything for tourism and even more</h2>
                    <p>A hiking trip is a way out of your comfort zone. But if you prepare for your trip with Terra Incognita, everything will go like clockwork - without the slightest hint of discomfort. After all, our online travel store in Ukraine is considered one of the most professional in its field. Here you can buy any kind of branded tourist equipment at reasonable prices. And this is not the whole arsenal of our advantages.</p>
                    <CardRows />
                    <h2 className='mt-5 mb-2' style={{ color: "#198754" }}>Frequently Asked Questions</h2>
                    <p className='mb-4'>Last modified: Sept 07 2023</p>
                    <Accordion1 />
                </Container>
            </>
        );
    }
}
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import equipment1Img from '../assets/tourist-equipment1.jpg';
import equipment2Img from '../assets/tourist-equipment2.jpg';
import equipment3Img from '../assets/tourist-equipment3.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <div className='dark-overlay'>
                        <img
                            className='d-block w-100'
                            src={equipment1Img}
                            alt='tourist equipment 1'
                        />
                    </div>
                    <Carousel.Caption>
                        <h3><a href="/products" className="carousel-link">Our equipment</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='dark-overlay'>
                        <img
                            className='d-block w-100'
                            src={equipment2Img}
                            alt='tourist equipment 2'
                        />
                    </div>
                    <Carousel.Caption>
                    <h3><a href="/products" className="carousel-link">Our equipment</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='dark-overlay'>
                        <img
                            className='d-block w-100'
                            src={equipment3Img}
                            alt='tourist equipment 3'
                        />
                    </div>
                    <Carousel.Caption>
                    <h3><a href="/products" className="carousel-link">Our equipment</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

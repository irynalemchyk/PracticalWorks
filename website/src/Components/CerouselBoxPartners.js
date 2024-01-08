import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import partners1Img from '../assets-partners/gorgany.jpg';
import partners2Img from '../assets-partners/turbat.jpg';
import partners3Img from '../assets-partners/terra.jpg';
import partners4Img from '../assets-partners/itclub.jpg';

export default class CarouselBoxPartners extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <div className='dark-overlay'>
                        <img
                            className='d-block w-100'
                            src={partners1Img}
                            alt='Gorgany'
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>
                            <a href="https://www.gorgany.com" target="_blank" className="carousel-link">Gorgany</a>
                        </h3>
                        <p className="carousel-description">Our partner</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='dark-overlay'>
                        <img
                            className='d-block w-100'
                            src={partners2Img}
                            alt='Turbat'
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>
                            <a href="https://www.turbat.ua" target="_blank" className="carousel-link">Turbat</a>
                        </h3>
                        <p className="carousel-description">Our partner</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='dark-overlay'>
                        <img
                            className='d-block w-100'
                            src={partners3Img}
                            alt='Terra Incognita'
                        />
                    </div>
                    <Carousel.Caption>
                    <h3>
                            <a href="https://terraincognita.com.ua" target="_blank" className="carousel-link">Terra Incognita</a>
                        </h3>
                        <p className="carousel-description">Our partner</p>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='dark-overlay'>
                        <img
                            className='d-block w-100'
                            src={partners4Img}
                            alt='IT Club'
                        />
                    </div>
                    <Carousel.Caption>
                    <h3>
                            <a href="https://itclubloyalty.com" target="_blank" className="carousel-link">IT Club</a>
                        </h3>
                        <p className="carousel-description">Our partner</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
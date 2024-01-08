import React, { Component } from 'react';
import CarouselBoxPartners from '../Components/CerouselBoxPartners';
import ContainerPartners from '../Pages/ContainerPartners';

export default class Partners extends Component {
    render() {
        return (
            <div>
                <CarouselBoxPartners />
                <ContainerPartners />
            </div>
        )
    }
}
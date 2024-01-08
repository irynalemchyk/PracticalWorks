import React, { Component } from 'react';
import { Tab, TabContainer, Container, Nav, Row, Col } from 'react-bootstrap';
import BackpacksCard from '../Pages/BackpacksCard';
import TentsCard from '../Pages/TentsCard';
import SleepingBagsCard from '../Pages/SleepingBagsCard';
import CreditText from '../Pages/CreditText';
import Accordion2 from '../Pages/Accordions/Accordion2';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: 'first',
        };
    }

    handleCategorySelect = (category) => {
        this.setState({ selectedCategory: category });
    };

    render() {
        const { selectedCategory } = this.state;

        return (
            <Container>
                <TabContainer id='left-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-5'>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey='first'
                                        onClick={() => this.handleCategorySelect('first')}
                                        className='mb-1'
                                        style={{
                                            backgroundColor: selectedCategory === 'first' ? '#198754' : 'white',
                                            color: selectedCategory === 'first' ? 'white' : '#198754',
                                            padding: '10px',
                                        }}
                                        activeStyle={{
                                            backgroundColor: '#198754',
                                            color: 'white',
                                        }}
                                    >
                                        Backpacks
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey='second'
                                        onClick={() => this.handleCategorySelect('second')}
                                        className='mb-1'
                                        style={{
                                            backgroundColor: selectedCategory === 'second' ? '#198754' : 'white',
                                            color: selectedCategory === 'second' ? 'white' : '#198754',
                                            padding: '10px',
                                        }}
                                        activeStyle={{
                                            backgroundColor: '#198754',
                                            color: 'white',
                                        }}
                                    >
                                        Tents
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey='third'
                                        onClick={() => this.handleCategorySelect('third')}
                                        className='mb-1'
                                        style={{
                                            backgroundColor: selectedCategory === 'third' ? '#198754' : 'white',
                                            color: selectedCategory === 'third' ? 'white' : '#198754',
                                            padding: '10px',
                                        }}
                                        activeStyle={{
                                            backgroundColor: '#198754',
                                            color: 'white',
                                        }}
                                    >
                                        Sleeping bags
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <hr />
                            <Nav variant='pills' className='flex-column mt-2'>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey='fourth'
                                        onClick={() => this.handleCategorySelect('fourth')}
                                        className='mb-1'
                                        style={{
                                            backgroundColor: selectedCategory === 'fourth' ? '#198754' : 'white',
                                            color: selectedCategory === 'fourth' ? 'white' : '#198754',
                                            padding: '10px',
                                        }}
                                        activeStyle={{
                                            backgroundColor: '#198754',
                                            color: 'white',
                                        }}
                                    >
                                        Credit and payment
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey='fifth'
                                        onClick={() => this.handleCategorySelect('fifth')}
                                        className='mb-1'
                                        style={{
                                            backgroundColor: selectedCategory === 'fifth' ? '#198754' : 'white',
                                            color: selectedCategory === 'fifth' ? 'white' : '#198754',
                                            padding: '10px',
                                        }}
                                        activeStyle={{
                                            backgroundColor: '#198754',
                                            color: 'white',
                                        }}
                                    >
                                        Delivery and payment
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        eventKey='sixth'
                                        onClick={() => this.handleCategorySelect('sixth')}
                                        className='mb-1'
                                        style={{
                                            backgroundColor: selectedCategory === 'sixth' ? '#198754' : 'white',
                                            color: selectedCategory === 'sixth' ? 'white' : '#198754',
                                            padding: '10px',
                                        }}
                                        activeStyle={{
                                            backgroundColor: '#198754',
                                            color: 'white',
                                        }}
                                    >
                                        Credit and payment
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-5'>
                                <Tab.Pane eventKey='first'>
                                    <BackpacksCard />
                                </Tab.Pane>

                                <Tab.Pane eventKey='second'>
                                    <TentsCard />
                                </Tab.Pane>

                                <Tab.Pane eventKey='third'>
                                    <SleepingBagsCard />
                                </Tab.Pane>
                            </Tab.Content>

                            <Tab.Content className='mt-5'>
                                <Tab.Pane eventKey='fourth'>
                                    <h2 className='mt-3 mb-5' style={{ color: "#198754" }}>DELIVERY, PAYMENT AND RETURNS</h2>
                                    <Accordion2 />
                                </Tab.Pane>

                                <Tab.Pane eventKey='fifth'>
                                    <CreditText />
                                </Tab.Pane>

                                <Tab.Pane eventKey='sixth'>
                                    <h2 className='mt-3 mb-5' style={{ color: "#198754" }}>DELIVERY, PAYMENT AND RETURNS</h2>
                                    <Accordion2 />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </TabContainer>
            </Container>
        )
    }
}

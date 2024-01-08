import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap';

export default class CardRows extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Card style={{ border: 'none', backgroundColor: '#c7e6e8'}}>
                            <CardBody>
                                <Row>
                                    <Col md="3">
                                        <img
                                            className='img-fluid mr-1 mt-4 mb-1'
                                            src='./img_hiking/hiking1.jpg'
                                        />
                                    </Col>
                                    <Col md="9">
                                        <h5 className='mt-3 ml-3' style={{ color: "#198754" }}>What is hiking?</h5>
                                        <p>Hiking is a recreational activity that involves walking or trekking in natural environments, typically in the countryside or wilderness. It is often done on trails, footpaths, or designated hiking routes through mountains, forests, and other scenic landscapes. Hiking can range from short, leisurely walks to more strenuous and challenging treks that may last for several days.</p>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="9">
                        <Card style={{ border: 'none', backgroundColor: '#c7e6e8' }}>
                            <CardBody>
                                <Row>
                                    <Col md="3">
                                        <img
                                            className='img-fluid mr-1 mt-4 mb-1'
                                            src='./img_hiking/hiking2.jpg'
                                        />
                                    </Col>
                                    <Col md="9">
                                        <h5 className='mt-3' style={{ color: "#198754" }}>What is hiking?</h5>
                                        <p>Hiking is a recreational activity that involves walking or trekking in natural environments, typically in the countryside or wilderness. It is often done on trails, footpaths, or designated hiking routes through mountains, forests, and other scenic landscapes. Hiking can range from short, leisurely walks to more strenuous and challenging treks that may last for several days.</p>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="9">
                        <Card style={{ border: 'none', backgroundColor: '#c7e6e8' }}>
                            <CardBody>
                                <Row>
                                    <Col md="3">
                                        <img
                                            className='img-fluid mr-1 mt-4 mb-1'
                                            src='./img_hiking/hiking3.jpg'
                                        />
                                    </Col>
                                    <Col md="9">
                                        <h5 className='mt-3' style={{ color: "#198754" }}>What is hiking?</h5>
                                        <p>Hiking is a recreational activity that involves walking or trekking in natural environments, typically in the countryside or wilderness. It is often done on trails, footpaths, or designated hiking routes through mountains, forests, and other scenic landscapes. Hiking can range from short, leisurely walks to more strenuous and challenging treks that may last for several days.</p>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="9">
                        <Card style={{ border: 'none', backgroundColor: '#c7e6e8' }}>
                            <CardBody>
                                <Row>
                                    <Col md="3">
                                        <img
                                            className='img-fluid mr-1 mt-4 mb-1'
                                            src='./img_hiking/hiking4.jpg'
                                        />
                                    </Col>
                                    <Col md="9">
                                        <h5 className='mt-3' style={{ color: "#198754" }}>What is hiking?</h5>
                                        <p>Hiking is a recreational activity that involves walking or trekking in natural environments, typically in the countryside or wilderness. It is often done on trails, footpaths, or designated hiking routes through mountains, forests, and other scenic landscapes. Hiking can range from short, leisurely walks to more strenuous and challenging treks that may last for several days.</p>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap';

export default class ContainerPartners extends Component {
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
                                            src='./imgpartners/gorgany.png'
                                        />
                                    </Col>
                                    <Col md="9">
                                        <h5 className='mt-5 ml-3' style={{ color: "#198754" }}>Who is Gorgany?</h5>
                                        <p>Gorgany is a Ukrainian company that specializes in the sale and production of hiking equipment. The company is named after the Gorgany mountain range, which is famous for its rugged trails and vast wilderness.</p>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="9">
                        <Card style={{ border: 'none', backgroundColor: '#c7e6e8'}}>
                            <CardBody>
                                <Row>
                                    <Col md="3">
                                        <img
                                            className='img-fluid mr-1 mt-4 mb-1'
                                            src='./imgpartners/turbat.png'
                                        />
                                    </Col>
                                    <Col md="9">
                                        <h5 className='mt-4 ml-3' style={{ color: "#198754" }}>Who is Turbat?</h5>
                                        <p>"Brand of Ukrainian travelers" is not an empty word. 100% of Turbat clothing is made at home in Ukraine. It's nice to know that the thing that keeps you warm, protects you from the rain, or gives you a pleasant sleep while traveling is made by our people. Emotionally, it is something on the level of grandma's knitted socks. It's your own, how can you not love it?</p>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="9">
                        <Card style={{ border: 'none', backgroundColor: '#c7e6e8'}}>
                            <CardBody>
                                <Row>
                                    <Col md="3">
                                        <img
                                            className='img-fluid mr-1 mt-4 mb-1'
                                            src='./imgpartners/terraincognita.png'
                                        />
                                    </Col>
                                    <Col md="9">
                                        <h5 className='mt-4 ml-3' style={{ color: "#198754" }}>Who is Terra Incognita?</h5>
                                        <p>Terra incognita is a Ukrainian company specializing in the production of tourist equipment such as tents, backpacks, and sleeping bags. The company's products are aimed at people who lead an active lifestyle, hikers, skiers, and cyclists. The company was founded in late 2005 in Kyiv. According to the website of the Ukrainian Retailers Association, the company is one of the leaders in the production of travel goods in Ukraine.</p>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="9">
                        <Card style={{ border: 'none', backgroundColor: '#c7e6e8'}}>
                            <CardBody>
                                <Row>
                                    <Col md="3">
                                        <img
                                            className='img-fluid mr-1 mt-4 mb-1'
                                            src='./imgpartners/itclub.png'
                                        />
                                    </Col>
                                    <Col md="9">
                                        <h5 className='mt-5 ml-3' style={{ color: "#198754" }}>Who is IT Club?</h5>
                                        <p>IT Club loyalty program. It is a Ukrainian company that specializes in the sale and production. The company is named after the Gorgany mountain range, which is famous for its rugged trails and vast wilderness. The company is named after the Gorgany mountain range, which is famous for its rugged trails and vast wilderness.</p>
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
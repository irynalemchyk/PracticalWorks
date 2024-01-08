import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
    MainContainer,
} from "./FooterStyles.js";

const Footer = () => {
    return (
        <MainContainer>
            <Box>
                <h1
                    style={{
                        color: "lightblue",
                        textAlign: "center",
                        marginBottom: "3rem",
                    }}
                >
                    Get in Touch!
                </h1>
                <FooterContainer>
                    <Row>
                        <Column>
                            <Heading>About Us</Heading>
                            <FooterLink href="#">
                                Aim
                            </FooterLink>
                            <FooterLink href="#">
                                Vision
                            </FooterLink>
                            <FooterLink href="#">
                                Testimonials
                            </FooterLink>
                        </Column>
                        <Column>
                            <Heading>Services</Heading>
                            <FooterLink href="#">
                                Menu
                            </FooterLink>
                            <FooterLink href="/products">
                                Products
                            </FooterLink>
                            <FooterLink href="/partners">
                                Partners
                            </FooterLink>
                            <FooterLink href="/contacts">
                                Contacts
                            </FooterLink>
                        </Column>
                        <Column>
                            <Heading>Contacts</Heading>
                            <FooterLink href="#">
                                Gmail
                            </FooterLink>
                            <FooterLink href="#">
                                Ahemdabad
                            </FooterLink>
                            <FooterLink href="#">
                                Indore
                            </FooterLink>
                            <FooterLink href="#">
                                Mumbai
                            </FooterLink>
                        </Column>
                        <Column>
                            <Heading>Social Media</Heading>
                            <FooterLink href="#">
                                <i className="fab fa-facebook-f">
                                    <span>
                                        Facebook
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-instagram">
                                    <span>
                                        Instagram
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-twitter">
                                    <span>
                                        Twitter
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-youtube">
                                    <span>
                                        Youtube
                                    </span>
                                </i>
                            </FooterLink>
                        </Column>
                    </Row>
                </FooterContainer>
            </Box>
        </MainContainer>
    );
};
export default Footer;

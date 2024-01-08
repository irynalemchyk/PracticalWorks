import React, { Component } from 'react';
import { Container, FormControl, Navbar, NavbarBrand, Nav, Form, Button } from 'react-bootstrap';
import logo from './img/logo.png';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Partners from '../Pages/Partners';
import Contacts from '../Pages/Contacts';
import ShoppingCart from './ShoppingCart';

export default class Header extends Component {
    state = {
        cartOpen: false,
        cartItems: JSON.parse(localStorage.getItem('cartItems')) || [], // Зчитуємо дані з localStorage
    };

    removeFromCart = (productId) => {
        this.setState(
            (prevState) => ({
                cartItems: prevState.cartItems.filter((item) => item.id !== productId),
            }),
            () => {
                // Після оновлення стану, зберігаємо дані в localStorage
                localStorage.setItem('cartItems', JSON.stringify(this.state.cartItems));
            }
        );
    };

    handleCartToggle = () => {
        this.setState((prevState) => ({
            cartOpen: !prevState.cartOpen,
        }));
    };
    themestate = true;

    render() {
        console.log('Rendering with cartOpen:', this.state.cartOpen);
        const { cartOpen } = this.state;

        return (
            <>
                <Navbar
                    id='main-navbar'
                    sticky='top'
                    className={this.themestate ? 'light' : 'dark'}
                    collapseOnSelect
                    expand="md"
                    bg="dark"
                    variant="dark"
                >
                    <Container className=''>
                        <NavbarBrand href='/'>
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className='d-inline-block align-top'
                                alt='Logo'
                            />{' '}
                            Montenegro
                        </NavbarBrand>

                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/products">Products</Nav.Link>
                                <Nav.Link href="/partners">Partners</Nav.Link>
                                <Nav.Link href="/contacts">Contacts</Nav.Link>
                            </Nav>
                            <Form className="menu-form">
                                <FormControl
                                    type='text'
                                    placeholder='Search'
                                    className='mr-sm-2'
                                />
                                <div className="search-button-menu">
                                    <Button variant="outline-info" style={{ color: 'lightblue', borderColor: 'lightblue' }}>Search</Button>
                                </div>
                                <div className="shop-cart-container">
                                    <FaShoppingCart className="shop-cart-button" onClick={this.handleCartToggle} />
                                    {cartOpen && (
                                        <ShoppingCart cartItems={this.state.cartItems} handleRemoveFromCart={this.removeFromCart} />
                                    )}
                                </div>
                            </Form>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/partners" element={<Partners />} />
                        <Route path="/contacts" element={<Contacts />} />
                    </Routes>
                </Router>
            </>
        );
    }
}

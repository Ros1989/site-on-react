import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  FormControl,
  Container,
  Form,
  Button,
} from 'react-bootstrap';
import logo from '../img/logo192.png';

export default class Header extends Component {
  render() {
    return (
      //collapseOnSelect нужен для того чтобы зделать Navbar адаптивным. Дать ему возможность разворачиваться и сворачиваться
      // expand="md" это брейкпоинт с помощью которого наш Navbar станет адаптивным
      <>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />{' '}
              React site
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About us</Nav.Link>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
              </Nav>
              <Form className="d-flex" inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="me-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

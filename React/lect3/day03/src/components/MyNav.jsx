import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

export function MyNav() {

    const { count } = useSelector( state => state.mySlice )
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className={( { isActive } ) => isActive ? 'text-success nav-link' : 'nav-link'} to="/">Home</NavLink>
                        <NavLink className={( { isActive } ) => isActive ? 'text-success nav-link' : 'nav-link'} to="/products">Products</NavLink>
                        <NavLink className={( { isActive } ) => isActive ? 'text-success nav-link' : 'nav-link'} to="/counter">Counter ({count})</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

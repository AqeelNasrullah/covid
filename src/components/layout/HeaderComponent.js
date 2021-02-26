import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap'
import { PUBLIC_URL } from '../../conf/conf';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const style = {
        logo: {
            width: '50px',
            height: '50px',
            borderRadius: '100%',
            overflow: 'hidden'
        }
    }

    return (
        <Navbar dark color="dark" expand="md">
            <Container fluid>
                <NavbarBrand href="/" className="d-flex align-items-center">
                    <div style={ style.logo } className="mr-3">
                        <img src={ PUBLIC_URL + 'logo.png' } width="100%" alt="Logo not found" />
                    </div>
                    <span className="font-weight-bolder d-none d-md-block">COVID-19 Pandemic</span>
                </NavbarBrand>

                <NavbarToggler onClick={ () => setIsOpen(!isOpen) } />

                <Collapse navbar isOpen={isOpen}>
                    <Nav navbar className="ml-auto">
                        <NavItem>
                            <NavLink to="/global" className="nav-link"><i className="bi bi-globe2"></i> Global Statistics</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/advisory" className="nav-link"><i className="bi bi-files-alt"></i> Advisory</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default Header

import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export default class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">White Light</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>

        )
    }
}
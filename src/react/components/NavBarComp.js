import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export default class NavBarComp extends Component {
    render() {
        return (
            <Navbar className="brand-font">
                <div className="container">
                    <div className="row">
                        <NavbarBrand href="/" className="">White Light</NavbarBrand>
                    </div>
                </div>
            </Navbar>

        )
    }
}
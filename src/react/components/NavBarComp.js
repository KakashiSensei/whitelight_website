import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export default class NavBarComp extends Component {
    render() {
        return (
            <Navbar id="navBar" className="brand-font addShadow">
                <div className="container">
                    <div className="row">
                        <NavbarBrand href="/">White Light</NavbarBrand>
                    </div>
                </div>
            </Navbar>

        )
    }
}
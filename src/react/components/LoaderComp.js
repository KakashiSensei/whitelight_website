import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export default class LoaderComp extends Component {
    render() {
        return (
            <div>
                <div className="loader">Loading...</div>
                <div className="centerAlign loaderText">Analyzing your profile</div>
            </div>
        )
    }
}
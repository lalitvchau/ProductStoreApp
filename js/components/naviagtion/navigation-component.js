import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavigationComponent extends Component {
    render() {
        let markup = (
            <div>
                <nav id="nav-main">
                    <ul>

                        <li>
                            <a href="#banner" id="homeLink">Home</a>
                        </li>
                        <li>
                            <a href="#services" id="productLink">Products</a>
                        </li>
                        <li>
                            <a href="#about" id="aboutLink">About</a>
                        </li>
                        <li>
                            <a href="#gallery" id="gallaryLink">Gallery</a>
                        </li>
                        <li>
                            <a href="#addNewProduct" id="add">Add New Product</a>
                        </li>
                        <li>
                            <a href="#testimonials" id="testimonialsLink">Testimonials</a>
                        </li>
                    </ul>
                </nav>


                <div id="nav-trigger"><span></span></div>
                <nav id="nav-mobile"></nav>
            </div>
        );

        return markup;
    }
}

export {
    NavigationComponent
};

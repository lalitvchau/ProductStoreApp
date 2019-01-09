import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HeaderComponent } from '../header/header-component';
import { FooterComponent } from '../footer/footer-component';
import { HomeComponent } from '../home/home-component';
class LayoutComponent extends Component {
    render() {
        let markup =
            (
                <Router>
                    <div>
                        <HeaderComponent />
                        <Route exact path='/' component={HomeComponent} />
                        <FooterComponent />
                    </div>
                </Router>
            );

        return markup;
    }
}

export {
    LayoutComponent
};

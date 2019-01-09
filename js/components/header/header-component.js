import React, { Component } from 'react';
import { NavigationComponent } from '../naviagtion/navigation-component';
class HeaderComponent extends Component {
    render() {
        let markup =
            (
                <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
                    <div id="header" className="nav-collapse">
                        <div className="row clearfix">
                            <div className="col-1">
                                <div id="logo">

                                    <img src="assets/images/logo.png" id="banner-logo" alt="Landing Page" />

                                    <img src="assets/images/logo-2.png" id="navigation-logo" alt="Landing Page" />

                                </div>

                                <aside>

                                    <ul className="social-icons">
                                        <li>
                                            <a target="_blank" title="Facebook" href="https://www.facebook.com/lalitvchau">
                                                <i className="fa fa-facebook fa-1x"></i><span>Facebook</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" title="Twitter" href="http://www.twitter.com/lalitvchautweet">
                                                <i className="fa fa-twitter fa-1x"></i><span>Twitter</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" title="Instagram" href="http://www.instagram.com/lalitvchau">
                                                <i className="fa fa-instagram fa-1x"></i><span>Instagram</span>
                                            </a>
                                        </li>
                                    </ul>
                                </aside>

                               <NavigationComponent/>

                            </div>
                        </div>
                    </div>
                    <div id="banner-content" className="row clearfix">

                        <div className="col-38">

                            <div className="section-heading">
                                <h1>A Product Store Case Study</h1>
                                <h2>This is a case study to store, and display the products infomation ...!</h2>
                            </div>


                            <a href="#" className="button">Welcome ..!</a>

                        </div>

                    </div>
                </header>
            );

        return markup;
    }
}
export {
    HeaderComponent
};

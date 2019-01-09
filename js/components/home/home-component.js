import React, { Component } from 'react';
import { SocialLinksComponent } from '../social-links/social-links-component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { GallaryComponent } from '../gallary/gallary-component';
import { TestimonialsComponent } from '../testimonials/testimonials-compnent';
import { ConnectProductSystem } from '../product-viewer/products-viewer-components';
import { AddProductComponent } from '../add-product/add-product-component';

class HomeComponent extends Component {
    render() {
        let markup =
            (
                <main id="content">
                   <ConnectProductSystem/>
                   <AboutUsComponent/>
                   <GallaryComponent/>
                   <AddProductComponent/>
                   <TestimonialsComponent/>
                </main>
            );

        return markup;
    }
}

export {
    HomeComponent
};

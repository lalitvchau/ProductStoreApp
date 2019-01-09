import React, { Component } from 'react';
import { FollowMeComponent } from '../follow-me/follow-me-component';
import { CopyrightComponent } from '../copyright/copyright-component';
class FooterComponent extends Component {
    render() {
        let markup =
            (
                <footer id="landing-footer" className="clearfix">
                    <div className="row clearfix">
                       <CopyrightComponent/>
                       <FollowMeComponent/>
                    </div>
                </footer>
            );

        return markup;

        return markup;
    }
}
export {
    FooterComponent
};

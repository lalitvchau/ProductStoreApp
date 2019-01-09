import React, { Component } from 'react';

class SocialLinksComponent extends Component {
    render() {
        let markup =
            (
                <section id="social">
                    <div className="container">
                        <div className="wrapper clearfix">
                            <div className="addthis_toolbox addthis_default_style">
                                <a className="addthis_button_facebook_like"></a>
                                <a className="addthis_button_tweet"></a>
                                <a className="addthis_button_linkedin_counter"></a>
                                <a className="addthis_button_google_plusone"></a>
                            </div>
                        </div>
                    </div>
                </section>
            );

        return markup;
    }
}

export {
    SocialLinksComponent
};

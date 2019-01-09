import React, { Component } from 'react';

class FollowMeComponent extends Component {
    render() {
        let markup =
            (
                <ul className="col-2 social-icons">
                    <li>
                        <a target="_blank" title="Facebook" href="https://www.facebook.com/lalitvchau">
                            <i className="fa fa-facebook fa-1x"></i><span>Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" title="Twitter" href="http://www.twitter.com/lalitchautweet">
                            <i className="fa fa-twitter fa-1x"></i><span>Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" title="Instagram" href="http://www.instagram.com/lalitvchau">
                            <i className="fa fa-instagram fa-1x"></i><span>Instagram</span>
                        </a>
                    </li>
                </ul>
            );

        return markup;
    }
}

export {
    FollowMeComponent
};

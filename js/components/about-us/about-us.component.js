import React, { Component } from 'react';

class AboutUsComponent extends Component {
    render() {
        let markup =
            (

                <section id="about" className="introduction scrollto">

                    <div className="row clearfix">

                        <div className="col-3">
                            <div className="section-heading">
                                <h3>SUCCESS</h3>
                                <h2 className="section-title">How We Help You To Sell Your Product</h2>
                                <p className="section-subtitle">Customers never buy because of product features. They buy because they perceive some "benefit" to those features.
                                Unfortunately, most sales and marketing messages talk about features and let the customers try to figure out the benefits. That's asking your customer to do your heavy lifting for you.</p>
                            </div>

                        </div>

                        <div className="col-2-3">

                            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.1s">
                                <div className="icon">
                                    <i className="fa fa-cart-plus fa-2x"></i>
                                </div>
                                <div className="icon-block-description">
                                    <h4>Product Cart Plus</h4>
                                    <p>1A strong open vehicle with two or four wheels, typically used for carrying loads and pulled by a horse</p>
                                </div>
                            </div>
                            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.3s">
                                <div className="icon">
                                    <i className="fa fa-bolt fa-2x"></i>
                                </div>
                                <div className="icon-block-description">
                                    <h4>Easy to Use</h4>
                                    <p>Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit
                                        detracto mediocrem disputationi</p>
                                </div>
                            </div>

                            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">
                                <div className="icon">
                                    <i className="fa fa-tablet fa-2x"></i>
                                </div>

                                <div className="icon-block-description">
                                    <h4>Fully Responsive</h4>
                                    <p>Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro
                                        nemore vivendum</p>
                                </div>
                            </div>

                            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">

                                <div className="icon">
                                    <i className="fa fa-rocket fa-2x"></i>
                                </div>

                                <div className="icon-block-description">
                                    <h4>Parallax Effect</h4>
                                    <p>Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro
                                        nemore vivendum</p>
                                </div>
                            </div>

                        </div>

                    </div>


                </section>
            );

        return markup;
    }
}

export {
    AboutUsComponent
};

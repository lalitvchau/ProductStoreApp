import React, { Component } from 'react';
import { TestimonialsCustomerComponent } from '../testimornialCustomer/testimonial-cust-comonent';

class TestimonialsComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            imgUrl: '1',
            msg: props.msg,
            name: props.name,
        }
    }
    render() {
        let markup =
            (
                <aside id="testimonials" className="scrollto text-center clearfix secondary-color" data-enllax-ratio=".2">

                    <div className="row clearfix">

                        <div className="section-heading">
                            <h3>FEEDBACK</h3>
                            <h2 className="section-title">What our customers are saying</h2>
                        </div>
                        <TestimonialsCustomerComponent imgUrl="assets/images/user-images/user-1.jpg" msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" name="John Doe - Happy Customer" />
                        <TestimonialsCustomerComponent imgUrl="assets/images/user-images/user-2.jpg" msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" name="Roslyn Doe - Happy Customer" />
                        <TestimonialsCustomerComponent imgUrl="assets/images/user-images/user-3.jpg" msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" name="Joss Teller - Happy Customer" />
                    </div>

                </aside>
            );

        return markup;
    }
}

export {
    TestimonialsComponent
};

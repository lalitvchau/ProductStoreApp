import React, { Component } from 'react';

class TestimonialsCustomerComponent extends Component {
    constructor(props){
        super(props);
         this.state={
             imgUrl:'1',
             msg:props.msg,
             name:props.name,
         }
    }
    render() {
        let markup =
            (
                 
                    <blockquote className="col-3 testimonial classic">
                        <img src={this.props.imgUrl} alt="User"/>
                        <q>{this.state.msg}</q>
                        <footer>{this.state.name}</footer>
                    </blockquote>

            );

        return markup;
    }
}

export {
    TestimonialsCustomerComponent
};

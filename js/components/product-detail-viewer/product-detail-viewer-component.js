import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProductsDetailsViewerComponent extends Component {

    render() {
        if (!this.props.product) {
            return <div >Thank you !</div>
        }
        return (
            <div>
                <div className="pricing-block-content">
                    <p className="pricing-sub">Product Id : {this.props.product.product_id}</p>
                    <div className="pricing">
                        <img src={this.props.product.product_photo_url} />
                    </div>
                    <ul>
                        <li><b>Product Title : </b>{this.props.product.title}</li>
                    </ul>
                    <ul>
                        <li><b>Product Id: </b>{this.props.product.product_id} </li>
                    </ul>

                    <ul>
                        <li><b>Units in Stock:</b> {this.props.product.units_in_stock} </li>
                    </ul>

                    <ul>
                        <li><b>Unit Price:</b> {this.props.product.unit_price}  </li>
                    </ul>
                    <ul>
                        <li><b>Selling Price:</b> {this.props.product.sellling_price}  </li>
                    </ul>
                    <ul>
                        <li><b>Remarks : </b>{this.props.product.remarks}  </li>
                    </ul>
                    <ul>
                        <li> <b> Description : </b>{this.props.product.description}  </li>
                    </ul>
                </div>
            </div>
        );

    }
}

export {
    ProductsDetailsViewerComponent
};

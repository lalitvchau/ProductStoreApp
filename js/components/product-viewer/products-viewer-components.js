import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProductService } from '../../services/product-service';
import { ProductActionCreator } from '../../action-creators/ProductActionCreator';
import { ProductsDetailsViewerComponent } from '../product-detail-viewer/product-detail-viewer-component';
import { configuration } from '../../config/service-url';
import { Link } from 'react-router-dom'
const NEW_CUSTOMER_RECORD_EVENT = 'NewProductRecord'
class ProductsViewerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_id: '', title: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let validation = true;
        if (event.target.name === "product_id") {
            validation = (event.target.value.includes('.') ? false : !isNaN(event.target.value));
            this.state.title = '';
        } else {
            this.state.product_id = '';
        }

        this.setState({ [event.target.name]: validation === true ? event.target.value : '' });
    }
    componentDidMount() {
        let validation = this.props.loadProducts && typeof this.props.loadProducts === 'function';
        if (validation) {
            this.props.loadProducts();

        }
    }
    render() {
        if (this.props.isLoading) {
            return (<div>Loading ... Please Wait  {this.props.products.length}</div>)
        }
        if (this.props.errorOccurred) {
            return (<div>error</div>)
        }
        if (this.props.products) {
            if (this.state.product_id != '' || this.state.title != '')
                return (
                    <section id="services" className="secondary-color text-center scrollto clearfix ">
                        <div className="row clearfix">

                            <div className="section-heading">
                                <h3>YOUR CHOICE</h3>
                                <h2 className="section-title">We have the right products for you..! Total Products are {this.props.products.length}</h2>
                                <form onSubmit={this.handleSubmit} method="post">
                                    <p>{this.validMsg}</p>
                                    <table className="productTable" align="center">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <button type="submit" name="dummy" disabled='disabled'><i className="fa fa-search"></i></button> <input type="text" required="required" value={this.state.title} onChange={this.handleChange} name="title" placeholder="Product Title" maxLength="100" size="50" /></td>

                                                <td>
                                                    <input type="text" required="required" value={this.state.product_id} onChange={this.handleChange} name="product_id" placeholder="Product Id" maxLength="25" size="50" /></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </form>
                            </div>
                            <div className='row'>
                                {
                                    this.props.products.map(item => {

                                        let flagID =(this.state.product_id!=''?(item.product_id+"").indexOf(this.state.product_id)!==-1:(item.title.indexOf(this.state.title)!==-1)) ;
                                        if (flagID == true)
                                            return (
                                                <div key={item.product_id} className="pricing-block col-3 wow fadeInUp" data-wow-delay="0.4s">
                                                    <ProductsDetailsViewerComponent product={item} />
                                                </div>
                                            );
                                    })
                                }
                            </div>

                        </div>
                    </section>
                )
            else {
                return (
                    <section id="services" className="secondary-color text-center scrollto clearfix ">
                        <div className="row clearfix">

                            <div className="section-heading">
                                <h3>YOUR CHOICE</h3>
                                <h2 className="section-title">We have the right products for you..! Total Products are {this.props.products.length}</h2>
                                <form onSubmit={this.handleSubmit} method="post">
                                    <p>{this.validMsg}</p>
                                    <table className="productTable" align="center">
                                        <tbody>
                                            <tr>
                                                <td><button type="submit" name="dummy" disabled='disabled'><i className="fa fa-search"></i></button><input type="text" required="required" value={this.state.title} onChange={this.handleChange} name="title" placeholder="Product Title" maxLength="100" size="50" /></td>
                                                <td><input type="text" required="required" value={this.state.product_id} onChange={this.handleChange} name="product_id" placeholder="Product Id" maxLength="25" size="50" /></td>

                                            </tr>
                                        </tbody>
                                    </table>

                                </form>
                            </div>
                            <div className='row'>
                                {
                                    this.props.products.map(item => {
                                        return (
                                            <div key={item.product_id} className="pricing-block col-3 wow fadeInUp" data-wow-delay="0.4s">
                                                <ProductsDetailsViewerComponent product={item} />
                                            </div>
                                        );
                                    })
                                }
                            </div>

                        </div>
                    </section>
                )
            }
        }
    }
}
let mapStateToProps = (state) => {
    return {
        products: state.products,
        isLoading: state.isLoading,
        errorOccurred: state.errorOccurred
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        loadProducts: async () => {
            try {
                let productService = new ProductService();

                dispatch(ProductActionCreator.isLoading(true));
                let products = await productService.getProducts();

                dispatch(ProductActionCreator.loadProducts(products));

                dispatch(ProductActionCreator.isLoading(false));
            } catch (error) {
                dispatch(ProductActionCreator.errorOccurred(true));
            }
        }
    };
};
let ConnectProductSystem = connect(mapStateToProps, mapDispatchToProps)(ProductsViewerComponent);

export {
    ConnectProductSystem
};

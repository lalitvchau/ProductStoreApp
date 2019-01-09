import React, { Component } from 'react';
import { ProductService } from '../../services/product-service';

class AddProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_id: '', title: '',
            units_in_stock: '', unit_price: '',
            sellling_price: '', remarks: '',
            product_photo_url: '', description: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let validation = true;
        if (event.target.name === "unit_price" || event.target.name === "sellling_price") {
            validation = !isNaN(event.target.value);
        }
        if (event.target.name === "product_id" || event.target.name === "units_in_stock") {
            validation = (event.target.value.includes('.') ? false : !isNaN(event.target.value));
        }

        this.setState({ [event.target.name]: validation === true ? event.target.value : '' });
    }

    async handleSubmit(event) {
            if (this.state.product_photo_url.includes('.jpg') || this.state.product_photo_url.includes('.png')|| this.state.product_photo_url.includes('.jpeg')) {
                let productSerive = new ProductService();
                let product = await productSerive.addProduct(this.state);
                event.preventDefault();
                alert("Product Added Succesully !");
            } else {
                alert("Please Enter a valid Image URL only PNG and JPG !");
            }
    }

    render() {
        let markup =
            (
                <aside id="addNewProduct" className="scrollto text-center clearfix addCust-color" data-enllax-ratio=".2">

                    <div className="row clearfix">

                        <div className="section-heading">
                            <h3>Add New Product</h3>
                            <h2 className="section-title">You can add a new product here</h2>
                        </div>
                        <form onSubmit={this.handleSubmit} action='#'>
                            <p>{this.validMsg}</p>
                            <table className="productTable" align="center">
                                <tbody>
                                    <tr>
                                        <td><input type="text" required="required" value={this.state.product_id} onChange={this.handleChange} name="product_id" placeholder="Product Id" maxLength="25" size="50" /></td>
                                        <td> <input type="text" required="required" value={this.state.title} onChange={this.handleChange} name="title" placeholder="Product Title" maxLength="100" size="50" /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" required="required" value={this.state.units_in_stock} onChange={this.handleChange} name="units_in_stock" placeholder="Product Unit in Stock" maxLength="4" size="50" /></td>
                                        <td> <input type="text" required="required" value={this.state.unit_price} onChange={this.handleChange} name="unit_price" placeholder="Product Unit Price" maxLength="12" size="50" /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" required="required" value={this.state.sellling_price} onChange={this.handleChange} name="sellling_price" placeholder="Product Selling Price" maxLength="12" size="50" /></td>
                                        <td> <input type="text" required="required" value={this.state.remarks} onChange={this.handleChange} name="remarks" placeholder="Product Remark" maxLength="40" size="50" /></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2"><input type="url" required="required" value={this.state.product_photo_url} onChange={this.handleChange} name="product_photo_url" placeholder="Product Photo URL" maxLength="500" size="100" /></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2"> <textarea required="required" value={this.state.description} onChange={this.handleChange} name="description" placeholder="Product Description" cols="103" rows="5" /></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <input type="submit" value="Add Product" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </form>
                    </div>
                </aside>
            );

        return markup;
    }
}

export {
    AddProductComponent
};

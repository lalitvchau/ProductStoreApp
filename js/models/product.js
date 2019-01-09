import { ObjectFormatter } from '../utilities';

const DELIMETER = ',';

class Product {
    constructor(product_id, title, description, selllingPrice, unitInStock, remarks, productPhotoUrl) {
        [
            this.product_id = product_id,
            this.title = title,
            this.description = description,
            this.sellling_price = selllingPrice,
            this.units_in_stock = unitInStock,
            this.remarks = remarks,
            this.product_photo_url = productPhotoUrl
        ] = arguments;
        console.log("Product id "+this.product_id)
    }


    toString() {
        return ObjectFormatter.format(this);
    }

    static create(csvString) {
        if (!csvString) {
            throw new Error("Invalid Argument Specified!");
        }

        let splitted = csvString.split(DELIMITER);
        let product = new Customer(...splitted);

        return product;
    }

}

export {
    Product
};
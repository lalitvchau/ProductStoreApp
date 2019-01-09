import 'whatwg-fetch';
import { configuration } from '../config/service-url';

class ProductService {
    getProducts() {
        let productServiceUrl = `${configuration.serviceUrls.baseUrl}/${configuration.serviceUrls.products}`;

        let promise = fetch(productServiceUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Unknown Error Occurred, Details : ' + response.responseText);
                }

                return response.json();
            }).
            catch(error => {
                if (error) {
                    throw new Error('Unable to load customer Reords ... ' + error.toString());
                }
            });

        return promise;
    }

    getProductByID(productId) {
        let productServiceUrl = `${configuration.serviceUrls.baseUrl}/${configuration.serviceUrls.getProductById}${productId}`;

        let promise = fetch(productServiceUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Unknown Error Occurred, Details : ' + response.responseText);
                }

                return response.json();
            }).
            catch(error => {
                if (error) {
                    throw new Error('Unable to load customer Reords ... ' + error.toString());
                }
            });

        return promise;
    }

    addProduct(product) {
        let productServiceUrl = `${configuration.serviceUrls.baseUrl}/${configuration.serviceUrls.addProduct}`;

        let promise = fetch(productServiceUrl, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Unknown Error Occurred, Details : ' + response.responseText);
                }

                return response.json();
            }).
            catch(error => {
                if (error) {
                    throw new Error('Unable to load product Reords ... ' + error.toString());
                }
            });

        return promise;
    };
}

export {
    ProductService
};

import React, { Component } from 'react';

class CopyrightComponent extends Component {
    render() {
        let markup =
            (

                <p id="copyright" className="col-2">
                    Copyright &copy; 2018, . Designed by <a href="http://github.com/lalitvchau">LaLit</a>
                </p>

            );

        return markup;
    }
}

export {
    CopyrightComponent
};

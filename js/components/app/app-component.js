import React, { Component } from 'react';
import { LayoutComponent } from '../layout/layout.component';
import { Provider } from 'react-redux';
import { store } from '../../store';

class AppComponent extends Component {
    render() {
        let markup =
            (
                <Provider store={store}>
                    <div>
                      <LayoutComponent/>
                    </div>
               </Provider>
            );

        return markup;
    }
}

export {
    AppComponent
};

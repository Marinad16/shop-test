import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store"
import {BasketProvider} from "./services/BasketProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BasketProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </BasketProvider>
    </Provider>
);


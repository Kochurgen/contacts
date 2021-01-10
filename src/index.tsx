import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore, Store} from 'redux';
import rootReducer from './services/Store/';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const store: Store<UsersState, UserAction> & {
    dispatch: DispatchType;
} = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();

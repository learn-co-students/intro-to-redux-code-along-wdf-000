import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { getShoppingListItems } from './actions/shoppingListItemActions';
import App from './App';
import './index.css';

import configureStore from './stores/configureStore';

const store = configureStore();

store.dispatch(getShoppingListItems())

ReactDOM.render(
   <Provider store={store} >
   <App />
   </Provider>,
  document.getElementById('root')
);



import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import logo from './logo.svg';
import ShoppingList from './ShoppingList';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Shopping List</h2>
        </div>
        <ShoppingList items={this.props.shoppingListItems} />
      </div>
    );
  }
}

// export default App;

function mapStateToProps(state) {
  return {shoppingListItems: state.shoppingListItems}
}

const connector = connect()
const connectedComponent = connector(App)

export default connectedComponent;


 
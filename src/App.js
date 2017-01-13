import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import ShoppingList from './ShoppingList';
import {getShoppingListItems} from './actions/shoppingListItemActions'

class App extends Component {
  change(){
    this.props.getShoppingListItems([{id: 1, description: "poo"}, {id: 2, description: "cookies"}, {id: 3, description: "sprinkles"}])
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 onClick={this.change.bind(this)}>Welcome to React Shopping List</h2>
        </div>
        <ShoppingList items={this.props.shoppingListItems} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {shoppingListItems: state.shoppingListItems}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getShoppingListItems: (items) => dispatch(getShoppingListItems(items))
  }
}

// const connector = connect(mapStateToProps)
// const connectedComponent = connector(App)
//
// export default connectedComponent;
export default connect(mapStateToProps, mapDispatchToProps)(App)

// Bonus: show usual export default connect...
// Bonus: container vs. presentational components: build actual list in shopping list component
// with actions for next code-along, shoppingList here top level, dispatch action
// then, bonus: container vs. presentational, props as callback functions

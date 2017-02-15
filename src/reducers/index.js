import { combineReducers } from 'redux';
import shoppingListItems from './shoppingListItemReducer'

const rootReducer = combineReducers({
  shoppingListItems
})

export default rootReducer;
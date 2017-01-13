const defaultState = [{id: 1, description: "milk"}, {id: 2, description: "cookies"}, {id: 3, description: "sprinkles"}]

export default function shoppingListItemReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_SHOPPING_LIST_ITEMS':
     return action.payload
    default:
      return state;
  }
}

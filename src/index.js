function createStore(candyReducer) {
  let state;

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = candyReducer(state, action);
    render()
  }

  return {
    dispatch,
    getState
  }
}

function candyReducer(state = [], action) {
  console.log(state)
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

let store = createStore(candyReducer)
store.dispatch({ type: 'ADD_CANDY' })
// Use your createStore function and the functions provided here to create a store.
// Once the store is created, call an initial dispatch.
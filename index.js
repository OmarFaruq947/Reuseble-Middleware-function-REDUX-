const { createStore, applyMiddleware } = require("redux");
const { fetchTodos } = require("./functions");
const {  fetchMiddleware } = require("./middleware");

// initial state (1)
const initialState = {
  todos: [],
};
//reducer (2)
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };

    case "todos/todoLoaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };

    default:
      state;
  }
};
//store (3)
const store = createStore(todoReducer,
    applyMiddleware(fetchMiddleware)
    );

//subscribe (4)
store.subscribe(() => {
    console.log(store.getState()); // latest state paua jay 
});

//dispatch (5)
store.dispatch(fetchTodos);

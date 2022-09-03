const { default: fetch } = require("node-fetch");


// step 1
const fetchTodos = async(dispatch, getState)=>{
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_limit=5`
      );
      const todos = await response.json();
  
      dispatch({
        type: "todos/todoLoaded",
        payload: todos,
      });
      console.log(`update todos: ${getState().todos.length}`);
      return;
}


//step 2
module.exports = {fetchTodos}
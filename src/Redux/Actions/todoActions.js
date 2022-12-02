export const addTodo = (todo) => {
  return {
    type: "todos/add",
    payload: todo,
  };
};

//Thunk Function
export const fetchTodo = () => {
  return async (dispatch, getState) => {
    //Call Api
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    dispatch({
      type: "todos/fetch",
      payload: data,
    });
  };
};

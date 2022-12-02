const initialState = {
  todoList: [],
  msg: "",
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/add":
      //console.log(action);
      return { ...state, todoList: state.todoList.concat(action.payload) };

    case "todos/fetch":
      return { ...state, todoList: action.payload };

    default:
      return state;
  }
};

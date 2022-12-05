import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//action: todos/add

const initialState = {
  todoList: [],
  msg: "",
  status: "idle",
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    // addTodo: (state, action) => {
    //   //todos/addTodo
    //   state.todoList.push(action.payload);
    // },
    // fetchTodos: (state, action) => {
    //   state.todoList = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todoList = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todoList.unshift(action.payload);
      });
  },
  //Middleware (Redux Thunk)
});

//console.log(todoSlice);

//Export Reducer
export const todoReducer = todoSlice.reducer;

//Export Actions
export const todoActions = todoSlice.actions;

//Export Selector
export const todoSelector = (state) => state.todos;

//Redux Thunk
// export const fetchTodos = () => {
//   return async (dispatch) => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await res.json();
//     dispatch(todoActions.fetchTodos(data));
//   };
// };

//Lấy danh sách
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodosStatus",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return data;
  }
);

//Thêm mới
export const addTodo = createAsyncThunk("todos/addTodoStatus", async (todo) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  }

  return false;
});

console.log(fetchTodos.pending.type);
console.log(fetchTodos.fulfilled.type);
console.log(fetchTodos.rejected.type);

/*
1. pending
2. fullfilled
3. reject
*/

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo, fetchTodo } from "../Redux/Actions/todoActions";
// import { todoSelector } from "../Redux/Selectors/todoSelectors";
import { todoActions, todoSelector, fetchTodos, addTodo } from "./todoSlice";

export default function Todos() {
  const dispatch = useDispatch(); //return function

  const todos = useSelector(todoSelector);

  const { todoList, status } = todos;

  // const { todoList, msg } = todos;

  //console.log(useSelector((state) => state));

  const handleAdd = () => {
    //dispatch
    //dispatch(addTodo({ title: "ABC" }));
    dispatch(
      addTodo({
        title: "Tech2 Soltutions",
        userId: 1,
        completed: false,
      })
    );
  };

  useEffect(() => {
    //dispatch(fetchTodo()); //dispatch từ UI lên Middleware
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      <button type="button" onClick={handleAdd}>
        Add
      </button>
      <h2>Todos List</h2>
      <div>
        {status === "pending" ? (
          <p>Đang tải...</p>
        ) : status === "failed" ? (
          <p>Có lỗi xảy ra</p>
        ) : (
          todoList.map((todo, index) => <h3 key={index}>{todo.title}</h3>)
        )}
      </div>
    </div>
  );
}

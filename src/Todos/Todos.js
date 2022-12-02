import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, fetchTodo } from "../Redux/Actions/todoActions";
import { todoSelector } from "../Redux/Selectors/todoSelectors";

export default function Todos() {
  const dispatch = useDispatch(); //return function

  const todos = useSelector(todoSelector);

  const { todoList, msg } = todos;

  //console.log(useSelector((state) => state));

  const handleAdd = () => {
    //dispatch

    dispatch(addTodo({ title: "ABC" }));
  };

  useEffect(() => {
    dispatch(fetchTodo()); //dispatch từ UI lên Middleware
  }, []);

  return (
    <div>
      <button type="button" onClick={handleAdd}>
        Add
      </button>
      <h2>Todos List</h2>
      <div>
        {todoList.map((todo, index) => (
          <h3 key={index}>{todo.title}</h3>
        ))}
      </div>
    </div>
  );
}

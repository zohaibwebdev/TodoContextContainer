import React from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const Todo = () => {
  const todo = useContext(TodoContext);
  console.log(todo);
  return (
    <div className="list-container">
      {todo.map((task) => (
        <div className="todo">
          <h3>{task.todo}</h3>
          <div className="buttons">
            <button className="btn-sm update">Update</button>
            <button className="btn-sm delete">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;

import React from "react";
import Add from "./Add";
import Todo from "./Todo";

const TodoContainer = () => {
  return (
    <div className="container">
      <h1 className="heading">Todo List</h1>
      <p className="lead">Advice by Dr. Awais Shahid</p>
      <Add />
      <Todo />
    </div>
  );
};

export default TodoContainer;

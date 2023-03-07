import TodoContext from "./TodoContext";
import supabase from "../supabase";
import { useEffect, useState } from "react";

const TodoContextContainer = (props) => {
  const [todo, setTodo] = useState();
  useEffect(() => {
    async function getTodos() {
      const { data: todos, error } = await supabase.from("todo").select("*");
      console.log(todos);
      setTodo(todos);
    }
    getTodos();
  }, []);
  return (
    <TodoContext.Provider value={todo}>{props.children}</TodoContext.Provider>
  );
};

export default TodoContextContainer;

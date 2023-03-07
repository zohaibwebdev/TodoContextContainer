import React from "react";
import TodoContainer from "./components/TodoContainer";
import "./index.css";
import TodoContextContainer from "./context/TodoContextContainer";
const App = () => {
  return (
    <TodoContextContainer>
      <TodoContainer />
    </TodoContextContainer>
  );
};

export default App;

import React from "react";
import "./todoCounter.css";
import { TodoContext } from "../../Context/index.context";

function TodoCounter() {
  const {
    completedTodos,
    totalTodos
  }= React.useContext(TodoContext); //the info by our context is an obj
  // { Inside brackets you can insert several PROPS at the same time }
  return (
    <h1 className="TodoCounter">
      You have finished <span>{completedTodos}</span> of <span>{totalTodos}</span>
    </h1>
  );
}

export { TodoCounter }; //Export secure by name

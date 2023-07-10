import React from "react";
import { UselocalStorage } from "../Hooks/UseLocalStorage";

function TodoProvider({ children }) {
  /* Here we can encapsulate several part of ou logic business */
  const {
    item: todos, //rename variable
    SaveModifyStateLocalstorage,
    loading,
    error,
  } = UselocalStorage(
    "INITIAL_STATE",
    []
  ); /* Here I initialize state with a custom hook with itenName and initialValue */

  const [openModal, setOpenModal] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState(""); /* Searchbar state declaration */
  //states can be used and updated y es inmutable console.log("Users have been searched:" + searchValue);

  const completedTodos = todos.filter(
    (todo) => !!todo.completed
  ).length; /* Here I get all todo's and count how manny are completed */
  const totalTodos = todos.length; /* Count total todo's */

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  }); // derivated state compuesto

  const addTodo = (text) =>{
    const newTodos = [...todos];
    newTodos.push({
      text,
      completedTodos: false
    });
    SaveModifyStateLocalstorage(newTodos);
  }

  const completeTodo = (text) => {
    const newTodos = [...todos]; // copia del estado de array de todos
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    SaveModifyStateLocalstorage(newTodos);
  }; //Function dedicated to update state

  const deleteTodo = (text) => {
    const newTodos = [...todos]; // copia del estado de array de todos
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    SaveModifyStateLocalstorage(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        //completeTodos,
        totalTodos,
        searchValue,
        completedTodos,
        setSearchValue,
        searchedTodos,
        addTodo,
        deleteTodo,
        completeTodo,
        openModal,
        setOpenModal,
      }} //To expose all components to global context
    >
      {children}
    </TodoContext.Provider>
  );
}

const TodoContext = React.createContext();

export { TodoContext, TodoProvider };

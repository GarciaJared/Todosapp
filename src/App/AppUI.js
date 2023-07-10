import React from "react";
import { TodoCounter } from "../Components/TodoCounter/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch/TodoSearch";
import { TodoList } from "../Components/TodoList/TodoList";
import { TodoButton } from "../Components/TodoButton/TodoButton";
import { TodoItem } from "../Components/TodoItem/TodoItem";
import { TodosLoading } from "../Components/Animations/TodosLoading/TodosLoading";
import { TodosError } from "../Components/Animations/TodosErrors/TodosErros";
import { EmptyTodos } from "../Components/Animations/EmptyTodos/EmptyTodos";
import { Modal } from "../Modal/Modal";
import { TodoContext } from "../Context/index.context";
import { TodoForm } from "../Components/TodoForm/TodoForm";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter /*completed={completedTodos} total={totalTodos}*/ />
      <TodoSearch /* Sending states to component */
      /* searchValue={searchValue}
        setSearchValue={setSearchValue} */
      />
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}
        {
          searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)} //function exception or functionexception
              //setTodos={setTodos}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))
          /* method .map creates a new array from older one */
          /* To use array must use key */
        }
      </TodoList>
      <TodoButton />
      {openModal && (
        /*Functionality to add TO DO'S*/
        <Modal>
        <TodoForm/>
        </Modal>
      )}
    </>
  );
}

export { AppUI };

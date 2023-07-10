import React from "react";
import '../TodoForm/todoForm.css';
import { TodoContext } from "../../Context/index.context";

function TodoForm() {
    const { addTodo, setOpenModal}= React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState(''); // local state

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onCancel = () =>{
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
      };
  return (
    <form onSubmit={onSubmit}>
    <label>Esribe tu nuevo TODO</label>
    <textarea
      placeholder="Read a new book"
      value={newTodoValue}
      onChange={onChange}
    />
    <div className="TodoForm-buttonContainer">
      <button
        type="button"
        className="TodoForm-button TodoForm-button--cancel"
        onClick={onCancel}
      >Cancelar</button>
      <button
        type="submit"
        className="TodoForm-button TodoForm-button--add"
      >Añadir</button>
    </div>
  </form>
  );
}
export { TodoForm };
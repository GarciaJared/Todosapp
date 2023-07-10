import React from "react";
import { IoAdd } from "react-icons/io5";import { TodoContext } from "../../Context/index.context";
import "./todoButton.css";

function TodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);

  return (
    <button
      className={"newTodo"}
      onClick={() => {
        setOpenModal(!openModal);
      }}
    >
      <IoAdd className="icon" />
    </button>
  );
}
export { TodoButton }; //Export secure by name

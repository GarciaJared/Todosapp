import "./todoList.css";
function TodoList({ children }) {
  return <ul className="TodoList">{children}</ul>;
}
export { TodoList }; //Export secure by name
/*
  function TodoList(props) {
    return(
      <ul>
        {props.children}
      </ul>
    );
}  
  */

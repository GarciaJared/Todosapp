import "./todoItem.css";
import { BsCheckLg } from "react-icons/bs";
//BsCheckLg
function TodoItem({ text, completed, onComplete, onDelete }) {
  // instead use props I declared the prop created to fill, I mmean instead use props key I over
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check-active"}`}
        onClick={onComplete}
      >
        <BsCheckLg />
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p-completed"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        x
      </span>
    </li>
  );
}

export { TodoItem };

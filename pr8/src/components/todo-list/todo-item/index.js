import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { useState } from "react";

/**
 *
 * @param {Object} todo
 * @param onChangeTodo
 * @param onDeleteTodo
 * @param onChange
 * @param {string} todo.text
 * @param {Date} todo.createdAt
 * @returns
 */
const ToDoItemComponent = ({ todo, onChangeTodo, onDeleteTodo }) => {
  const title = todo.title || "Text of todo item";
  const date = (todo.createdAt || new Date()).toDateString();

  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <div>
          <input className="form-check-input" type="checkbox" value="option1" />
          <label className="form-check-label" form="inlineCheckbox1"></label>
          <input
            value={todo.title}
            onChange={(e) => {
              onChangeTodo({
                ...todo,
                title: e.target.value,
              });
            }}
          />
        </div>
        <span className="todo-text">{date}</span>

        <span className="span-button" onClick={() => setIsEditing(false)}>
          <FontAwesomeIcon icon={faPen} />
        </span>
      </>
    );
  } else {
    todoContent = (
      <>
        <div>
          <input className="form-check-input" type="checkbox" value="option1" />
          <label className="form-check-label" form="inlineCheckbox1"></label>
          <span className="todo-text">{title}</span>
        </div>
        <span className="todo-text">{date}</span>
        <span className="span-button" onClick={() => setIsEditing(true)}>
          <FontAwesomeIcon icon={faPen} />
        </span>
      </>
    );
  }

  return (
    <div className="todo-item">
      {todoContent}
      <span className="span-button" onClick={() => onDeleteTodo(todo.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </div>
  );
};

export default ToDoItemComponent;

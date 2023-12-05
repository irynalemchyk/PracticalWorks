import "./style.css";
import { useState } from "react";
import { logDOM } from "@testing-library/react";

const ToDoInputComponent = ({ onAddTodo, onSearchTodo, onBackToOld }) => {
  const [title, setTitle] = useState("");

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Add item..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="add"
        onClick={(e) => {
          e.preventDefault();
          onAddTodo(title);
          setTitle("");
        }}
      >
        Add
      </button>
      <button type="button" className="add hide">
        Update
      </button>
      <div id="search">
        <input type="text" placeholder="Search" id="searchbox" />
        <span
          onClick={(e) => {
            e.preventDefault();
            onBackToOld();
            console.log(`skdjsfhdjmwek`);
          }}
        >
          X
        </span>
      </div>
      <button onClick={onSearchTodo} type="button">
        Search
      </button>
    </div>
  );
};

export default ToDoInputComponent;

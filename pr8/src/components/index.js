import "./style.css";
import ToDoInputComponent from "./todo-input";
import ToDoListComponent from "./todo-list";
import { useState } from "react";

let nextId = 1;
const initialTodos = [{ id: 0, title: "Text of todo item" }];

function App() {
  let [todos, setTodos] = useState(initialTodos);
  let [searchTodos, setSearchTodos] = useState();
  let [status, setStatus] = useState(true);

  let [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        date: new Date().toDateString(),
      },
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      }),
    );
  }

  function handleSearch() {
    setSearchTodos(todos);
    console.log(searchTodos);
    setTodos(
      todos.filter((t) =>
        t.title.includes(document.getElementById("searchbox").value),
      ),
    );
    setStatus(false);
  }

  function handleOldTodos() {
    setStatus(true);
  }

  function TodoListComp() {
    if (status) {
      return (
        <ToDoListComponent
          todos={todos}
          onChangeTodo={handleChangeTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      );
    } else {
      return (
        <ToDoListComponent
          todos={searchTodos}
          onChangeTodo={handleChangeTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      );
    }
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  return (
    <div className="App">
      <ToDoInputComponent
        onAddTodo={handleAddTodo}
        onSearchTodo={handleSearch}
        onBackToOld={handleOldTodos}
      />
      <TodoListComp />
    </div>
  );
}

export default App;

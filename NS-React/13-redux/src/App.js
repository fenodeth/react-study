import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setComplete,
  setFilter,
  fetchThunk,
  selectTodos,
  selectStatus,
} from "./features/todos";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={() => dispatch(setComplete(todo))}
      >
        {todo.title}
      </li>
    </>
  );
};

const App = () => {
  const dispatch = useDispatch();
  // funcion identidad recibe un argumento y devuelve el mismo (x) => x
  const todos = useSelector(selectTodos);
  const status = useSelector(selectStatus);

  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    const id = Math.random().toString(36);
    const todo = { title: value, completed: false, id };
    dispatch({ type: "todo/add", payload: todo });
  };

  if (status.loading === "pending") {
    return <p>Cargando...</p>;
  }
  if (status.loading === "rejected") {
    return <p>{status.error}</p>;
  }

  return (
    <>
      <div>
        <form onSubmit={submit}>
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </form>
        <button onClick={() => dispatch(setFilter("all"))}>
          Mostrar TODOs
        </button>
        <button onClick={() => dispatch(setFilter("complete"))}>
          Completados
        </button>
        <button onClick={() => dispatch(setFilter("incomplete"))}>
          Incompletos
        </button>
        <button onClick={() => dispatch(fetchThunk())}>Fetch</button>
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;

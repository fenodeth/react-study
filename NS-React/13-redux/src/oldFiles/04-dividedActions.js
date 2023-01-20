import React, { useState } from "react";
import { combineReducers } from "redux";
import { useDispatch, useSelector } from "react-redux";

export const filterReducer = (state = "all", action) => {
  switch (action.type) {
    case "filter/set":
      return action.payload;
    default:
      return state;
  }
};

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "todo/add":
      return state.concat({ ...action.payload });
    case "todo/complete": {
      const newTodos = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return newTodos;
    }
    default:
      return state;
  }
};

// combina todos los reducers de la aplicacion
export const reducer = combineReducers({
  entities: todosReducer,
  filter: filterReducer,
});

const selectTodos = (state) => {
  const { entities, filter } = state;

  if (filter === "complete") {
    return entities.filter((todo) => todo.completed);
  }
  if (filter === "incomplete") {
    return entities.filter((todo) => !todo.completed);
  }

  return entities;
};

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={() => dispatch({ type: "todo/complete", payload: todo })}
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
        <button
          onClick={() => dispatch({ type: "filter/set", payload: "all" })}
        >
          Mostrar TODOs
        </button>
        <button
          onClick={() => dispatch({ type: "filter/set", payload: "complete" })}
        >
          Completados
        </button>
        <button
          onClick={() =>
            dispatch({ type: "filter/set", payload: "incomplete" })
          }
        >
          Incompletos
        </button>
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

import React, { useState } from "react";
import { combineReducers } from "redux";
import { useDispatch, useSelector } from "react-redux";

// todas las funciones de redux deben ser puras, por lo tanto, no pueden llamar acciones asíncronas
// a través de middlewares podemos interceptar los objetos que estamos despachando en redux
export const asyncMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

export const fetchThunk = () => async (dispatch) => {
  dispatch({ type: "todos/pending" });
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    const todos = data.slice(0, 10);
    dispatch({ type: "todos/fulfilled", payload: todos });
    console.log(todos);
  } catch (error) {
    dispatch({ type: "todos/error", error: error.message });
  }
};

export const filterReducer = (state = "all", action) => {
  switch (action.type) {
    case "filter/set":
      return action.payload;
    default:
      return state;
  }
};

// al utilizar strings se pueden manejar mayor cantidad de estados
// ex idle : no ha traido datos | pending: trayendo datos | succeeded: exito | error: rejected
const initialFetching = { loading: "idle", error: null };
export const fetchingReducer = (state = initialFetching, action) => {
  switch (action.type) {
    case "todos/pending": {
      return { ...state, loading: "pending" };
    }
    case "todos/fulfilled": {
      return { ...state, loading: "succeeded" };
    }
    case "todos/error": {
      return { error: action.error, loading: "rejected" };
    }
    default:
      return state;
  }
};

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "todo/add":
      return state.concat({ ...action.payload });
    case "todos/fulfilled": {
      return action.payload;
    }
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
  todos: combineReducers({ entities: todosReducer, status: fetchingReducer }),
  filter: filterReducer,
});

const selectTodos = (state) => {
  const {
    todos: { entities },
    filter,
  } = state;

  if (filter === "complete") {
    return entities.filter((todo) => todo.completed);
  }
  if (filter === "incomplete") {
    return entities.filter((todo) => !todo.completed);
  }

  return entities;
};

const selectStatus = (state) => state.todos.status;

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

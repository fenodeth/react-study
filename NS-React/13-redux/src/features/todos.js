import { combineReducers } from "redux";
import {
  mac,
  mat,
  asyncMac,
  makeFetchingReducer,
  makeSetReducer,
  reduceReducers,
  makeCrudReducer,
} from "./utils";

const asyncTodos = mat("todos");

const [setPending, setFulfilled, setError] = asyncMac(asyncTodos);

// // action creators
// export const setPending = mac("todos/pending");
// // export const setPending = () => {
// //     return {
// //       type: "todos/pending",
// //     };
// //   };
// export const setFulfilled = mac("todos/fulfilled", "payload");
// // export const setFulfilled = (payload) => ({ type: "todos/fulfilled", payload });
// export const setError = mac("todos/error", "error");
// // export const setError = (e) => ({ type: "todos/error", error: e.message });
export const setComplete = mac("todo/complete", "payload");
// export const setComplete = (payload) => ({ type: "todo/complete", payload });
export const setFilter = mac("filter/set", "payload");
// export const setFilter = (payload) => ({ type: "filter/set", payload });

export const fetchThunk = () => async (dispatch) => {
  dispatch(setPending());
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    const todos = data.slice(0, 10);
    dispatch(setFulfilled(todos));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const filterReducer = makeSetReducer(["filter/set"]);

export const fetchingReducer = makeFetchingReducer(asyncTodos);

const fulfilledReducer = makeSetReducer(["todos/fulfilled"]);

const crudReducer = makeCrudReducer(["todo/add", "todo/complete"]);

const todosReducer = reduceReducers(crudReducer, fulfilledReducer);

// combina todos los reducers de la aplicacion
export const reducer = combineReducers({
  todos: combineReducers({ entities: todosReducer, status: fetchingReducer }),
  filter: filterReducer,
});

export const selectTodos = (state) => {
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

export const selectStatus = (state) => state.todos.status;

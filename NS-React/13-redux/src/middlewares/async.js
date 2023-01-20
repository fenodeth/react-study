// todas las funciones de redux deben ser puras, por lo tanto, no pueden llamar acciones asíncronas
// a través de middlewares podemos interceptar los objetos que estamos despachando en redux
export const asyncMiddleware = (store) => (next) => (action) => {
    if (typeof action === "function") {
      return action(store.dispatch, store.getState);
    }
    return next(action);
  };
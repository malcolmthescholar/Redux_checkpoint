// actions.js
let nextTodoId = 0;

export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: {
    id: nextTodoId++,
    ...todo,
  },
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  payload: { id },
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: { id },
});

export const editTodo = (id, description) => ({
  type: "EDIT_TODO",
  payload: { id, description },
});

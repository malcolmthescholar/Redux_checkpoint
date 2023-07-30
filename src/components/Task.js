// Task.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, editTodo } from "../actions";

const Task = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(
    todo.description
  );
  const dispatch = useDispatch();

  const handleToggleTodo = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (updatedDescription.trim() === "") return;
    dispatch(editTodo(todo.id, updatedDescription));
    setIsEditing(false);
  };

  return (
    <li>
      {!isEditing ? (
        <div>
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={handleToggleTodo}
          />
          <span
            style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
          >
            {todo.description}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      ) : (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <button type="submit">Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      )}
    </li>
  );
};

export default Task;

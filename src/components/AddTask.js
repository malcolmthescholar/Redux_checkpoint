// AddTask.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const AddTask = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    dispatch(addTodo({ description: newTodo, isDone: false }));
    setNewTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new task..."
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default AddTask;

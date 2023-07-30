// ListTask.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const [filter, setFilter] = useState("all");

  const todos = useSelector((state) => state.todos);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "done") return todo.isDone;
    if (filter === "notDone") return !todo.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("done")}>Done</button>
        <button onClick={() => setFilter("notDone")}>Not Done</button>
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <Task key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;

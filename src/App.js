import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import Task from "./components/Task";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <AddTask />
      <ListTask />
      <Task />
    </div>
  );
}

export default App;

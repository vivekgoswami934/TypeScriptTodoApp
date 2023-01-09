import React, { useState } from "react";
import "./App.css";
import InputField from "./Components/InputField";
import { Todo } from "./Components/model";
import TodoList from "./Components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      const payload = {
        id: Date.now(),
        todo: todo,
        isDone: false,
      };

      setTodos([...todos, payload]);
      setTodo("")
    }
  };
// console.log(todos)
  return (
    <div className="App">
      <span className="heading">Typescript Todo App</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

     <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;

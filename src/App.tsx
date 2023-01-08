import React from "react";
import "./App.css";
import InputField from "./Components/InputField";

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Typescript Todo App</span>
      <InputField />
    </div>
  );
};

export default App;

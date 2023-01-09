import React, { useRef } from "react";
import "./InputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd : (e : React.FormEvent)=>void;
}

const InputField : React.FC<Props> = ({ todo, setTodo , handleAdd }) => {
   
   const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className="input" onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur()
    }}>
      <input
       ref = {inputRef}
        type="input"
        placeholder="Add your Task..."
        className="input__Box"
        value = {todo}
        onChange={(e)=> setTodo(e.target.value)}
      />
      <button type="submit" className="input__Submit">
        Add
      </button>
    </form>
  );
};

export default InputField;

import {useState} from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]); 
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    if(toDo === ""){
      return;
    }
    setTodos(currentArray => [toDo, ...currentArray]);
    setTodo("");
  };
  console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="write your to do.." />
        <button>input to do .</button>

      </form>

    </div>
  );
}

export default App;

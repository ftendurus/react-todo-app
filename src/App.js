import './App.css';
import Form from './components/Form';
import React, { useState ,useEffect} from 'react';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, [])
  

  useEffect(() => {
    filterHandler(todos);
    saveLocalTodos();
    }
  , [todos, status]) //eslint-disable-line
  

  const filterHandler=()=>{
    switch (status) {
      case "completed":
        setfilteredTodos(todos.filter((todo)=> todo.completed === true));
        break;
      case "uncompleted":
        setfilteredTodos(todos.filter((todo)=>todo.completed === false));
        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  }

//! save to local

const saveLocalTodos = () => {
  if(todos.length !== 0){        
    localStorage.setItem("todos", JSON.stringify(todos))
  }   
  } //eslint-disable-next-line

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal)
    }
  }//eslint-disable-line

  return (
    <div className="App">
      <header><h1>MY TODO LIST</h1></header>


      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos = {todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos = {setTodos}
        filteredTodos = {filteredTodos}
      />
    </div>
  );
}

export default App;

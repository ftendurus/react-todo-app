import './App.css';
import Form from './components/Form';
import React, { useState } from 'react';
function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <header><h1>MY TODO LIST{inputText}</h1></header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
      />
    </div>
  );
}

export default App;

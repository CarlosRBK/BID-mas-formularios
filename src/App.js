import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';


function App() {
  const [ state, setState ] = useState({
    firstName : "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }); 
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;


import './App.css';
/*import Table from './table';
import Pav from './components';
import Component from './components';
import Counter from './class';
import Learningprops from './function';
import  Greet from './components';
import Hello from './components';
import Escn from './expensive';
import Hi from './practisce';
import Welcome from './practisce';
import Tar from './ternary';
import Fun from './practisce';*/

import React, {useState}  from 'react'
import TodoList from './project/TodoList';
const App = () =>{ 
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);
  
  
  const changeHandler = e =>{
    setTask(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
  }
  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    setTodos(newTodos)
  }

  /*var Myfun= function(){
    alert("hiii")   
  }*/
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Todo Management Application</h5>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" name="task" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <input type="submit" name="add" value="add"/>
            </form>
            <TodoList  todolist={todos} deleteHandler={deleteHandler}/>
          </div> 
        </div>
      </center>
      {/*function MyForm() {
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
    
  
}
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render;

<div>chiken</div>*/}
       
      {/*<Escn clickhandler={Myfun}/>

      <counter>0</counter>
      <p name="kala"lastname="hello">start</p>
      <Tar onClick="button"></Tar>*/}

      
    
      {/*<Table/>
      <Pav/>
      <Component/>
      <Counter/>
      <Learningprops/>
      <Greet/>
      <Hello/>
      <Escn/>
      <Hi/>
      <Welcome/>
      <Tar/>
      <Fun/>*/}
      
    </div>
  );
}

export default App;

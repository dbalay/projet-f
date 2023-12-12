
import './App.css';
import {useRef, useState} from "react" ;

function App() {
  const[todos, setTodos]= useState([]);
  const inputRef=useRef();
  const handleAddTodo = ()=> {
  const text = inputRef.current.value;
    // console.log(text);
    const newItem ={completed:false , text} ;
    setTodos([...todos,newItem] );
    inputRef.current.value= "" ;
   };
    // console.log(handleItemDone) = () =>{}


   const handleItemDone =(index) =>{
       const newTodos =[...todos];
      newTodos[index].completed= !newTodos[index].completed;
      setTodos(newTodos);

   };


   const handleDeleteItem=(index) =>{
    const newTodos =[...todos] ;
    newTodos.splice (index,1)
setTodos(newTodos)
   }


  return (
    <div className="App">
      <h2>TO DO LIST</h2>
      <div className="to-do-container">
      <ul>
      {todos.map (({text,completed},index) => {
        return (
          <div className='item'>
        <li className={completed ? "done" :""} 
        key={index} 
        onClick={()=>handleItemDone(index)}>
          {text}
        </li>
        <span onClick={() => handleDeleteItem(index)}> ❌ </span> 
        </div>
        );
      })}
      </ul>
      <input ref={inputRef} placeholder='Enter item....'/>
      <button onClick={handleAddTodo}>Add</button>
     
    </div>
    </div>
  );
}

export default App;

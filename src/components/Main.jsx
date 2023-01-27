import React,{useState} from 'react'
import { useEffect } from 'react';
import Task from './Task'
const Main = () => {
const initialArray = localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")): [];  
  const [taskValue, setTaskValue] = useState("");
  const [task, setTask] = useState(initialArray);
  // function for Add Item add Item 
  const addTask = (e) => {
    e.preventDefault()
    if (taskValue !== "") {
    setTask([...task, {taskValue : taskValue}]);
    setTaskValue("");
    }
  }
//function for Delete Item 
  const handleDelete = (i) => {
   const filteredTask = task.filter((value, index)=>{
     return i !== index;
    })
  
    setTask(filteredTask)
  }
  // use for store data in local storange on task change
  useEffect(()=>{
    localStorage.setItem("task", JSON.stringify(task))
  }, [task])
  return (
    <>
    <div className='main'>
      <div className="container">
            <form onSubmit={addTask}>
        <div className='inall'>
            <input  className="in" type="text" name="" placeholder='Enter Your task '
            value={taskValue}
            onChange={(e)=>{
             setTaskValue(e.target.value);
            }} />
            
        </div>
        <div className='btn-div'>
            <button className='btn' type='submit' >Add Task</button>
        </div>
        </form>
        
        {task &&
          task.map((currElm, i)=>{
            return(
          <div className='task-div'key={i} >
        <Task  taskValue={currElm.taskValue} handleDelete={handleDelete} i = {i}/>
        </div>
        )
      })
       }
       
      </div>
    </div>
    </>
  )
}

export default Main

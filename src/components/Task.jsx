import React from 'react'

const Task = ({taskValue, handleDelete, i}) => {
  return (
    <div className='task'>
     <h5><strong>Task</strong> : {taskValue}</h5>
     <button className='btn-del' onClick={()=>{
      handleDelete(i)
     }}>delete</button>
    </div>
  )
}

export default Task

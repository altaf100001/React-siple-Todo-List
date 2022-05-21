import React from 'react'

import Todo from "./Todo"

export const Todolist = ({todo ,onDelete}) => {

    

    const [isCompleted,setisCompleted] = React.useState("")
    
    // console.log(todo)
    
  return (
  
        

    <div >

        
    <div className='item'>

    <button onClick={() => onDelete(todo.id)} className="btn"><i class="fa-solid fa-minus"></i></button>
        
    
  <h1 className={isCompleted ? "striked" : ""} >{todo.value} </h1>

  <input className='check' type="checkbox" onChange={(e)=> {setisCompleted(e.target.checked) }}/>
  

  </div>

    </div>

    
  )

  
}

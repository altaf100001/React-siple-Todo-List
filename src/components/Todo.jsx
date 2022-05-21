import React from 'react'

import {v4 as uuid} from "uuid"
import { Todolist } from './Todolist'

export const Todo = () => {

    const [todos,setTodos] = React.useState([])
   const[inputval,setinputval]=React.useState("")
   const[newtodo,setnew] = React.useState("")

   const onDelete =(id)=>{
let newtodo=  todos.filter((todo=>todo.id!=id))
setTodos(newtodo)
   }


   const handlechange = (e) =>{
    setinputval(e.target.value)
   }

    const handleadd = () =>{
        
    

        setTodos([...todos, {
            id:uuid(),
            value:inputval,
            isCompleted:"false"
        },
      ])
      setinputval("")
    }

    

  return (
    <div className='container' >

{todos.map((todo)=>(

<Todolist todo={todo} key= {todo.id} onDelete={onDelete}/>))}

  <div className='inp'>
  <input placeholder='Write Something' type = "text"  value={inputval} onChange = {handlechange}/>

<button  className='btn' onClick={handleadd}><i class="fa-solid fa-plus"></i></button>
  </div>

 

    </div>

  )
}

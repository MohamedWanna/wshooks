import React from 'react'
import ToDo from './ToDo'

const ListToDo = ({task,handledelete}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap',}}>
        {
            task.map(
                (el,i)=> <ToDo el= {el} key= {i} handledelete={handledelete} />
            )
        }
    </div>
  )
}

export default ListToDo
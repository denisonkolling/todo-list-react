import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Todo = ({task}) => {
  return (
    <div className='Todo'>
        <p onClick={()=> toggleComplete(task.id)}
        className={`${task.completed ? 'completed' : ""}`}
        >{task.task}</p>
        <div>
          <FontAwesomeIcon icon={faPenSquare} />
          <FontAwesomeIcon icon={faTrash} />
        </div>


    </div>
  )
}

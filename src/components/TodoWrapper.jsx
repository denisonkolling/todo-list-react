import React from 'react';
import { TodoForm } from './TodoForm';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
uuidv4();

export const TodoWrapper = () => {

	const [list, setList] = useState([]);

	const addTask = task => {
		setList([
			...list,
			{ id: uuidv4(), task: task, completed: false, isEditing: false },
		]);
    console.log(list)
	};

  const toggleComplete = id => {
    setList(list.map(task => task.id === id ? {...task, completed: !completed} : task))
  }

	return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
			<TodoForm addTask={addTask} />
      {list.map((task, index)=> (
        <Todo task={task} key={index} toggComplete={toggleComplete} />
      ))}
		</div>
	);
};

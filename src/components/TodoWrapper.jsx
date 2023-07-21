import React from 'react';
import { TodoForm } from './TodoForm';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {
	const [list, setList] = useState([]);

	const addTask = (task) => {
		if (task == '' || task == ' ') {
			alert('Write your task...');
		} else {
			setList([
				...list,
				{ id: uuidv4(), task: task, completed: false, isEditing: false },
			]);
		}
	};

	const toggleComplete = (id) => {
		setList(
			list.map((task) =>
				task.id === id ? { ...task, completed: !completed } : task
			)
		);
	};

	const deleteTask = (id) => {
		setList(list.filter((task) => task.id !== id));
	};

	const editTask = (id) => {
		setList(
			list.map((task) =>
				task.id === id ? { ...task, isEditing: !task.isEditing } : task
			)
		);
	};

	const updateTask = (task, id) => {
		setList(
			list.map((tsk) =>
				tsk.id === id ? { ...tsk, task, isEditing: !tsk.isEditing } : tsk
			)
		);
	};

	return (
		<div className="TodoWrapper">
			<h1>Get Things Done!</h1>
			<TodoForm addTask={addTask} />
			{list.map((task, index) =>
				task.isEditing ? (
					<EditTodoForm key={index} editTask={updateTask} task={task} />
				) : (
					<Todo
						task={task}
						key={index}
						toggleComplete={toggleComplete}
						deleteTask={deleteTask}
						editTask={editTask}
					/>
				)
			)}
		</div>
	);
};

import { useState } from "react";

export const TodoForm = ({addTask}) => {

const [value, setValue] = useState("")


const handleSubmit = e => {
  e.preventDefault();
  addTask(value)
  setValue('')
}

	return (
		<form className="TodoForm" onSubmit={handleSubmit}>
			<input
				type="text"
				className="todo-input"
				placeholder="What is the task today?"
        value={value}
        onChange={(e)=> setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'>Add Task</button>
		</form>
	);
};

import React from 'react';
import { useState, useContext } from 'react';
import TodoContext from './context/TodoContext';
import { FaPlus } from 'react-icons/fa';

function TodoForm() {
	const { addTodo } = useContext(TodoContext);
	const [text, setText] = useState('');
	const handleChange = (e) => {
		setText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			console.log('Please enter something');
		} else {
			addTodo(text);
			setText('');
		}
	};
	return (
		<div className="todoForm">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="todo"
					id="todo"
					value={text}
					onChange={handleChange}
				/>
				<button type="submit">
					<FaPlus size={24} />
				</button>
			</form>
		</div>
	);
}

export default TodoForm;

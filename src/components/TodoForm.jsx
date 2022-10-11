import { useState, useContext } from 'react';
import TodoContext from './context/TodoContext';

function TodoForm() {
	const { sayHello } = useContext(TodoContext);
	const [text, setText] = useState('');
	const handleChange = (e) => {
		setText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			console.log('Please enter something');
		} else {
			sayHello();
			setText('');
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="todo"
					id="todo"
					value={text}
					onChange={handleChange}
				/>
				<button type="submit">Add</button>
			</form>
		</div>
	);
}

export default TodoForm;

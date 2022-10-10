import { useState } from 'react';

function TodoForm() {
	const [text, setText] = useState('');
	const handleChange = (e) => {
		setText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			console.log('Please enter something');
		} else {
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

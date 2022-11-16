import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useContext } from 'react';
import TodoContext from './context/TodoContext';
import PropTypes from 'prop-types';

function TodoItem({ id, text }) {
	const { removeTodo } = useContext(TodoContext);
	const handleClick = (e) => {
		removeTodo(e.currentTarget.id);
	};
	return (
		<li className="todoItem">
			{text}{' '}
			<button id={id} onClick={handleClick}>
				<FaTimes size={24} />
			</button>
		</li>
	);
}

TodoItem.propTypes = {
	id: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
};

export default TodoItem;

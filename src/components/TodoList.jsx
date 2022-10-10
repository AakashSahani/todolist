import TodoItem from './TodoItem';
import TodoData from '../data/TodoData';
function TodoList() {
	return (
		<ul>
			{TodoData.map((todo) => (
				<TodoItem key={todo.id} text={todo.text} />
			))}
		</ul>
	);
}

export default TodoList;

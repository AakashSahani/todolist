import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { TodoProvider } from './components/context/TodoContext';

function App() {
	return (
		<TodoProvider>
			<Header />
			<main>
				<TodoForm />
				<TodoList />
			</main>
			<Footer />
		</TodoProvider>
	);
}

export default App;

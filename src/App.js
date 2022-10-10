import Header from './components/Header';
import Footer from './components/Footer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<TodoForm />
				<TodoList />
			</main>
			<Footer />
		</div>
	);
}

export default App;

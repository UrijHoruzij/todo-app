import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Context } from '@/components';
import { useState } from 'react';
import { ITodo } from '../components/@types.todo';

const App = ({ Component, pageProps }: AppProps) => {
	const [todos, setTodos] = useState<ITodo[]>([]);
	const addTodo = (todo: ITodo) => {
		if (todo.title !== '') setTodos((prev) => [...prev, todo]);
	};
	const updateTodo = (id: number, title: string) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.title = title;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};
	const removeTodo = (id: number) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	};
	const updateStatus = (id: number) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.status = !todo.status;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};
	return (
		<Context.Provider value={{ todos, addTodo, updateTodo, removeTodo, updateStatus }}>
			<Component {...pageProps} />
		</Context.Provider>
	);
};
export default App;

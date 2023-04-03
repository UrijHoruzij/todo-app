import Head from 'next/head';
import { Button, Context, Input, Card, Header, Task, Title, Divider, Modal } from '@/components/';
import { useContext, useState } from 'react';
import { TodoContextType, ITodo } from '@/components/@types.todo';
import styles from '@/styles/Home.module.css';

const Home = () => {
	const { todos, addTodo, updateTodo, removeTodo, updateStatus } = useContext(Context) as TodoContextType;
	const [edit, setEdit] = useState<ITodo | null>(null);
	const [id, setId] = useState<number>(1);
	const [title, setTitle] = useState<string>('');
	const [modal, setModal] = useState<boolean>(false);
	const titleHandler = (e: any) => {
		e.preventDefault();
		setTitle(e.target.value);
	};
	const hide = () => {
		setModal(false);
	};
	return (
		<>
			<Head>
				<title>TODO App</title>
				<meta name="description" content="Todo app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Modal title="Add task" isShow={modal} hide={hide}>
					<Input value={title} onChange={(e: any) => titleHandler(e)} />
					{edit ? (
						<Button
							onClick={() => {
								updateTodo(edit.id, title);
								setTitle('');
								setEdit(null);
							}}>
							Update
						</Button>
					) : (
						<Button
							onClick={() => {
								addTodo({ id, title, status: false } as ITodo);
								setId((prevId) => prevId + 1);
								setTitle('');
								setModal(false);
							}}>
							Add
						</Button>
					)}
				</Modal>
				<Card>
					<Header>
						<Title>Tasks</Title>
						<Button
							square
							onClick={() => {
								setModal(true);
							}}>
							<svg width="18" height="17" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6 1V10" className={styles.icon} />
								<path d="M1.5 5.5L10.5 5.5" className={styles.icon} />
							</svg>
						</Button>
					</Header>
					<Divider />
					<div>
						{todos?.map((todo: ITodo) => (
							<div key={todo.id}>
								<Task title={todo.title} status={todo.status} updateStatus={() => updateStatus(todo.id)}></Task>
								{/* 								
								<Button
									onClick={() => {
										setEdit(todo);
										setTitle(todo.title);
									}}>
									Edit
								</Button>
								<Button onClick={() => {}}>V</Button>
								<Button
									onClick={() => {
										removeTodo(todo.id);
									}}>
									Delete
								</Button> */}
							</div>
						))}
					</div>
				</Card>
			</main>
		</>
	);
};
export default Home;

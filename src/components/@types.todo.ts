export interface ITodo {
	id: number;
	title: string;
	status: boolean;
}

export type TodoContextType = {
	todos: ITodo[];
	addTodo: (todo: ITodo) => void;
	updateTodo: (id: number, title: string) => void;
	removeTodo: (id: number) => void;
	updateStatus: (id: number) => void;
};

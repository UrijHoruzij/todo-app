import {createContext} from 'react';
import { TodoContextType } from '../@types.todo';

const Context = createContext<TodoContextType | []>([]);
export default Context
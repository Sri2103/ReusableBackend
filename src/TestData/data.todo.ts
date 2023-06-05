import { ToDO, TodoStatus } from '../api/todo/todo.validation';

export const todo: ToDO[] = [
  {
    id: '1',
    text: 'Todo 1',
    status: TodoStatus.DONE,
  },
  {
    id: '1',
    text: 'Run daily for 15 minutes',
    status: TodoStatus.PENDING,
  },
  {
    id: '2',
    text: 'Buy coffee',
    status: TodoStatus.PENDING,
  },
];

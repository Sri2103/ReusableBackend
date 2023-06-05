import { todo } from '../../TestData/data.todo';
import { Service } from 'typedi';
import { ToDO } from './todo.validation';

export function getAll() {
  return todo;
}

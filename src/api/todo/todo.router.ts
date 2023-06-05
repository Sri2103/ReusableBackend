import { Routes } from '../../interfaces/routes.interface';
import { Router } from 'express';
import { BaseRouter } from '../../utils/BaseRouter';
import { todoController } from './todo.controller';

class TodoRouter implements Routes {
  public router = Router();
  public path: string = '/api/todo';
  public todoController = new todoController();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}`, this.todoController.getAllTodo);
  }
}

export const todoRouter = new TodoRouter();

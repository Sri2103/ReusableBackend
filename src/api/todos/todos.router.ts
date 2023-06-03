import { Router } from 'express';
import { BaseRouter } from '../../utils/BaseRouter';
import { todosController } from './todos.controller';

class TOdosRouter extends BaseRouter {
  constructor() {
    super();
  }
  addRoutes(): void {
    this.router.get('/', todosController.getAllTodos);
    this.router.get('/:id', todosController.getTodoById);
  }

  returnApiEndpointRouter(): Router {
    this.addRoutes();
    return this.router;
  }
}

export const todosRouter = new TOdosRouter().returnApiEndpointRouter;

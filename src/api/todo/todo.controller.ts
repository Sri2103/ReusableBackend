import { Request, Response } from 'express';
import { Container } from 'typedi';
import { getAll } from './todo.service';
export class todoController {
  public getAllTodo(req: Request, res: Response) {
    try {
      const todo = getAll();
      return res.status(200).json(todo);
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  }
}

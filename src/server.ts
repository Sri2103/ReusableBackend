import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { todoRouter } from './api/todo/todo.router';
import morgan from 'morgan';

export class HttpServer {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.addMiddleware();
    this.addRoutes();
  }

  private addMiddleware() {
    this.app.use(express.json());
    // for parsing application/x-www-form-urlencoded
    this.app.use(express.urlencoded({ extended: true }));
    // add cors
    this.app.use(cors());
    // add security to the server using helmet middleware
  }
  private addRoutes() {
    this.app.get('/', (req, res) => {
      return res.status(200).json({
        message: 'Success',
        statusCode: 200,
        status: true,
      });
    });
    this.app.use('/', todoRouter.router);
  }
}

const expressServer = new HttpServer();
export default expressServer.app;

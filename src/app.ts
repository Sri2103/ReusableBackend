import * as http from 'http';
import expressServer from './server';
import mongoose, { ConnectOptions } from 'mongoose';
import 'dotenv/config';
import { dbConnection } from './Database';
class Main {
  private server: http.Server;
  private port = 5000;

  constructor() {
    this.server = http.createServer(expressServer);
    this.startServer();
    this.handleServerShutDown();
  }

  private stopServer() {
    this.server.close(() => {
      console.log('EXPRESS SERVER IS CLOSED');
      mongoose.disconnect().then(() => {
        console.log('DATABASE DISCONNECTED');
        process.exit(0);
      });
    });
  }
  private handleServerShutDown() {
    // Ctrl + C
    process.on('SIGINT', () => {
      console.log('SIGINT RECEIVED, SHUTTING DOWN');
      this.stopServer();
    });

    // kill command
    process.on('SIGTERM', () => {
      console.log('SIGTERM RECEIVED, SHUTTING DOWN');
      this.stopServer();
    });
  }

  private startServer() {
    this.server.listen(this.port, async () => {
      console.log(`Server is running on port ${this.port}`);
      //   await mongoose
      //     .connect(dbConnection.url, dbConnection.options as ConnectOptions)
      //     .then(() => console.log('connected to DB'))
      //     .catch(err => console.error('Unable to connect', err));
    });
  }
}

new Main();

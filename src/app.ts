import * as http from 'http';
import expressServer from './server';
import 'dotenv/config';
class Main {
  private server: http.Server;
  private port = 6000;

  constructor() {
    this.server = http.createServer(expressServer);
    this.startServer();
  }

  private startServer() {
    this.server.listen(this.port, async () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

new Main();

import { DB_HOST, DB_PORT, DB_DATABASE } from '../config';

export const dbConnection = {
  //   url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  url: `mongodb+srv://harshav:harshav@cluster0.w6nhs.mongodb.net/testDB`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

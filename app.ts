// Call in installed dependencies
import express from "express";
import { connectMongoDb } from "./src/connection/mongo";
import routes from './src/routes/index.route'
import bodyParser from 'body-parser'
// set up express app
const app = express();
connectMongoDb();
// set up port number
const port = 5035;
// set up home route
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(routes)

app.listen(port, () => {
  console.log(`Our server is live on ${port}. Yay!`);
});

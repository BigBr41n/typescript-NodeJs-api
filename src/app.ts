import express from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";

//import routes
import routes from "./routes";

//config
const PORT = config.get<number>("port");
const hostname = config.get<string>("hostname");

//db connection
connect();

//app instance
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
routes(app);

//port listening
app.listen(PORT, hostname, async () => {
  logger.info(`listening on : ${PORT}`);
});

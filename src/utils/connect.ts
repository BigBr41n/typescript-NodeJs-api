import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

export default async () => {
  const DB_URI = config.get<string>("DB_URI");
  await mongoose
    .connect(DB_URI)
    .then(() => {
      logger.info("connection established");
    })
    .catch((err) => {
      logger.error(err);
    });
};

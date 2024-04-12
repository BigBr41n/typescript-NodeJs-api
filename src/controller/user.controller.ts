import { Request, Response } from "express";
import logger from "../utils/logger";
import { createUser } from "../service/user.service";
import { CreateUserInput } from "../schema/user.schema";
import { omit } from "lodash";
export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);

    return res.status(200).json(omit(user.toJSON(), "password"));
  } catch (error: any) {
    logger.error(error);
    res.status(409).json({
      error: error.message,
    });
  }
}
